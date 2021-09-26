import * as React from "react";
import Background from "../components/background";
import Layout from "../components/layout";
import Avatar from "../components/avatar";
import Experience from "../components/experience";
import Skill from "../components/skill";
import {
  header,
  name,
  role,
  title,
  description,
  flexContainer,
  flex,
} from "./index.module.scss";
import Education from "../components/education";
import Contact from "../components/contact";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const IndexPage = () => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Min Maung Maung - Fullstack Developer</title>
      <meta name="description" content="Portfolio Website of Min Maung Maung" />
    </Helmet>
    <Background />
    <Layout>
      <Avatar />
      <div className={header}>
        <div className={name}>Min Maung Maung</div>
        <div className={role}>Full Stack Developer</div>
      </div>
      <div className={description}>
        A passionate full-stack developer who's currently residing in Yangon,
        Burma. Self-motivated and worked on multiple projects as the sole Front
        End Developer. Dropped out from the "top" Engineering University in the
        country to pursue my passion and get a degree related to IT instead.
        <br />
        <br />I have got my hands on many languages such as Java, PHP, Python,
        AngularJS, Vue, and lots more but finally decided to stick with
        Javascript and specialized in React. I'm also keen on learning new
        technologies as the world is changing with new and fabulous surprises
        every second.
      </div>
      <div>
        <h2 className={title}>Experience</h2>
        <Experience
          company={"Appvantage Asia"}
          year={"01/2019 - 06/2021"}
          role={"Front End Web Developer"}
          description={
            "Developed and provided web apps with minimal UAT and Production issues. Maintained old projects despite of unfamiliar languages and quickly adapted to them. Sole Front End Developer for several projects"
          }
        />
        <Experience
          company={"Kuru Anime"}
          year={"02/2020 - 08/2020"}
          role={"Chief Technology Officer"}
          description={
            "I was contacted and offered the position in 2020. Although the organization wasn't that big, I was able to learn as well as guide junior developers. "
          }
        />
        <Experience
          company={"InnovatoryMM"}
          year={"01/2018 - 02/2019"}
          role={"Co-Founder"}
          description={
            "Managed to build up a start-up with friends after winning as the first runner-up on Startup Challenge. After discussing risks and potential issues, we developed ride-sharing platform for college students. This is what boosted my passion more than before."
          }
        />
      </div>
      <div>
        <h2 className={title}>Skills</h2>
        <Skill skill={"HTML"} proficient />
        <Skill skill={"CSS"} proficient />
        <Skill skill={"CSS in JS"} proficient />
        <Skill skill={"Bootstrap"} proficient />
        <Skill skill={"Javascript"} proficient />
        <Skill skill={"JQuery"} proficient />
        <Skill skill={"ReactJS"} proficient />
        <Skill skill={"Redux"} proficient />
        <Skill skill={"React Native"} />
        <Skill skill={"Scss/Sass"} proficient />
        <Skill skill={"Typescript"} proficient />
        <Skill skill={"PropTypes"} proficient />
        <Skill skill={"MongoDB"} />
        <Skill skill={"NodeJS"} />
        <Skill skill={"Express"} />
        <Skill skill={"Git"} proficient />
        <Skill skill={"GatsbyJS"} />
        <Skill skill={"NextJS"} />
        <Skill skill={"GraphQL"} proficient />
        <Skill skill={"REST API"} proficient />
        <Skill skill={"npm"} proficient />
        <Skill skill={"yarn"} proficient />
        <Skill skill={"Jest"} />
        <Skill skill={"AngularJS"} />
        <Skill skill={"Docker"} />
      </div>
      <div className={flexContainer}>
        <div className={flex}>
          <h2 className={title}>Education</h2>
          <Education
            place={"University of Greenwich"}
            year={"02/2019"}
            name={"B.Sc. (Hons) Business Information Technology"}
          />
          <Education
            place={"NCC Education"}
            year={"02/2018"}
            name={"Diploma in L5 Education"}
          />
          <Education
            place={"NCC Education"}
            year={"02/2017"}
            name={"Diploma in L4 Education"}
          />
        </div>
        <div className={flex}>
          <h2 className={title}>Contact</h2>
          <Contact
            text={"www.minmaungmaung.com"}
            icon={faGlobe}
            link={"tel:+959440259616"}
          />
          <Contact
            text={"+95 9 440259616"}
            icon={faPhoneAlt}
            link={"tel:+959440259616"}
          />
          <Contact
            text={"mustachemaung@gmail.com"}
            icon={faEnvelope}
            link={"mailto:mustachemaung@gmail.com"}
          />
          <Contact
            text={"/in/min-maung-maung/"}
            icon={faLinkedin}
            link={"https://www.linkedin.com/in/min-maung-maung/"}
          />
          <Contact
            text={"/NeonNature"}
            icon={faGithub}
            link={"https://github.com/NeonNature"}
          />
        </div>
      </div>
    </Layout>
  </>
);

export default IndexPage;
