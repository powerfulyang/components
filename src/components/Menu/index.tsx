import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import React, { createContext, useMemo } from 'react';
import classNames from 'classnames';

const MenuContext = createContext<{
  activeKey: string | number | null;
  setActiveKey: (key: string | number) => void;
}>({
  activeKey: null,
  setActiveKey: () => {},
});

type MenuItemProps = {
  menuKey: string | number;
} & HTMLAttributes<HTMLUListElement>;

export const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({ menuKey, children, ...props }) => {
  const { activeKey, setActiveKey } = React.useContext(MenuContext);
  const handleChange = React.useCallback(() => {
    setActiveKey(menuKey);
  }, [menuKey, setActiveKey]);
  return (
    <ul
      {...props}
      className={classNames(
        {
          'bg-[color:var(--hover-menu-bg)]': menuKey === activeKey,
        },
        'rounded cursor-pointer hover:bg-[color:var(--hover-menu-bg)] p-2 text-white my-0.5 text-sm',
        props.className,
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
};

const MenuGroup: FC<PropsWithChildren<MenuGroupProps>> = ({ title, children }) => {
  return (
    <li>
      <div className="text-[color:var(--inactive-color)] mb-2 text-lg font-medium">{title}</div>
      {children}
    </li>
  );
};

type MenuProps = {
  defaultActiveKey?: string | number | null;
} & HTMLAttributes<HTMLUListElement>;

type MenuType = FC<PropsWithChildren<MenuProps>> & {
  Item: typeof MenuItem;
  Group: typeof MenuGroup;
};

export const Menu: MenuType = ({ children, defaultActiveKey }) => {
  const [activeKey, setActiveKey] = React.useState<string | number | null>(() => {
    return defaultActiveKey || null;
  });
  const contextValue = useMemo(() => ({ activeKey, setActiveKey }), [activeKey, setActiveKey]);

  return (
    <MenuContext.Provider value={contextValue}>
      <ul className="p-4">{children}</ul>
    </MenuContext.Provider>
  );
};

Menu.Item = MenuItem;
Menu.Group = MenuGroup;
