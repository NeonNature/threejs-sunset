import * as React from "react";
import {
  educationPlace,
  educationYear,
  educationName,
  educationContainer,
} from "./education.module.scss";

const Education = ({ year, name, place }) => {
  return (
    <div className={educationContainer}>
      <div className={educationName}>{name}</div>
      <div className={educationPlace}>{place}</div> {" - "}
      <div className={educationYear}> {year}</div>
    </div>
  );
};

export default Education;
