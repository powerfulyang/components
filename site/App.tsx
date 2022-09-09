import React from 'react';
import './app.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { Tab, Tabs } from '@/components/Tabs';
import { Components } from './pages/Components';

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <div className="header">
          <div className="menu-circle" />
          <Tabs
            tabClassName="hover:text-white text-[color:var(--inactive-color)]"
            className="header-menu"
            activeClassName="!text-white"
            defaultActiveTabKey="1"
          >
            <Tab tabKey="1">
              <Link to="/components">Components</Link>
            </Tab>
            <Tab tabKey="2">
              <Link to="/a" className="notify">
                Your work
              </Link>
            </Tab>
            <Tab tabKey="3">
              <Link to="/a">Discover</Link>
            </Tab>
            <Tab tabKey="4">
              <Link to="/a" className="notify">
                Market
              </Link>
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
