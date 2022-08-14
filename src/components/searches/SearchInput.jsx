import React, { useState } from 'react';

export const SeacrhInput = ( {setCountry} ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(inputValue.trim().length > 2){

      setCountry(inputValue);
      setInputValue('')
    }
  }

  return (
    <>
         <form onSubmit={ handleSubmit }>
         
            <input 
            className='search__input-country animate__animated  animate__fadeIn' 
            type='text' 
            placeholder='Search for a country...' 
            value={inputValue}
            onChange={ handleInputChange }
            required= {true}
            />
          </form>

    </>
  )
}