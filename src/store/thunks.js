import { setCountries, startLoadingCountries } from "./slices/countrySlice";

export const getCountryByName = (country = "") => {
  return async (dispatch) => {
    dispatch(startLoadingCountries());

    try {
      const url = `https://restcountries.com/v3.1/name/${country}`;

      const resp = await fetch(url);

      if (!resp.ok) throw new Error("Not found any country!");

      const data = await resp.json();

      const countryData = data.map((c) => {
        return {
          name: c.name.common,
          flag: c?.flags.png,
          population: c.population,
          region: c.region,
          capital: c.capital,
          languages: c.languages
          /*  
           
              nativeName: c.nativeName,
              subregion: c.subregion,
              currencies: c.currencies.map(curr => curr.name),
               */
        };
      });

      console.log(data);

      dispatch(
        setCountries({
          countries: countryData,
        })
      );
    } catch (error) {
      dispatch(
        setCountries({
          countries: [],
          loading: false,
          error: error.message,
        })
      );
    }
  };
};

export const getIntialCountries = () => {
  return async (dispatch) => {
    dispatch(startLoadingCountries());

    try {
      const url = `https://restcountries.com/v3.1/region/europe`;

      const resp = await fetch(url);

      if (!resp.ok) throw new Error("Not found any country!");

      const data = await resp.json();

      const countryData = data.map((c) => {
        return {
          name: c.name.common,
          flag: c?.flags.png,
          population: c.population,
          region: c.region,
          capital: c.capital,
        };
      });

      dispatch(
        setCountries({
          countries: countryData,
        })
      );
    } catch (error) {
      dispatch(
        setCountries({
          countries: [],
          loading: false,
          error: error.message,
        })
      );
    }
  };
}

export const getCountriesByRegion = (region) => {
    return async (dispatch) => {

      dispatch(startLoadingCountries());
      
      try {

        const url = `https://restcountries.com/v3.1/region/${region}`;
        
        const resp = await fetch(url);

        if (!resp.ok) throw new Error("Not found any country!");
  
        const data = await resp.json();
  
        const countryData = data.map((c) => {
          return {
            name: c.name.common,
            flag: c?.flags.png,
            population: c.population,
            region: c.region,
            capital: c.capital,
          };
        });
  
        dispatch(
          setCountries({
            countries: countryData,
          })
        );

      } catch (error) {
        
      }
    }
}
