import { motion } from 'framer-motion';
import type { FC } from 'react';
import React, { useState } from 'react';
import './index.scss';

export const WaveClick: FC = ({ children }) => {
  const [animate, setAnimate] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  return (
    <button
      type="button"
      className="py-wave-click"
      onClick={(e) => {
        if (!animate) {
          const { clientX, clientY } = e;
          const { left, top } = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
          setAnimate(true);
          setPosition({ left: clientX - left, top: clientY - top });
        }
      }}
    >
      {children}
      {animate && (
        <motion.div
          className="py-wave"
          style={{
            ...position,
            x: '-50%',
            y: '-50%',
          }}
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 2.5,
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          onAnimationComplete={() => {
            setAnimate(false);
          }}
        />
      )}
    </button>
  );
};
