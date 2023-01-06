import { Area, Chart } from '@/components';
import React from 'react';
import { XAxis } from '@/components/Charts/cartesian';
import { YAxis } from '@/components/Charts/cartesian/yAxis';
import { Grid } from '@/components/Charts/cartesian/Grid';

export const Charts = () => {
  return (
    <Chart
      width={500}
      height={400}
      data={[
        {
          name: 'A',
          value1: 1,
          value2: 1,
        },
        {
          name: 'B',
          value1: 1,
          value2: 2,
        },
        {
          name: 'C',
          value1: 2,
          value2: 1,
        },
      ]}
      padding={{
        left: 30,
        bottom: 30,
        top: 30,
        right: 30,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.5} />
        <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.01} />
      </linearGradient>
      <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8884d8" stopOpacity={0.5} />
        <stop offset="100%" stopColor="#8884d8" stopOpacity={0.01} />
      </linearGradient>
      <Area fill="url(#gradient1)" dataKey="value1" />
      <Area fill="url(#gradient2)" dataKey="value2" />
      <Grid />
    </Chart>
  );
};
