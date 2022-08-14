
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesByRegion } from '../store/thunks';

export const useDispatchCountriesByRegion = (region ) => {
    
    const dispatch = useDispatch();

   useEffect(() => {
    region && dispatch(getCountriesByRegion(region))
   }, [ region, dispatch ]);

}
