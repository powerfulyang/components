import { Menu } from '@/components/Menu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Skeleton } from '@/components';
import type { FC } from 'react';
import React from 'react';
import { ButtonComponents } from '../Button';
import { DialogComponents } from '../Dialog';
import { DropdownComponents } from '../Dropdown';
import { CheckboxComponents } from '../Checkbox';
import { RadioComponents } from '../Radio';

const components = ['Button', 'Dialog', 'Skeleton', 'Dropdown', 'Checkbox', 'Radio'];

export const Components: FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = React.useState<string | number>('Button');
  return (
    <div className="flex">
      <div className="left-side basis-[250px]">
        <Menu
          onMenuChange={(v) => {
            setActive(v);
          }}
          activeKey={active}
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
        </Routes>
      </div>
    </div>
  );
};
