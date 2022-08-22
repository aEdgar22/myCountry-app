import React from "react";
import { Link } from "react-router-dom";
import { CountryInfoItem } from "./CountryInfoItem";

export const CountryCardInfo = ({
  name,
  population,
  capital,
  flag,
  region,
}) => {

  return (
    <div className="countryCard__container animate__animated  animate__fadeIn">
      <picture className="coutnryCard__picture-active">
        <img src={flag} alt={name} />
      </picture>

      <div className="countryCard__data-info">
        <Link className="countryCard__link" to={`/country/${name}`}>
          <h4 className="countyCard__info-title">{name}</h4>

          <CountryInfoItem subtitle="Capital" text={capital} />
          <CountryInfoItem subtitle="Population" text={population} />
          <CountryInfoItem subtitle="Region" text={region} />
        </Link>
      </div>
    </div>
  );
};
