import type { FC } from 'react';
import React, { useContext, useEffect, useRef } from 'react';
import { ChartContext } from '@/components';
import * as d3 from 'd3';

type YAxisProps = {
  dataKey: string;
};

export const YAxis: FC<YAxisProps> = ({ dataKey }) => {
  const ref = useRef<SVGGElement>(null);
  const { data, width, height, yAxisWidth, xAxisHeight } = useContext(ChartContext);
  const yW = yAxisWidth;
  const xH = xAxisHeight;
  useEffect(() => {
    if (ref.current) {
      const g = d3.select(ref.current);
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d[dataKey])])
        .range([height - xH, 20]);
      g.call(d3.axisLeft(yScale).ticks(5));
      g.attr('transform', `translate(${yW}, 0)`);
    }
  }, [data, dataKey, height, width, xH, yW]);
  return <g ref={ref} />;
};
