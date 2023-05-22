import { Navigate, useParams } from "react-router-dom";
import { getHeroByld } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroByld(id);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return <h1>HeroPage</h1>;
};
