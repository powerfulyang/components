import React from 'react';
import { atomWithImmer } from 'jotai-immer';
import type * as d3 from 'd3';

export const ChartContext = React.createContext<{
  data: any[];
  width: number;
  height: number;
  padding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  atomInstance: ReturnType<
    typeof atomWithImmer<{
      xAxis: {
        size: number;
        dataKey: string;
        scale?: d3.AxisScale<any>;
      };
      yAxis: {
        size: number;
        dataKeys: string[];
        scale?: d3.AxisScale<any>;
      };
    }>
  >;
}>({
  atomInstance: atomWithImmer({
    xAxis: {
      size: 0,
      dataKey: '',
    },
    yAxis: {
      size: 0,
      dataKeys: [],
    },
  }),
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  data: [],
});
