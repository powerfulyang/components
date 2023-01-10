import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { UserInfo } from '@/types/GithubUserInfo';

type Props = {
  userInfo?: UserInfo;
} & React.SVGProps<SVGSVGElement>;

const width = 1280;
const height = 850;

export const GithubProfile: FC<Props> = ({ userInfo, ...props }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!userInfo) return () => {};
    const svg = d3.select(ref.current);
    const group = svg.append('g');

    const dx = width / 64;
    const dy = dx * Math.tan((30 * Math.PI) / 180);
    const weekCount = Math.ceil(userInfo.contributionCalendar.length / 7);
    const dxx = dx * 0.9;
    const dyy = dy * 0.9;
    const offsetX = dx * 7;
    const offsetY = height - (weekCount + 7) * dy;

    // add color
    const saturation = '50%';
    const getNumberOfLevel = (level: string) => {
      switch (level) {
        case 'FIRST_QUARTILE':
          return 1;
        case 'SECOND_QUARTILE':
          return 2;
        case 'THIRD_QUARTILE':
          return 3;
        case 'FOURTH_QUARTILE':
          return 4;
        default:
          return 0;
      }
    };

    const addColor = (
      el: d3.Selection<SVGRectElement, unknown, null, unknown>,
      week: number,
      contributionLevel: string,
      darker: number,
    ) => {
      const offsetHue = week * -7;
      const lightness = ['20%', '30%', '35%', '40%', '50%'][getNumberOfLevel(contributionLevel)]!;
      const values = new Array(7)
        .fill(0)
        .map((_, index) => {
          return (index * 60 + offsetHue) % 360;
        })
        .map((v) => {
          return `hsl(${v}, ${saturation}, ${lightness})`;
        })
        .map((v) => {
          return d3.rgb(v).darker(darker);
        })
        .join(';');
      el.append('animate')
        .attr('attributeName', 'fill')
        .attr('values', values)
        .attr('dur', '10s')
        .attr('repeatCount', 'indefinite');
    };

    userInfo.contributionCalendar.forEach((d, i) => {
      const date = new Date(d.date);
      const dayOfWeek = date.getUTCDay(); // 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
      const week = Math.floor(i / 7);
      const baseX = offsetX + (week - dayOfWeek) * dx;
      const baseY = offsetY + (week + dayOfWeek) * dy;
      const calHeight = Math.log10(d.contributionCount / 20 + 1) * 144 + 3;
      const { contributionLevel } = d;
      // 64 weeks
      const bar = group.append('g').attr('transform', `translate(${baseX}, ${baseY - calHeight})`);
      // animation
      if (d.contributionLevel !== 'NONE') {
        bar
          .append('animateTransform')
          .attr('attributeName', 'transform')
          .attr('type', 'translate')
          .attr('from', `${baseX} ${baseY - 3}`)
          .attr('to', `${baseX} ${baseY - calHeight}`)
          .attr('dur', '3s')
          .attr('repeatCount', '1');
      }
      //
      const withTop = dxx;
      const topPanel = bar
        .append('rect')
        .attr('stroke', 'none')
        .attr('width', withTop)
        .attr('height', withTop)
        .attr('x', 0)
        .attr('y', 0)
        .attr(
          'transform',
          `skewY(-30) skewX(${Math.atan(dxx / 2 / dyy) * (180 / Math.PI)}) scale(${dxx / withTop} ${
            (2 * dyy) / withTop
          })`,
        );
      addColor(topPanel, week, contributionLevel, 0);
      // left panel
      const leftWidth = dxx;
      const scaleLeft = Math.sqrt(dxx ** 2 + dyy ** 2) / leftWidth;
      const leftHeight = calHeight / scaleLeft;
      const leftPanel = bar
        .append('rect')
        .attr('stroke', 'none')
        .attr('width', leftWidth)
        .attr('height', leftHeight)
        .attr('x', 0)
        .attr('y', 0)
        .attr('transform', `skewY(30) scale(${dxx / leftWidth}, ${scaleLeft})`);
      addColor(leftPanel, week, contributionLevel, 0.5);
      // left panel animation
      if (d.contributionLevel !== 'NONE') {
        leftPanel
          .append('animate')
          .attr('attributeName', 'height')
          .attr('from', 3 / scaleLeft)
          .attr('to', leftHeight)
          .attr('dur', '3s')
          .attr('repeatCount', '1');
      }
      // right panel
      const rightWidth = dxx;
      const scaleRight = Math.sqrt(dxx ** 2 + dyy ** 2) / rightWidth;
      const rightHeight = calHeight / scaleRight;
      const rightPanel = bar
        .append('rect')
        .attr('stroke', 'none')
        .attr('width', rightWidth)
        .attr('height', rightHeight)
        .attr('x', 0)
        .attr('y', 0)
        .attr(
          'transform',
          `translate(${dxx},${dyy}) skewY(-30) scale(${dxx / rightWidth}, ${scaleRight})`,
        );
      addColor(rightPanel, week, contributionLevel, 1);
      // right panel animation
      if (d.contributionLevel !== 'NONE') {
        rightPanel
          .append('animate')
          .attr('attributeName', 'height')
          .attr('from', 3 / scaleRight)
          .attr('to', rightHeight)
          .attr('dur', '3s')
          .attr('repeatCount', '1');
      }
    });
    return () => {
      group.remove();
    };
  }, [userInfo]);

  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    />
  );
};
