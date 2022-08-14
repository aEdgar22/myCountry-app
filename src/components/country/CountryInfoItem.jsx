import React from 'react'

export const CountryInfoItem = ({subtitle, text}) => {
  return (
    <div className='CountryInfoItem__container'>
      
      <p>{subtitle}: {text} </p>  

    </div>
  )
}
