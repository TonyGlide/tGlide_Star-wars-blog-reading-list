import { Link } from "react-router-dom";
import React from "react";


const PeopleCard = ({uid, name, url}) => {

return (
<>
        <div className="col-3">
        <div className="card" style={{width: "11rem"}}>
              <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" alt={name}/>
              <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">_________</p>
              <Link to={`/people/${uid}`}>
              <button className="btn btn-primary">
                ...details.
              </button>
              </Link>
             
              <button onClick={(e) => actions.getFavorites(uid, name)} type="button" className="btn btn-outline-warning ms-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                            </svg>
              </button>

              </div>
        </div>
        </div>

</>
);
}

export default PeopleCard;
