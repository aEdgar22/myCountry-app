import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { CountryHomeScreen } from '../components/country/CountryHomeScreen';
import { CountryInfoScreen } from '../components/country/CountryInfoScreen';

export const AppRouter = () => {
  return (
    
    <Router>
            <Routes>
                <Route path='/country/:name' element={<CountryInfoScreen/>} />
                <Route exact='true' path='/' element={ <CountryHomeScreen />}/>

                <Route path="*" element={<Navigate to='/' replace/>} />
            </Routes>
    </Router>
  )
}
