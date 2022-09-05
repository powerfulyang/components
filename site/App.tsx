import React from 'react';
import './app.scss';
import { Menu } from '@/components/Menu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Skeleton } from '@/components';
import { ButtonComponents } from './pages/Button';
import { DialogComponents } from './pages/Dialog';

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="main">
        <div className="left-side w-[200px]">
          <Menu className="">
            <Menu.Group title="Components">
              <Menu.Item
                menuKey="Button"
                onClick={() => {
                  navigate('/button');
                }}
              >
                Button
              </Menu.Item>
              <Menu.Item
                menuKey="Dialog"
                onClick={() => {
                  navigate('/dialog');
                }}
              >
                Dialog
              </Menu.Item>
              <Menu.Item
                menuKey="Skeleton"
                onClick={() => {
                  navigate('/skeleton');
                }}
              >
                Skeleton
              </Menu.Item>
            </Menu.Group>
          </Menu>
        </div>
        <div className="components-container">
          <Routes>
            <Route path="/" element={<div>组件列表</div>} />
            <Route path="/button" element={<ButtonComponents />} />
            <Route path="/dialog" element={<DialogComponents />} />
            <Route path="/skeleton" element={<Skeleton />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
