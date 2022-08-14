import React from "react";
import { Link } from "react-router-dom";
import { CountryInfoItem } from "./CountryInfoItem";

export const CountryCardInfo = ({ name, population, capital, flag, region}) => {
  return (
    
      <div className="countryCard__container animate__animated  animate__fadeIn">
        {/* <Link className="countryCard__link" to={`/country/${name}`}> */}
          <picture className="coutnryCard__picture-active">
            <img src={flag} alt={name} />
          </picture>
        

          <div className="countryCard__data-info">
            <h3>{name}</h3>
            
            <CountryInfoItem subtitle='Population' text={new Intl.NumberFormat().format(population)}/>
            <CountryInfoItem subtitle='Capital' text={capital}/>
            <CountryInfoItem subtitle='Continente' text={region}/>
          
          </div>
      </div>
    
  );
};
