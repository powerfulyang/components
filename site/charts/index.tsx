import { Chart, Curve } from '@/components';
import React from 'react';
import { XAxis } from '@/components/Charts/cartesian';
import { YAxis } from '@/components/Charts/cartesian/yAxis';

export const Charts = () => {
  return (
    <Chart
      width={500}
      height={400}
      data={[
        {
          name: 'A',
          value: 1,
        },
        {
          name: 'B',
          value: 2,
        },
        {
          name: 'C',
          value: 3,
        },
      ]}
    >
      <XAxis dataKey="name" />
      <YAxis dataKey="value" />
      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
      </linearGradient>
      <Curve
        fill="url(#gradient)"
        data={[
          {
            x: 100,
            y: 200,
          },
          {
            x: 200,
            y: 300,
          },
          {
            x: 300,
            y: 200,
          },
          {
            x: 400,
            y: 300,
          },
        ]}
        baseLine={[
          {
            x: 100,
            y: 400,
          },
          {
            x: 200,
            y: 400,
          },
          {
            x: 300,
            y: 400,
          },
          {
            x: 400,
            y: 400,
          },
        ]}
      />
    </Chart>
  );
};
