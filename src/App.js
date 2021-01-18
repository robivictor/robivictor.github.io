import React, { Component } from "react";
import Sidebar from "./Components/Sidebar";
import Landing from "./Components/Landing";
// import Experience from "./Components/Experience";
// import Education from "./Components/Education";
// import Skills from "./Components/Skills";
// import Interests from "./Components/Interests";
// import Awards from "./Components/Awards";
// import RightSide from "./Components/RightSide"
import jsonResume from "./resumeJson.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData: jsonResume.landing,
      experience: jsonResume.experience,
      education: jsonResume.education,
      skills: jsonResume.skills,
      interests: jsonResume.interests,
      awards: jsonResume.awards,
    };
  }

  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          {/* <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          <hr className="m-0" />
          <Awards awards={this.state.awards} /> */}
        </div>
        {/* <RightSide className="rightSide"/> */}
      </div>
    );
  }
}

export default App;
