import * as React from "react";
import {
  contactContainer,
  contactIcon,
  contactLink,
} from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ icon, text, link }) => {
  return (
    <div className={contactContainer}>
      <FontAwesomeIcon className={contactIcon} icon={icon} />
      <a href={link} className={contactLink}>
        {text}
      </a>
    </div>
  );
};

export default Contact;
