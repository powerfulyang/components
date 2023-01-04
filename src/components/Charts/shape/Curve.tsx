import type { Point } from 'framer-motion';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import * as d3 from 'd3';
import { area } from 'd3';

type CurveProps = {
  data: Array<Point>;
  baseLine?: Array<Point>;
} & React.SVGProps<SVGPathElement>;
export const Curve: FC<CurveProps> = ({ data, baseLine, ...props }) => {
  const path = useMemo(() => {
    const a = area<Point>(
      (d) => d.x,
      (d) => d.y,
      (_, index) => baseLine?.[index]?.y || 0,
    ).curve(d3.curveNatural);
    return a(data) || '';
  }, [baseLine, data]);
  return <path d={path} {...props} />;
};
