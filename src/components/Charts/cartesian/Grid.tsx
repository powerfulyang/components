import React, { useContext, useEffect } from 'react';
import { ChartContext } from '@/components';
import { useAtom } from 'jotai';
import * as d3 from 'd3';

export const Grid = () => {
  const { padding, atomInstance, width } = useContext(ChartContext);
  const [chartState] = useAtom(atomInstance);
  const { yAxis } = chartState;
  const ref = React.useRef<SVGGElement>(null);
  useEffect(() => {
    if (ref.current && yAxis.scale) {
      d3.select(ref.current).call(
        d3
          .axisLeft(yAxis.scale)
          .ticks(3)
          .tickSize(-width + padding.left + padding.right + yAxis.size)
          .tickFormat(() => ''),
      );
      d3.select(ref.current).select('.tick:last-of-type').remove();
      d3.select(ref.current).select('.domain').remove();
      d3.select(ref.current)
        .selectAll('.tick line')
        .attr('fill', 'none')
        .attr('stroke', 'var(--inactive-color)')
        .attr('stroke-dasharray', '5 5');
    }
  }, [padding.left, padding.right, width, yAxis.scale, yAxis.size]);
  // horizontal grid
  return (
    <g
      className="cartesian-grid"
      ref={ref}
      transform={`translate(${padding.left + chartState.yAxis.size},${padding.top})`}
    />
  );
};
