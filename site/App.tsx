import React, { useMemo } from 'react';
import './app.scss';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs } from '@/components/Tabs';
import { Components } from './pages/components';
import { Charts } from './charts';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTabKey = useMemo(() => {
    return location.pathname.split('/')[1];
  }, [location.pathname]);
  return (
    <div className="app">
      <div className="main">
        <div className="header">
          <div className="menu-circle" />
          <Tabs
            tabClassName="hover:text-white text-[color:var(--inactive-color)] focus-visible:text-white focus-visible:outline-none"
            className="header-menu"
            activeClassName="!text-white"
            activeTabKey={activeTabKey}
            onTabChange={(key) => {
              navigate(`/${key}`);
            }}
          >
            <Tab tabKey="components" className="header-menu-item">
              Components
            </Tab>
            <Tab tabKey="2" className="notify header-menu-item">
              Your work
            </Tab>
            <Tab tabKey="3" className="header-menu-item">
              Discover
            </Tab>
            <Tab tabKey="charts" className="notify header-menu-item">
              Charts
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
          <Route index element={<Navigate replace to="/components" />} />
          <Route path="/components/*" element={<Components />} />
          <Route path="/charts/*" element={<Charts />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
