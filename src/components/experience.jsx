import * as React from "react";
import { experienceCompany, experienceYear, experienceDesc, experienceRole } from "./experience.module.scss";

const Experience = ({ company, year, description, role }) => {
    return (
        <div>
            <div className={experienceRole}>{role}</div>
            <div className={experienceCompany}>{company}</div> {" - "}
            <div className={experienceYear}>{year}</div>
            <div className={experienceDesc}>{description}</div>
        </div>
    );
};

export default Experience;
