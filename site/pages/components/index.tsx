import { Navigate, Route, Routes } from 'react-router-dom';
import type { FC } from 'react';
import { ButtonComponents } from '../../components/Button';

export const Components: FC = () => {
  return (
    <div className="flex">
      <div className="components-container">
        <Routes>
          <Route index element={<Navigate replace to="/components/button" />} />
          <Route path="/button" element={<ButtonComponents />} />
        </Routes>
      </div>
    </div>
  );
};
