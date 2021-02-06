import React, { FC, useEffect, useRef } from 'react';

export const TagCloud: FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {}, []);
  return <canvas ref={ref} />;
};
