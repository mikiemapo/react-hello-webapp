import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Aboutpeople = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  let person = store.characters[parseInt(params.id)];
  return (
    <div className="card-text">
      <div>
        <img></img>
        <div>
          <h2>{person.name}</h2>
          <p>
            The approach will not be easy. You are required to maneuver straight
            down this trench and skim the surface to this point. The target area
            is only two meters wide. It’s a small thermal exhaust port, right
            below the main port. The shaft leads directly to the reactor system.
            A precise hit will start a chain reaction which should destroy the
            station. Only a precise hit will set up a chain reaction. The shaft
            is ray-shielded, so you’ll have to use proton torpedoes. That’s
            impossible, even for a computer. It’s not impossible. I used to
            bull’s-eye womp rats in my T-sixteen back home. They’re not much
            bigger than two meters. Man your ships! And may the Force be with
            you!
          </p>
        </div>
      </div>
      <div>
        <p>height :{person.height}</p>
        <p>eye color :{person.eye_color}</p>
        <p>hair color :{person.hair_color}</p>
        <p>birth year :{person.birth_year}</p>
      </div>
    </div>
  );
};
export default Aboutpeople;
