import type { FC } from 'react';
import React, { useMemo } from 'react';
import * as d3 from 'd3';
import type { UserInfo } from '@/types/GithubUserInfo';

type Props = {
  userInfo?: UserInfo;
} & React.SVGProps<SVGSVGElement>;

const width = 1280;
const height = 850;

export const GithubProfile: FC<Props> = ({ userInfo, ...props }) => {
  const Profile = useMemo(() => {
    if (!userInfo) return null;

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

    const addColor = (week: number, contributionLevel: string, darker: number) => {
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
      return <animate attributeName="fill" values={values} dur="10s" repeatCount="indefinite" />;
    };

    return userInfo.contributionCalendar.map((d, i) => {
      const date = new Date(d.date);
      const dayOfWeek = date.getUTCDay(); // 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
      const week = Math.floor(i / 7);
      const baseX = offsetX + (week - dayOfWeek) * dx;
      const baseY = offsetY + (week + dayOfWeek) * dy;
      const calHeight = Math.log10(d.contributionCount / 20 + 1) * 144 + 3;
      const { contributionLevel } = d;
      //
      const withTop = dxx;
      const TopPanel = (
        <rect
          stroke="none"
          width={withTop}
          height={withTop}
          x={0}
          y={0}
          transform={`skewY(-30) skewX(${Math.atan(dxx / 2 / dyy) * (180 / Math.PI)}) scale(${
            dxx / withTop
          } ${(2 * dyy) / withTop})`}
        >
          {addColor(week, contributionLevel, 0)}
        </rect>
      );
      // left panel
      const leftWidth = dxx;
      const scaleLeft = Math.sqrt(dxx ** 2 + dyy ** 2) / leftWidth;
      const leftHeight = calHeight / scaleLeft;
      const LeftPanel = (
        <rect
          stroke="none"
          width={leftWidth}
          height={leftHeight}
          x={0}
          y={0}
          transform={`skewY(30) scale(${dxx / leftWidth}, ${scaleLeft})`}
        >
          {addColor(week, contributionLevel, 0.5)}
          {d.contributionLevel !== 'NONE' && (
            <animate
              attributeName="height"
              from={3 / scaleLeft}
              to={leftHeight}
              dur="3s"
              repeatCount={1}
            />
          )}
        </rect>
      );
      // right panel
      const rightWidth = dxx;
      const scaleRight = Math.sqrt(dxx ** 2 + dyy ** 2) / rightWidth;
      const rightHeight = calHeight / scaleRight;
      const RightPanel = (
        <rect
          stroke="none"
          width={rightWidth}
          height={rightHeight}
          x={0}
          y={0}
          transform={`translate(${dxx},${dyy}) skewY(-30) scale(${
            dxx / rightWidth
          }, ${scaleRight})`}
        >
          {addColor(week, contributionLevel, 1)}
          {d.contributionLevel !== 'NONE' && (
            <animate
              attributeName="height"
              from={3 / scaleRight}
              to={rightHeight}
              dur="3s"
              repeatCount={1}
            />
          )}
        </rect>
      );
      return (
        <g key={d.date} transform={`translate(${baseX}, ${baseY - calHeight})`}>
          {d.contributionLevel !== 'NONE' && (
            <animateTransform
              attributeName="transform"
              type="translate"
              from={`${baseX} ${baseY - 3}`}
              to={`${baseX} ${baseY - calHeight}`}
              dur="3s"
              repeatCount="1"
            />
          )}
          {TopPanel}
          {LeftPanel}
          {RightPanel}
        </g>
      );
    });
  }, [userInfo]);

  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Profile}
    </svg>
  );
};
