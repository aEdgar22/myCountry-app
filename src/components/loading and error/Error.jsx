import React from "react";

import error from "../../assets/error.svg";

export const Error = ({ errorMessage }) => {
  return (
    <div className="error__container animate__animated  animate__fadeIn">
      <picture>
        <img src={error} alt="error" />
      </picture>

      <h1>{errorMessage}</h1>
    </div>
  );
};
