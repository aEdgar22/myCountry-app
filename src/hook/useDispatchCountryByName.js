import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../store/thunks";

export const useDispatchCountryByName = (country) => {

   const dispatch = useDispatch();

   useEffect(() => {
       country && dispatch(getCountryByName(country))
   }, [country, dispatch]);

}
