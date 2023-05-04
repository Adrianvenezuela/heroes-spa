import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DCPage } from "../heroes/pages/DCPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="DC" element={<DCPage />} />

        <Route path="login" element={<loginPage />} />

        <Route path="/" element={<navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
