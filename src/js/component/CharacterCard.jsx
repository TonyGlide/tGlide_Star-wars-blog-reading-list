import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = ({ name, id }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card me-2 col-3 bg-dark">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="rounded-top card-image-top"
      />
      <div className="card-body">
        <h5 className="card-title mb-4 fw-lighter font-monospace fs-6 fs-md-4 text-white">
          {name}
        </h5>
        <div className="d-flex content-between">
          <p className="text-light">

            <button className={`btn btn-outline-warning btn-sm${store.favorites.find((favorite) => favorite.name == name) ? "check text-danger"
              : "plus"
              } fs-3 addFavorite`} onClick={() => {
                actions.addFavorite(id, name);
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
              </svg>
              <br />
              <Link to={`/character-detail/${id}`}>

                <button className="btn btn-dark btn-outline">
                  More <i className="fa-solid fa-angles-right"></i>
                </button>

              </Link>
            </button>

          </p>

        </div>
      </div>
    </div>
  );
};