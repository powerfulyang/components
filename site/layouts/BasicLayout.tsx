import { Outlet } from 'react-router-dom';

export const BasicLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
