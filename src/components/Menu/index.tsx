import type { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react';
import React, { createContext, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useLatest } from '@powerfulyang/hooks';

const MenuContext = createContext<{
  activeKey: string | number | null;
  setActiveKey: (key: string | number) => void;
  activeItemClassName?: string;
  itemClassName?: string;
}>({
  activeKey: null,
  setActiveKey: () => {},
});

type MenuItemProps = {
  menuKey: string | number;
  activeClassName?: string;
} & HTMLAttributes<HTMLUListElement>;

export const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  menuKey,
  children,
  onClick,
  className,
  activeClassName = '',
  ...props
}) => {
  const {
    activeKey,
    setActiveKey,
    activeItemClassName = '',
    itemClassName = '',
  } = React.useContext(MenuContext);
  const handleChange = React.useCallback(
    (e) => {
      setActiveKey(menuKey);
      onClick?.(e);
    },
    [menuKey, onClick, setActiveKey],
  );

  return (
    <ul
      {...props}
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
      role="presentation"
    >
      {children}
    </ul>
  );
};

type MenuGroupProps = {
  title: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const MenuGroup: FC<PropsWithChildren<MenuGroupProps>> = ({ title, className, children }) => {
  return (
    <li>
      <div className={classNames('mb-2 text-lg', className)}>{title}</div>
      {children}
    </li>
  );
};

type MenuProps = {
  defaultActiveKey?: string | number | null;
  activeKey?: string | number | null;
  onMenuChange?: (key: string | number) => void;
  activeItemClassName?: string;
  itemClassName?: string;
} & HTMLAttributes<HTMLUListElement>;

type MenuType = FC<PropsWithChildren<MenuProps>> & {
  Item: typeof MenuItem;
  Group: typeof MenuGroup;
};

export const Menu: MenuType = ({
  children,
  className,
  defaultActiveKey,
  activeKey,
  onMenuChange,
  activeItemClassName,
  itemClassName,
}) => {
  const [active, setActive] = React.useState<string | number | null>(() => {
    return defaultActiveKey || null;
  });

  const handleMenuChange = useLatest(onMenuChange);

  useEffect(() => {
    if (active) {
      handleMenuChange.current?.(active);
    }
  }, [active, handleMenuChange]);

  const contextValue = useMemo(
    () => ({
      activeKey: activeKey || active,
      setActiveKey: setActive,
      activeItemClassName,
      itemClassName,
    }),
    [active, activeItemClassName, activeKey, itemClassName],
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <ul className={classNames(className)}>{children}</ul>
    </MenuContext.Provider>
  );
};

Menu.Item = MenuItem;
Menu.Group = MenuGroup;
