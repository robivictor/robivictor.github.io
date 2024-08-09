import React, { Component } from "react";
import Social from "./Social";
import TechStack from "./TechStack";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.landingData = props.landingData;
  }

  render() {
    return (
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <div className="subheading">Thank you for stopping by!</div>

          <h1 className="">
            I am
            <span className="text-gradient ml-2">
              {" "}
              {this.landingData.firstName} {this.landingData.middleName.charAt(0)}. {this.landingData.lastName}
            </span>
          </h1>
          <Social info={this.landingData}></Social>
          <TechStack></TechStack>
          <div className="lead mb-5">
            I naturally tend to process
            possible solutions to the problems I encounter, If I recognize the
            problem I most certainly will take the challenge of solving it.
            Software engineering has been my biggest enabler in feeding this
            natural urge from an early age. It all started with my first desktop
            computer with a Cathode Ray Tube (CRT) monitor. I had pretty much
            mastered advanced photo and video editing software and started a
            business out of it while I was still a high schooler. My first
            encounter with programming was C++ and it was almost like love at
            first sight:) From there I took an engineering path in Electrical
            and Computer engineering, with more emphasis on programming and
            finishing up with great distinction.
            <br />
            <br />
            During and after my bachelor studies I have worked on several
            projects with multiple tools and languages. Many years down the
            road, I am still so much in love with it and it only gets much
            better! Today, as a professional software engineer, I take so much
            pleasure in the shepherding of an idea from concept to product
            following best practices and industry standards. One of my sincere
            appreciation for my profession is the never-ending learning process
            as it is the most dynamic and rich industry.
            <br />
            <br />I have professionally contributed and spearheaded projects in
            Healthcare, Logistics, and Business verticals for 7 years having
            Java/Spring Boot, C#/ASP.NET/.NET Core, Python/Flask/FastAPI,
            Golang, JavaScript/Typescript/Angular/React.js, and
            MS-SQL/MySQL/MongoDB under my belt. Long list huh? Trust me, what I
            still have on the plate to learn outweighs it. I am so much into
            building and learning highly scalable distributed systems using
            microservice architecture and leveraging the power of Kubernetes
            these days. I do picture myself contributing to the FinTech and IoT
            industries and keep on the fire burning. It is mesmerizing how what
            started as a sight love has turned out to be a happily ever after:)
          </div>
          <div></div>
        </div>
      </section>
    );
  }
}

export default Landing;
