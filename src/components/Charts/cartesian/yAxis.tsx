import type { FC } from 'react';
import React, { useContext, useRef } from 'react';
import { ChartContext } from '@/components/Charts/ChartContext';
import * as d3 from 'd3';
import { useAtom } from 'jotai';
import { useIsomorphicLayoutEffect } from '@powerfulyang/hooks';

type YAxisProps = {};

export const YAxis: FC<YAxisProps> = () => {
  const ref = useRef<SVGGElement>(null);
  const { atomInstance, width, height, padding, data } = useContext(ChartContext);
  const [chartState, setChartState] = useAtom(atomInstance);
  const xAxisHeight = chartState.xAxis.size;
  const { dataKeys } = chartState.yAxis;
  useIsomorphicLayoutEffect(() => {
    if (ref.current && xAxisHeight) {
      const range = [0, height - padding.bottom - xAxisHeight - padding.top];
      const g = d3.select(ref.current);
      const yScale = d3
        .scaleLinear()
        .domain([
          d3.max(data, (d) => {
            const values = dataKeys.map((key) => d[key]);
            return Math.max(...values);
          }) || 0,
          0,
        ])
        .range(range);
      g.call(d3.axisLeft(yScale));
      const yAxisWidth = g.node()?.getBBox().width || 0;
      setChartState((draft) => {
        draft.yAxis.size = yAxisWidth;
        draft.yAxis.scale = yScale;
      });
      g.attr('transform', `translate(${yAxisWidth + padding.left}, ${padding.top})`);
    }
  }, [
    chartState.xAxis.dataKey,
    data,
    dataKeys,
    height,
    padding.bottom,
    padding.left,
    padding.top,
    setChartState,
    width,
    xAxisHeight,
  ]);
  return <g ref={ref} />;
};
