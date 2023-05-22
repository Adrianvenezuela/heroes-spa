import {} from "react-router-dom";

const CharactersByHero = ({ alter_ego, Characters }) => {
  // if (alter_ego === characters) return <></>;
  //return <p>{characters}</p>;
  return alter_ego === Characters ? <></> : <p>{Characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  Characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt="superhero" />
          </div>

          <div className="col-8"></div>
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>

            {/*
            alter_ego !== characters && <p>{characters}</p>
  */}
            <CharactersByHero characters={Characters} alter_ego={alter_ego} />

            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <link to={`/hero/${id}`}>Más..</link>
          </div>
        </div>
      </div>
    </div>
  );
};