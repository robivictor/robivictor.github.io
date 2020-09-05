import React, {Component}from 'react';
import Sidebar from './Components/Sidebar';
// import Landing from './Components/Landing';
// import Experience from './Components/Landing';
// import Education from './Components/Education';
// import Skills from './Components/Skills';
// import Interests from './Components/Interests';
// import Awards from './Components/Awards';
import jsonResume from './resumeJson.json'


class App extends Component{

  constructor(props){
    super(props);

    this.state = {
       landingData : jsonResume.landing,
       experience : jsonResume.experience,
       education : jsonResume.education,
       skills : jsonResume.skills,
       interests : jsonResume.interests,
       awards : jsonResume.awards
    }
  }

  render(){
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData}/>
      </div>
    );
  }
}

export default App;
