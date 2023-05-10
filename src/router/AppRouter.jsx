import { Navigate, Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';

import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='Login' element={<LoginPage />} />

        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
