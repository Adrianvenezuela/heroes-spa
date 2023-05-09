import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="DC" element={<DcPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
