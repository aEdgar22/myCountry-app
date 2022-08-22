import React from "react";

export const CountryInfoItem = ({ subtitle, text }) => {
  return (
    <p className="infoItem__text">
      {subtitle}: {text}
    </p>
  );
};
