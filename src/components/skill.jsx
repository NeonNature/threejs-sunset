import * as React from "react";
import { skillContainer, skillIcon } from "./skill.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";

const Skill = ({ skill, proficient }) => {
  return (
    <div className={skillContainer}>
      <FontAwesomeIcon icon={proficient ? faStar : faCircle} className={skillIcon} />{skill}
    </div>
  );
};

export default Skill;
