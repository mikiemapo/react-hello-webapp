import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Planet = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {store.planets.length > 0 ? (
        store.planets.map((planet, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">
                  Population: {planet.population}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
