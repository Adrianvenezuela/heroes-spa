import { Route, Routes } from "react-router-dom";

import { Navbar } from "../ui";

import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DCPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="DC" element={<DcPage />} />

        <Route path="login" element={<loginPage />} />

        <Route path="/" element={<navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
