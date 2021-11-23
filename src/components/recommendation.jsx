import * as React from "react";
import {
  button_right,
  button_left,
  recommendation_container,
} from "./recommendation.module.scss";
import Slider from "react-slick";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/slick.css";
import "../styles/slick-theme.css";

const Recommendation = () => {
  return (
    <Slider
      settings={{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
      }}
    >
      <div className={recommendation_container}>
        Min is a Full-Stack Developer you'd love to have on your team. In my
        professional experience as a UX Designer and Researcher, I've worked
        alongside numerous developers and rarely would you find someone as
        efficient, bright and sharp at such a young age.
        <br />
        <br />
        While working together on a tight deadline for a large-scale digital
        transformation project, he was able to fully understand my design
        requirements and translate them into web applications swiftly with
        little to no hiccups. He ensured that every corner case and edge
        scenario was accounted for in his code and when we tested it out, it was
        bug-free. When there was a scope creep, he would roll up his sleeves to
        get the code done in no time.
        <br />
        <br />
        Furthermore, Min continues to elevate his developer competency through
        his voracious appetite for learning new technologies. I have no doubt
        that he will be an asset to any company he's joining next.
      </div>
      <div className={recommendation_container}>
        Min is the kind of developer you'd love to work together, whether the
        business is a startup or a big corporation. His talent, passion, and
        creativity are what made him stand out as an outstanding talent.
        <br />
        <br />
        Min and I were part of the founding team of Lankyone, a ride-sharing
        startup based in Yangon. During our time at Lankyone, Min has
        demonstrated his passion and creativity by contributing to front-end
        development tasks including developing a landing page and implementing
        both web and mobile applications for the startup. His creativity is what
        enabled us to develop an application that offers a fun and refreshing
        experience for end-users.
        <br />
        <br />
        Min is also a person who thinks differently. He would bring unforeseen
        perspectives to the table, allowing us to develop our products with a
        broader range of considerations for users eventually resulting in
        products with better and more unique qualities.
        <br />
        <br />
        I've seen him learning continuously and performing diligently at a top
        level for years, so I think he'll be a great talent for whatever company
        he's working in or joining next.
      </div>
      <div className={recommendation_container}>
        Min Maung Maung worked as a Front-end developer for few of the projects
        that were led by me as a Project Manager.
        <br />
        <br />
        During his tenure with Appvantage Asia Pte Ltd, he exhibited strong
        technical skills. He was involved in several development and maintenance
        projects. His duties included technical design, front end development,
        testing, deployments, and very well written documentation.
        Troubleshooting skills are exceptional. He also played a supporting role
        in preparation of POCs, demos and presentations.
        <br />
        <br />
        He demonstrated professionalism, unwavering dedication, and commitment
        to his work. In addition, his hardworking and steady style had motivated
        other team members in meeting stringent deadlines and targets. He was a
        very good team player and always open to feedback. Possesses exceptional
        ability to learn new technologies quickly and successfully.
        <br />
        <br />I would like to reflect over his conduct during his stay with us.
        During his service, he had been found very sincere, reliable,
        trustworthy, sociable, and pleasant. Many of our staff members were
        pleased to work with him as a team. He will be a great asset wherever he
        belongs.
      </div>
    </Slider>
  );
};

export default Recommendation;
