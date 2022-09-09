import { Menu } from '@/components/Menu';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Skeleton } from '@/components';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import { capitalize } from 'lodash-es';
import { ButtonComponents } from '../Button';
import { DialogComponents } from '../Dialog';
import { DropdownComponents } from '../Dropdown';
import { CheckboxComponents } from '../Checkbox';
import { RadioComponents } from '../Radio';
import { SwitchComponents } from '../Switch';

const components = ['Button', 'Dialog', 'Skeleton', 'Dropdown', 'Checkbox', 'Radio', 'Switch'];

export const Components: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeKey = useMemo(() => {
    const defaultKey = components[0];
    if (location.pathname === '/components') {
      return defaultKey;
    }
    return capitalize(location.pathname.split('/').pop()) || defaultKey;
  }, [location.pathname]);

  return (
    <div className="flex">
      <div className="left-side basis-[250px]">
        <Menu
          onMenuChange={(v: string) => {
            navigate(`/components/${v.toLowerCase()}`);
          }}
          activeKey={activeKey}
          className="p-6 font-light text-white"
          activeItemClassName="bg-[color:var(--hover-menu-bg)]"
        >
          <Menu.Group className="font-normal text-[color:var(--inactive-color)]" title="Components">
            {components.map((item) => (
              <Menu.Item
                menuKey={item}
                key={item}
                onClick={() => {
                  navigate(`/components/${item.toLowerCase()}`);
                }}
                className="m-1"
              >
                {item}
              </Menu.Item>
            ))}
          </Menu.Group>
        </Menu>
      </div>
      <div className="components-container">
        <Routes>
          <Route index element={<ButtonComponents />} />
          <Route path="/button" element={<ButtonComponents />} />
          <Route path="/dialog" element={<DialogComponents />} />
          <Route path="/skeleton" element={<Skeleton />} />
          <Route path="/dropdown" element={<DropdownComponents />} />
          <Route path="/checkbox" element={<CheckboxComponents />} />
          <Route path="/radio" element={<RadioComponents />} />
          <Route path="/switch" element={<SwitchComponents />} />
        </Routes>
      </div>
    </div>
  );
};
