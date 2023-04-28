import type { MouseEvent, PropsWithChildren, ReactElement } from 'react';
import { cloneElement, forwardRef, useCallback } from 'react';
import RippleEffect from '@/components/RippleEffect';
import { Icon } from '@/components/Icon';
import { ClassNames, css, keyframes } from '@emotion/react';
import classNames from 'classnames';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';

export type ButtonProps = PropsWithChildren<
  HTMLMotionProps<'button'> & {
    ripple?: boolean;
    appearance?: 'primary' | 'secondary' | 'error' | 'info';
    ghost?: boolean;
    rounded?: boolean;
    icon?: ReactElement;
    loading?: boolean;
  }
>;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      onClick,
      ripple = true,
      appearance = 'info',
      rounded = false,
      icon,
      loading = false,
      ghost = false,
      ...props
    },
    ref,
  ) => {
    const { disabled = loading } = props;
    const canClick = !disabled && !loading;

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        if (canClick && onClick) {
          onClick(e);
        }
      },
      [canClick, onClick],
    );

    const theme = useTheme();
    const color = theme.palette[appearance].main;

    return (
      <motion.button
        type="button"
        ref={ref}
        css={[
          css({
            display: 'inline-flex',
            justifySelf: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '.65rem 1rem',
            color: 'white',
            cursor: loading ? 'not-allowed' : 'pointer',
            border: 'none',
            borderRadius: rounded ? '9999px' : '0.5rem',
            backgroundColor: 'transparent',
          }),
          css`
            &:disabled,
            &[data-loading='true'] {
              cursor: not-allowed;
              opacity: 0.5;
              background-color: ${theme.palette.grey['400']};
            }
            &:not(:disabled) {
              background-color: ${color};
            }
            &:not(:disabled):not([data-loading='true']):hover {
              filter: brightness(1.1);
            }
          `,
          ghost &&
            css`
              &:not(:disabled) {
                border: 1px solid ${color};
                background-color: transparent;
              }
            `,
        ]}
        className={className}
        onClick={handleClick}
        data-loading={loading}
        {...props}
      >
        <ClassNames>
          {({ css: CSS }) => {
            return (
              <>
                {loading && (
                  <Icon
                    type="icon-loading"
                    css={CSS`
                      margin-right: 0.6rem;
                      transform-origin: center;
                      animation: ${spin} 1s linear infinite;
                    `}
                  />
                )}
                {!loading &&
                  icon &&
                  cloneElement(icon, {
                    ...icon.props,
                    className: classNames(
                      CSS`
                      margin-right: 0.6rem;

                    `,
                      icon.props.className,
                    ),
                  })}
              </>
            );
          }}
        </ClassNames>
        {children}
        {ripple && canClick && <RippleEffect />}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
