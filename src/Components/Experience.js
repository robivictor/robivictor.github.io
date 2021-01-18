import React, {Component} from 'react';
import image from "../assets/profile.jpg"


class Experience extends Component {
    constructor(props){
        super(props);
        this.experience = props.experience;
    }

    render(){
        return(
            <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-5">Experience</h2>
              {
                this.experience.map((exp, index) => (
                  <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                      <div>
                      <img   className="img-fluid img-profile rounded-circle mx-auto mb-2" 
                             src="../assets/profile.jpg" alt="">
                             </img>
             
                      </div> 
                      <h3 className="mb-0">{exp.organization}</h3>
                      <div className="subheading mb-3">{exp.website}</div>
                      <p>{exp.aboutWork}</p>
                      <div className="ml-5 timeline">
                        {
                          exp.positions.map((pos,ind)=> (
                            <div key={ind}>
                              <b>{pos.Position}</b>
                              <div>{pos.fromDate} - {pos.toDate}</div>
                              <div className="ml-5">{pos.Description}</div>
                             <div className="ml-5">
                              {
                                pos.tasks.map((task,task_index)=>(
                                <div key={task_index}>{task.Task}</div>
                                ))
                              }
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
        );
    }
}

export default Experience;