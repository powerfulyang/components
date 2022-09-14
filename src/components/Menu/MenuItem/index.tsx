import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { MenuContext } from '@/components/Menu/Context';
import { DropdownContext } from '@/components/Dropdown/Context';

export type MenuItemProps = {
  menuKey: string | number;
  activeClassName?: string;
} & HTMLAttributes<HTMLLIElement>;

export const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  menuKey,
  children,
  onClick,
  className,
  activeClassName = '',
  ...props
}) => {
  const { state, dispatch, handleMenuChange } = React.useContext(MenuContext);
  const { toggle } = React.useContext(DropdownContext);
  const { activeItemClassName, itemClassName = '', activeKey, focusItemIndex, items } = state;
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (items.findIndex((item) => item.menuKey === menuKey) === focusItemIndex) {
      ref.current?.focus();
    }
  }, [focusItemIndex, items, menuKey, onClick]);

  useEffect(() => {
    dispatch({
      type: 'RegisterItem',
      item: {
        menuKey,
      },
    });
    return () => {
      dispatch({
        type: 'UnRegisterItem',
        item: {
          menuKey,
        },
      });
    };
  }, [dispatch, menuKey]);

  const handleChange = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      dispatch({
        type: 'changeActiveKey',
        key: menuKey,
      });
      onClick?.(e);
      handleMenuChange?.current?.(menuKey);
      toggle?.(false);
    },
    [dispatch, handleMenuChange, menuKey, onClick, toggle],
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        dispatch({
          type: 'changeActiveKey',
          key: menuKey,
        });
        handleMenuChange?.current?.(menuKey);
        toggle?.(false);
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        dispatch({
          type: 'MoveFocus',
          to: 'Previous',
        });
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        dispatch({
          type: 'MoveFocus',
          to: 'Next',
        });
      }
    },
    [dispatch, handleMenuChange, menuKey],
  );

  const isFirstChild = useMemo(() => {
    return items[0]?.menuKey === menuKey;
  }, [items, menuKey]);

  const handleFocus = React.useCallback(() => {
    dispatch({
      type: 'MoveFocus',
      to: 'Specific',
      item: {
        menuKey,
      },
    });
  }, [dispatch, menuKey]);

  return (
    <li
      {...props}
      ref={ref}
      role="menuitem"
      tabIndex={isFirstChild ? 0 : -1}
      className={classNames(
        'px-3 py-2',
        'cursor-pointer rounded',
        {
          [activeItemClassName || activeClassName]: activeKey === menuKey,
          [itemClassName]: true,
        },
        className,
      )}
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
    >
      {children}
    </li>
  );
};
