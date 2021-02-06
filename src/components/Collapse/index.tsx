import React from 'react';
import AnimateHeight, { AnimateHeightProps } from 'react-animate-height';
import { __dev__ } from '@powerfulyang/utils';
import { forwardRef } from '@/utils/forwardRef';

export interface CollapseOptions {
  /**
   * If `true`, the content will be visible
   */
  isOpen?: boolean;
  /**
   * If `true`, the opacity of the content will be animated
   */
  animateOpacity?: boolean;
  /**
   * The duration of the animation in `ms`
   */
  duration?: number;
  /**
   * The height you want the content in it's collapsed state. Set to `0` by default
   */
  startingHeight?: number | string;
  /**
   * The height you want the content in it's expanded state. Set to `auto` by default
   */
  endingHeight?: number | string;
  /**
   * The function to be called when the collapse animation starts. It provides the `newHeight` as an argument
   */
  onAnimationEnd?(props: { newHeight: number }): void;
  /**
   * The function to be called when the collapse animation ends. It provides the `newHeight` as an argument
   */
  onAnimationStart?(props: { newHeight: number }): void;
}

export interface CollapseProps extends AnimateHeightProps, CollapseOptions {}

export const Collapse = forwardRef<CollapseProps, 'div'>((props, ref) => {
  const {
    isOpen,
    animateOpacity = true,
    onAnimationStart,
    onAnimationEnd,
    duration,
    easing,
    startingHeight = 0,
    endingHeight = 'auto',
    as: Component = 'div',
    ...rest
  } = props;
  return (
    <AnimateHeight
      duration={duration}
      easing={easing}
      animateOpacity={animateOpacity}
      height={isOpen ? endingHeight : startingHeight}
      applyInlineTransitions={false}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      <Component ref={ref} {...rest} />
    </AnimateHeight>
  );
});

if (__dev__) {
  Collapse.displayName = 'Collapse';
}
