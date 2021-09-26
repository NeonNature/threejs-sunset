import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { avatar, paperclip } from "./avatar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const Avatar = () => {
  return (
    <div className={avatar}>
      <StaticImage src="../images/avatar.jpeg" alt="Profile Picture" />
      <FontAwesomeIcon className={paperclip} icon={faPaperclip} />
    </div>
  );
};

export default Avatar;
