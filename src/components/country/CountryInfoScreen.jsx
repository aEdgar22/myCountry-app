import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDispatchCountryByName } from '../../hook/useDispatchCountryByName';


export const CountryInfoScreen = () => {

  const params = useParams();
  const country = params.name;

  useDispatchCountryByName(country);

  const { isLoading, countries, error } = useSelector((state) => state.country);



  console.log(countries)

  return (
    <Link to='/'>
      back
    </Link>
  )
}
