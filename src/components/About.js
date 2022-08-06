import React from "react";
// import PictureOfMe from "../assets/images/PictureOfMe.jpg";

const About = () => {
  return (
    <section className="content container">
      <div id="about" className="row">
        {/* <img id="profile-pic" src={PictureOfMe} alt="Profile" className="col" /> */}
        <div className="col">
          <h2>About Me</h2>
          <p className="col" id="about-text">
            I am an aspiring full stack developer. This is my first attempt to
            build a portfolio page to showcase some of my work. I have over
            seven years of experience working in various roles at a few
            manufacturing companies. My most recent job is my current role as
            production engineer at a construction chemical company called Master
            Builders Solutions that specializes in the manufacturing of
            polyurethane products. Prior to that, I spent a little over two
            years working at the Coors brewery in Golden, CO and four years at a
            Phillips 66 oil refinery in Linden, NJ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;