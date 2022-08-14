import "./about.css";
import rocket from "../../images/rocket.svg";

const About = () => {
  return (
    <div className="about">
      <h1 className="aboutHeading">WE ARE DEVELOPERS LIKE YOU</h1>
      <div className="aboutContainer">
        <h3 className="aboutContainerHeading">
          Staying up to date takes a lot of time and effort.
        </h3>
        <p>
          It's essential for every developer, yet it's not a simple thing at
          all! Why? <br /> 1. There are so many publications.
          <br /> 2. Low-quality content is all around.
          <br /> 3. The tech world is rapidly changing.
        </p>
        <p className="statement">That's what made us build this blog.</p>
        <h3 className="strong">
          Our mission is to build a blog that every developer deserves.
        </h3>
        <p>
          We believe that together we can empower better software. We are 100%
          open-source and we welcome everyone to contribute and take part in our
          journey.
        </p>
        <h3 className="strong">- May the Code be with You.</h3>
      </div>
      <img className="rocket" src={rocket} alt="" />
    </div>
  );
};

export default About;
