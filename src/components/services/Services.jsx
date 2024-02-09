import "./Services.scss";
import aboutme from "./../../assets/aboutme.jpg";

const Services = () => {
  return (
    <div className="services">
      <h1>About me</h1>
      <div className="servicesContainer">
        <div className="left-box">
          <div className="img-box">
            <img src={aboutme} />
          </div>
        </div>
        <div className="right-box">
          <div className="inner-top">
            <div className="inner-box inner-left">
              <p>
                I am skilled Front-End Developer , with expertise in HTML, CSS,
                JS and React JS, I specialize in translating design concepts
                into responsive and interactive web interfaces.
              </p>
            </div>
            <div className="inner-box inner-right">
              <h3>Experience</h3>
              <p>2+ years</p>
              <p>Frontend Development</p>
            </div>
          </div>

          <div className="inner-bottom">
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React JS</li>
              <li>Redux</li>
              <li>Javascript</li>
              <li>React JS</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
