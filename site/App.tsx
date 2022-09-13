import React from 'react';
import './app.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Tab, Tabs } from '@/components/Tabs';
import { Components } from './pages/Components';

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="main">
        <div className="header">
          <div className="menu-circle" />
          <Tabs
            tabClassName="hover:text-white text-[color:var(--inactive-color)] focus-visible:text-white focus-visible:outline-none"
            className="header-menu"
            activeClassName="!text-white"
            defaultActiveTabKey="Components"
            onTabChange={(key) => {
              navigate(`/${key}`);
            }}
          >
            <Tab tabKey="Components" className="header-menu-item">
              Components
            </Tab>
            <Tab tabKey="2" className="notify header-menu-item">
              Your work
            </Tab>
            <Tab tabKey="3" className="header-menu-item">
              Discover
            </Tab>
            <Tab tabKey="4" className="notify header-menu-item">
              Market
            </Tab>
          </Tabs>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-profile">
            <img className="profile-img" src="/favicon.ico" alt="" />
          </div>
        </div>
        <Routes>
          <Route index element={<Components />} />
          <Route path="/components/*" element={<Components />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
