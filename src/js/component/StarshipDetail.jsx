import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const StarshipDetail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log("Params: ", params)
    useEffect(() => {
        actions.getStarshipDetail(params.id)
    }, [])

    return (
        <>
            <div className="container mt-5 p-3 border border-2 border-warning-subtle rounded-2 bg-dark">
                <div className="d-flex row mb-5">
                    <div className="col">
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg` ==
                            "https://starwars-visualguide.com/assets/img/starships/2.jpg" ||
                            `https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg` ==
                            "https://starwars-visualguide.com/assets/img/starships/3.jpg" ||
                            `https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg` ==
                            "https://starwars-visualguide.com/assets/img/starships/17.jpg" ?
                            "https://starwars-visualguide.com/assets/img/placeholder.jpg" :
                            `https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`}
                            className="m-1 rounded" />
                    </div>
                    <div className="col">
                        <h2 className="text-center fw-bold text-warning">{store.starshipDetail.name}</h2>
                        <p className="fw-lighter text-start mt-4 fs-4 text-light">
                        Star Wars is a space opera franchise that takes place in a fictional galaxy 
                        "a long time ago" where humans, aliens, and robots coexist. The story follows
                         characters on their adventures across multiple eras, often involving struggles
                          between good and evil. The original trilogy, which began with Star Wars: A New Hope 
                          in 1977, tells the story of Luke Skywalker and Leia Organa as they fight against the
                           Galactic Empire. The sequel trilogy focuses on Rey, a new generation of Jedi who faces
                            off against Kylo Ren, the grandson of Luke's father Anakin.
                        </p>
                    </div>
                </div>
                <hr className="border-warning border border-1" />
                <div className="container mt-5">
                    <div className="d-flex justify-content-between row">
                        <div className="col">
                            <p className="fw-bold text-center text-warning">Model</p>
                            <p className="text-center fw-lighter text-light">{store.starshipDetail.model}</p>
                        </div>
                        <div className="col">
                            <p className="fw-bold text-center text-warning">Starship Class</p>
                            <p className="text-center fw-lighter text-light">{store.starshipDetail.starship_class}</p>
                        </div>
                        <div className="col">
                            <p className="fw-bold text-center text-warning">Manufacturer</p>
                            <p className="text-center fw-lighter text-light">{store.starshipDetail.manufacturer}</p>
                        </div>
                        <div className="col">
                            <p className="fw-bold text-center text-warning">Length</p>
                            <p className="text-center fw-lighter text-light">{store.starshipDetail.length}</p>
                        </div>
                        <div className="col">
                            <p className="fw-bold text-center text-warning">Crew</p>
                            <p className="text-center fw-lighter text-light">{store.starshipDetail.crew}</p>
                        </div>
                        <div className="col">
                            <p className="fw-bold text-center text-warning">Passengers</p>
                            <p className="text-center fw-lighter text-light">{store.starshipDetail.passengers}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Link to="/">
                        <button className="btn btn-outline-warning btn-sm"><i className="fa-solid fa-angles-left"></i> Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
}