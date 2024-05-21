import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PeopleCard from "../component/PeopleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";



const StartWarsHome = () => {

    const {store, actions } = useContext(Context);
    return (
    <>
       {/* //Characters// */}
        <div className="row mt-5" >
        <div className="col-2"></div>    
        <div className="col-8 ">Characters</div>
        <div className="col-2"></div>   
        </div>  

        <div className="row">
        <div className="col-2"></div>    
        <div className="col-8 d-flex overflow-auto justify-content-evenly">
        {store.people.map(person => {
        return ( 
            <PeopleCard key={person.uid} name={person.name} uid={person.uid} url={person.url}/>
        );
        })}
        </div> 
        <div className="col-2"></div>   
        </div>

   {/* //Planets// */}
   <div className="row mt-5">
         <div className="col-2"></div>    
         <div className="col-8 ">Planets</div>
         <div className="col-2"></div>   
         </div>  

        <div className="row">
        <div className="col-2"></div>    
        <div className="col-8 d-flex overflow-auto justify-content-evenly">
        {store.planets.map(planet => {
          return ( 
             <PlanetCard key={planet.uid} name={planet.name} uid={planet.uid} url={planet.url}/>
          );
        })}
       </div> 
     <div className="col-2"></div>   
   </div>
{/* //Vehicles// */}
   <div className="row mt-5">
         <div className="col-2"></div>    
         <div className="col-8 ">Vehicles</div>
         <div className="col-2"></div>   
         </div>  

        <div className="row">
        <div className="col-2"></div>    
        <div className="col-8 d-flex overflow-auto justify-content-evenly">
        {store.vehicles.map(vehicle => {
          return ( 
             <VehicleCard key={vehicle.uid} name={vehicle.name} uid={vehicle.uid} url={vehicle.url}/>
          );
        })}
       </div> 
     <div className="col-2"></div>   
   </div>
    </>
    );
};


export default StartWarsHome