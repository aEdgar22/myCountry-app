import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    countries: [],
    isLoading: false,
    errorMessage: "",
    error: false
} 

const countrySlice = createSlice({
  name: 'country',

  initialState,

  reducers: {
    
    startLoadingCountries(state) {
      state.isLoading =  true
    },
    setCountries(state, action) {
      state.isLoading = false;
      state.countries = action.payload.countries;
      state.errorMessage = action.payload.errorMessage;
      state.error = action.payload.error
    }
  },
})

export const { startLoadingCountries, setCountries} = countrySlice.actions;

export default countrySlice.reducer;