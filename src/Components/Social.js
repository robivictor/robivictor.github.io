import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

const Social = (props) => {
  return (
    <div>
      <div className="social-icons">
        <a
          className="social-icon"
          href={props.info.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="social-icon"
          href={props.info.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="social-icon"
          type="new"
          href={props.info.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="pd-1em">
        <div className="subheading">{props.info.headline}</div>
        <div className="">
          {props.info.location} · {props.info.state} · {props.info.country}
        </div>
        <div className="">
          <i icon={faSoundcloud}></i>
          <a href="mailto:name@email.com">{props.info.email}</a>
        </div>
      </div>
    </div>
  );
};

export default Social;
