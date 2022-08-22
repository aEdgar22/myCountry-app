import React from "react";
import { Link } from "react-router-dom";
import { CountryInfoItem } from "./CountryInfoItem";

export const CountryInfo = ({
  population,
  languages,
  capital,
  region,
  flag,
  name,
  borders,
  subregion,
  currencies,
}) => {
  return (
    <>
      <div className="countryInfo__container  animate__animated  animate__fadeIn">
      <Link className="back_link" to="/">
        back
      </Link>
        <picture className="countryInfo__img-container">
          <img src={flag} alt={name} />
        </picture>

        <div className="countryInfo__data-container">
          <h2 className="countryInfo__title">{name}</h2>

          <div className="countryData-container">
            <CountryInfoItem  subtitle="Capital" text={capital} />
            <CountryInfoItem subtitle="Languages" text={languages} />
            <CountryInfoItem
              subtitle="Population"
              text={new Intl.NumberFormat().format(population)}
            />
            <CountryInfoItem subtitle="Region" text={region} />
          </div>

          <div className="countryData-container">
            <CountryInfoItem subtitle="Borders Countries" text={borders} />
            <CountryInfoItem subtitle="sub-region" text={subregion} />
            <CountryInfoItem subtitle="Currencies" text={currencies} />
          </div>
        </div>
      </div>
    </>
  );
};
