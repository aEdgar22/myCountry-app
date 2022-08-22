import React from "react";
import { useSelector } from "react-redux";
import { useDispatchCountryByName } from "../../hook/useDispatchCountryByName";
import { Error } from "../loading and error/Error";
import { Loading } from "../loading and error/Loading";
import { CountryCardInfo } from "./CountryCardInfo";

export const CountryCard = ({ country }) => {
  const { isLoading, countries, error, errorMessage } = useSelector(
    (state) => state.country
  );

  
  useDispatchCountryByName(country);

  return (
    <>
    
      {isLoading && !error ? (
        <Loading />
      ) : error ? (
        <Error errorMessage={errorMessage}/>
      ) : (
        countries.map((country) => {
          return <CountryCardInfo key={country.name} {...country} />;
        })
      )}
    </>
  );
};
