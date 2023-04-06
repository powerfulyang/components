import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useId } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const id = useId();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        flex-shrink: 0;
        height: 58px;
        border-bottom: 1px solid var(--border-color);
        padding: 0 30px;
        white-space: nowrap;
        @media screen and (max-width: 480px) {
          padding: 0 16px;
        }
      `}
    >
      <div
        css={css`
          width: 15px;
          height: 15px;
          background-color: #f96057;
          border-radius: 50%;
          box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
          margin-right: 6rem;
          flex-shrink: 0;
          @media screen and (max-width: 945px) {
            display: none;
          }
        `}
      />
      <ul
        css={css`
          display: flex;
          align-items: center;
          height: 100%;
          list-style: none;
        `}
      >
        {['Components', 'Projects', 'Charts'].map((item) => {
          return (
            <NavLink key={item} to={item}>
              {({ isActive }) => {
                return (
                  <li
                    key={item}
                    css={css`
                      position: relative;
                      cursor: pointer;
                      padding: 17px 30px;
                      text-decoration: none;
                      border-bottom: 2px solid transparent;
                      transition: 0.3s;
                      color: ${isActive ? 'white' : 'var(--inactive-color)'};
                      &:hover {
                        color: white;
                      }
                    `}
                  >
                    {item}
                    {isActive && (
                      <motion.div
                        layoutId={`${id}-tab`}
                        css={css`
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          height: 2px;
                          width: 100%;
                          background-color: white;
                        `}
                      />
                    )}
                  </li>
                );
              }}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
