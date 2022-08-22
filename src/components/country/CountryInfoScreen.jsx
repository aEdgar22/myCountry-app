import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatchCountryByName } from "../../hook/useDispatchCountryByName";
import { Loading } from "../loading and error/Loading";
import { CountryInfo } from "./CountryInfo";

export const CountryInfoScreen = () => {
  const params = useParams();
  const country = params.name;

  useDispatchCountryByName(country);

  const { isLoading, countries } = useSelector((state) => state.country);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        countries.map((country) => {
          return <CountryInfo key={country.name} {...country} />;
        })
      )}
    </>
  );
};
