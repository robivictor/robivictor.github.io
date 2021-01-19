import React, { Component } from "react";
import angular from "../assets/icons/angular.png";
import react from "../assets/icons/react.png";
import docker from "../assets/icons/docker.png";
import azure from "../assets/icons/azure.png";
import aws from "../assets/icons/aws.png";
import csharp from "../assets/icons/csharp.png";
import spring from "../assets/icons/spring-boot.png";
import typescript from "../assets/icons/typescript.png";
import javascript from "../assets/icons/javascript.png";
import html from "../assets/icons/html5.png";
import css from "../assets/icons/css3.png";
import git from "../assets/icons/git.png";
import vscode from "../assets/icons/visual-code.png";
import kubernetes from "../assets/icons/kubernetes.png";
import python from "../assets/icons/python.png";
import java from "../assets/icons/java.png";
import mssql from "../assets/icons/mssql.png";
import nodejs from "../assets/icons/nodejs.png";
import mysql from "../assets/icons/mysql.png";
import mongodb from "../assets/icons/mongodb.png";
import dotnetcore from "../assets/icons/dotnetcore.png";


class techStack extends Component {
  render() {
    return (
      <div className="techStack">
        
        <img className="icon" src={csharp} alt="csharp" />
        <img className="icon" src={java} alt="java" />
        <img className="icon" src={python} alt="python" />
        <img className="icon" src={dotnetcore} alt="dotnetcore" />
        <img className="icon" src={spring} alt="spring" />

        <img className="icon" src={css} alt="css3" />
        <img className="icon" src={html} alt="html" />
        <img className="icon" src={javascript} alt="javascript" />
        <img className="icon" src={angular} alt="angular" />
        <img className="icon" src={react} alt="react" />
        <img className="icon" src={typescript} alt="typescript" />
        <img className="icon" src={nodejs} alt="nodejs" />
                
        <img className="icon" src={git} alt="git" />
        <img className="icon" src={vscode} alt="typescript" />
        <img className="icon" src={kubernetes} alt="kubernetes" />
        <img className="icon" src={aws} alt="aws" />
        <img className="icon" src={docker} alt="angular" />
        <img className="icon" src={azure} alt="azure" />
        
        <img className="icon" src={mssql} alt="mssql" />
        <img className="icon" src={mysql} alt="mysql" />
        <img className="icon" src={mongodb} alt="mongodb" />
        
      </div>
    );
  }
}

export default techStack;
