import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIntialCountries } from "../store/thunks";

export const useDispatchInitialCountries = () => {
    
    const dispatch = useDispatch();

   useEffect(() => {
       dispatch(getIntialCountries())
   }, [ dispatch ]);


}
