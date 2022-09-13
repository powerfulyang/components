import React, { useMemo } from 'react';
import classNames from 'classnames';
import { MenuItem } from '@/components/Menu/MenuItem';
import { MenuGroup } from '@/components/Menu/MenuGroup';
import { useImmerReducer, useLatest } from '@powerfulyang/hooks';
import type { MenuType, ReducerAction, State } from '@/components/Menu/Context';
import { MenuContext, reducer } from '@/components/Menu/Context';

export const Menu: MenuType = ({
  children,
  className,
  defaultActiveKey,
  activeKey,
  onMenuChange,
  activeItemClassName,
  itemClassName,
}) => {
  const [state, dispatch] = useImmerReducer<State, ReducerAction>(reducer, {
    activeKey: defaultActiveKey,
    items: [],
  });

  const handleMenuChange = useLatest(onMenuChange);

  const contextValue = useMemo(
    () => ({
      state: {
        ...state,
        activeKey: activeKey || state.activeKey,
        itemClassName,
        activeItemClassName,
      },
      dispatch,
      handleMenuChange,
    }),
    [state, activeKey, itemClassName, activeItemClassName, dispatch, handleMenuChange],
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <ul className={classNames(className)} role="menu">
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

Menu.Item = MenuItem;
Menu.Group = MenuGroup;
