import React from 'react';
import './app.scss';
import { Menu } from '@/components/Menu';

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <div className="left-side w-[200px]">
          <Menu className="">
            <Menu.Group title="Components">
              <Menu.Item className="font-light" menuKey="Button">
                Button
              </Menu.Item>
              <Menu.Item className="font-light" menuKey="Dialog">
                Dialog
              </Menu.Item>
            </Menu.Group>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default App;
