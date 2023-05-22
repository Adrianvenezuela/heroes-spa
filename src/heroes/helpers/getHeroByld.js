import { heroes } from "../data/heroes";

export const getHeroByld = () => {
  return heroes.find((hero) => hero.id === id);
};
