import type { FC } from 'react';
import React, { useContext, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ChartContext } from '..';

type XAxisProps = {
  dataKey: string;
};

export const XAxis: FC<XAxisProps> = ({ dataKey }) => {
  const ref = useRef<SVGGElement>(null);
  const { data, width, height, xAxisHeight, yAxisWidth } = useContext(ChartContext);
  const xH = xAxisHeight;
  useEffect(() => {
    if (ref.current) {
      const g = d3.select(ref.current);
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d[dataKey]))
        .range([yAxisWidth, width]);
      g.call(d3.axisBottom(xScale));
      g.attr('transform', `translate(0, ${height - xH})`);
    }
  }, [data, dataKey, height, width, xH, yAxisWidth]);
  return <g ref={ref} />;
};
