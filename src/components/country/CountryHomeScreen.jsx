import React, { useState } from "react";
import { useDispatchInitialCountries } from "../../hook/useDispatchInitialCountries";
import { Header } from "../header/Header";
import { SeacrhInput } from "../searches/SearchInput";
import { CountryCard } from "./CountryCard";
import { SearchSelect } from "../searches/SearchSelect";
import { useDispatchCountriesByRegion } from "../../hook/useDispatchCountriesByRegion";

export const CountryHomeScreen = () => {
  const [country, setCountry] = useState("");

  const [region, setRegion] = useState("");

  useDispatchInitialCountries();
  useDispatchCountriesByRegion(region);

  return (
    <>
      <Header />

      <main className="countryHome__main-content">
  
            <div className="countryHome__searches-conatiner">
              <SeacrhInput setCountry={setCountry} />
              <SearchSelect setRegion={setRegion} />
            </div>

            <div className="countryHome__wrapper">
              <CountryCard country = {country}/>
            </div>
          
      </main>
    </>
  );
};
