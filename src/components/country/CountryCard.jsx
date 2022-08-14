import React from "react";
import { useSelector } from "react-redux";
import { useDispatchCountryByName } from "../../hook/useDispatchCountryByName";
import { CountryCardInfo } from "./CountryCardInfo";


export const CountryCard = ({country}) => {
  
  const { isLoading, countries } = useSelector((state) => state.country);

  useDispatchCountryByName(country)

  return <>
             {isLoading
              ? <h1>Loading...</h1>
              : countries.map(country => {
                return <CountryCardInfo
                        key={country.name}
                        {...country}
                        /> 
                })
              }
         </>;
};
