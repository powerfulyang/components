import type { FC } from 'react';
import React, { useContext, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import { area } from 'd3';
import { ChartContext } from '@/components/Charts/ChartContext';
import { useAtom } from 'jotai';

type CurveProps = {
  dataKey: string;
  baseDataKey?: string;
} & React.SVGProps<SVGPathElement>;
export const Area: FC<CurveProps> = ({ dataKey, baseDataKey, ...props }) => {
  const { atomInstance, padding, data } = useContext(ChartContext);
  const [chartState, setChartState] = useAtom(atomInstance);
  const { xAxis, yAxis } = chartState;
  useEffect(() => {
    setChartState((draft) => {
      draft.yAxis.dataKeys.push(dataKey);
    });
  }, [dataKey, setChartState]);
  const yAxisWidth = yAxis.size;
  const path = useMemo(() => {
    if (xAxis.scale && yAxis.scale && xAxis.dataKey) {
      const tmp = area(
        // @ts-ignore
        (d) => yAxis.scale?.(d[dataKey]) ?? 0,
        // @ts-ignore
        (d) => yAxis.scale?.(d[baseDataKey] ?? 0) ?? 0,
      ).curve(d3.curveNatural)(data);
      return tmp ?? '';
    }
    return '';
  }, [baseDataKey, data, dataKey, xAxis, yAxis]);
  return (
    <path
      d={path}
      transform={`translate(${padding.left + yAxisWidth}, ${padding.top})`}
      {...props}
    />
  );
};
