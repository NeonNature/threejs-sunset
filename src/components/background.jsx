import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faRocket,
  faTimes,
  faAsterisk,
  faCandyCane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquare,
  faHeart,
  faStar,
  faCircle,
} from "@fortawesome/free-regular-svg-icons";
import { useCallback } from "react";
import {
  background,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
} from "./background.module.scss";

const Background = () => {
  const getStyles = useCallback(() => {
    const colorCodes = ["#e76f51", "#f4a261", "#e9c46a", "#2a9d8f", "#264653"];
    const sizes = ["80px", "70px", "60px", "50px", "40px", "30px", "20px"];

    const randomColor = Math.floor(Math.random() * colorCodes.length);
    const randomSize = Math.floor(Math.random() * sizes.length);

    return { color: colorCodes[randomColor], fontSize: sizes[randomSize] };
  }, []);
  return (
    <div className={background}>
      <FontAwesomeIcon className={icon1} icon={faExpand} style={getStyles()} />
      <FontAwesomeIcon className={icon2} icon={faRocket} style={getStyles()} />
      <FontAwesomeIcon className={icon3} icon={faTimes} style={getStyles()} />
      <FontAwesomeIcon className={icon4} icon={faSquare} style={getStyles()} />
      <FontAwesomeIcon className={icon5} icon={faHeart} style={getStyles()} />
      <FontAwesomeIcon className={icon6} icon={faStar} style={getStyles()} />
      <FontAwesomeIcon className={icon7} icon={faCircle} style={getStyles()} />
      <FontAwesomeIcon
        className={icon8}
        icon={faAsterisk}
        style={getStyles()}
      />
      <FontAwesomeIcon
        className={icon9}
        icon={faCandyCane}
        style={getStyles()}
      />
      <FontAwesomeIcon className={icon10} icon={faCheck} style={getStyles()} />
    </div>
  );
};

export default Background;
