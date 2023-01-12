import type { FC } from 'react';
import { useContext, useRef } from 'react';
import * as d3 from 'd3';
import { useAtom } from 'jotai';
import { ChartContext } from '@/components/Charts/ChartContext';
import { useIsomorphicLayoutEffect } from '@powerfulyang/hooks';

type XAxisProps = {
  dataKey: string;
};

export const XAxis: FC<XAxisProps> = ({ dataKey }) => {
  const ref = useRef<SVGGElement>(null);
  const { atomInstance, width, height, padding, data } = useContext(ChartContext);
  const [chartState, setChartState] = useAtom(atomInstance);
  const yAxisWidth = chartState.yAxis.size;
  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const range = [0, width - padding.right - padding.left - yAxisWidth];
      const g = d3.select(ref.current);
      const xScale = d3
        .scalePoint()
        .domain(data.map((d) => d[dataKey]))
        .range(range);
      g.call(d3.axisBottom(xScale));
      const xAxisHeight = g.node()?.getBBox().height || 0;
      setChartState((draft) => {
        draft.xAxis.size = xAxisHeight;
        draft.xAxis.scale = xScale;
        draft.xAxis.dataKey = dataKey;
      });
      if (yAxisWidth) {
        g.attr(
          'transform',
          `translate(${padding.left + yAxisWidth}, ${height - padding.bottom - xAxisHeight})`,
        );
      }
    }
  }, [
    data,
    dataKey,
    height,
    padding.bottom,
    padding.left,
    padding.right,
    setChartState,
    width,
    yAxisWidth,
  ]);
  return <g ref={ref} />;
};
