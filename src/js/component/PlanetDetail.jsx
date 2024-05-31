import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const PlanetDetail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log("Params: ", params)
    useEffect(() => {
        actions.getPlanetDetail(params.id)
    }, [])

    return (
        <>
            <div className="container mt-5 p-3 border border-2 rounded-2 border-danger bg-dark">
                <div className="d-flex row mb-5">
                    <div className="col">
                        <img src="https://i.imgur.com/0zP3R0i.jpeg"
                            className="m-1 rounded" />
                    </div>
                    <div className="col">
                        <h2 className="text-center text-danger fw-bold" id="planets">{store.planetDetail.name}</h2>
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
                <hr className="border-danger border border-1" />
                <div className="container mt-5">
                    <div className="d-flex justify-content-between row">
                        <div className="col">
                            <p className="text-danger fw-bold text-center" id="planets">Diameter</p>
                            <p className="text-center fw-lighter text-light">{store.planetDetail.diameter}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center" id="planets">Gravity</p>
                            <p className="text-center fw-lighter text-light">{store.planetDetail.gravity}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center" id="planets">Population</p>
                            <p className="text-center fw-lighter text-light">{store.planetDetail.population}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center" id="planets">Climate</p>
                            <p className="text-center fw-lighter text-light">{store.planetDetail.climate}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center" id="planets">Terrain</p>
                            <p className="text-center fw-lighter text-light">{store.planetDetail.terrain}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center" id="planets">Surface Water</p>
                            <p className="text-center fw-lighter text-light">{store.planetDetail.surface_water}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Link to="/">
                        <button className="btn btn-outline-danger btn-sm"><i className="fa-solid fa-angles-left"></i> Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
}