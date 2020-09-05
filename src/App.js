import React, { Component } from "react";
import Sidebar from "./Components/Sidebar";
import Landing from "./Components/Landing";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Interests from "./Components/Interests";
import Awards from "./Components/Awards";
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
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
        </div>
      </div>
    );
  }
}

export default App;
