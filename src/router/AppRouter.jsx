import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../ui";
import { LoginPage } from "../auth";
import { DcPage, MarvelPage } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="Login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
