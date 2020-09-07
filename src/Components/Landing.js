import React, { Comonent, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin , faTwitter, faSoundcloud} from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.landingData = props.landingData;
  }

  render() {
    return (
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="">
            {this.landingData.firstName}
            <span className="text-primary ml-2">{this.landingData.middleName}</span>
          </h1>
          <div className="subheading">{this.landingData.headline}</div>
          <div className="">
            {this.landingData.location} · {this.landingData.city} · {this.landingData.state},{this.landingData.country}
          </div>
          <div className="mb-5">
            <i icon={faSoundcloud}></i>{this.landingData.phoneNumber} · <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div>
          
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a className="social-icon" href={this.landingData.linkedin} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="social-icon" href={this.landingData.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="social-icon" type="new" href={this.landingData.twitter} target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;