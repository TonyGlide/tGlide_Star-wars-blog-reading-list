import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const CharacterDetail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log("Params: ", params)
    useEffect(() => {
        actions.getCharacterDetail(params.id)
    }, [])

    return (
        <>
            <div className="container mt-5 p-3 border border-2 border-danger-subtle rounded-2 bg-dark">
                <div className="d-flex row mb-5">
                    <div className="col">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                            className="m-1 rounded" />
                    </div>
                    <div className="col">
                        <h2 className="text-center text-white fw-bold">{store.characterDetail.name}</h2>
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
                            <p className="text-secondary fw-bold text-center">Name</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.name}</p>
                        </div>
                        <div className="col">
                            <p className="text-secondary fw-bold text-center">Birth Year</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.birth_year}</p>
                        </div>
                        <div className="col">
                            <p className="text-secondary fw-bold text-center">Gender</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.gender}</p>
                        </div>
                        <div className="col">
                            <p className="text-secondary fw-bold text-center">Height</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.height}</p>
                        </div>
                        <div className="col">
                            <p className="text-secondary fw-bold text-center">Skin Color</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.skin_color}</p>
                        </div>
                        <div className="col">
                            <p className="text-secondary fw-bold text-center">Eye Color</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.eye_color}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Link to="/">
                        <button className="btn btn-outline-secondary btn-sm"><i className="fa-solid fa-angles-left"></i> Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
}