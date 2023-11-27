import React from "react";
import './About.css'
import SkillsBar from "./SkillsBar";
import profilepic from "../../assets/images/avatar.png"
export default function About() {
    return ( 
        <section >
            <h1 className="about-title">Who I am</h1>
            <section className="about" id="about">
            <div className="about-me">
              <img className="profile-pic" src={profilepic} alt="profile picture" />
              <h1>Hi all</h1>
                <p>
                Hi, I am Fatema,
                self-driven, passionate learner and developer focusing on Html, React, Javascript, Node,
                and Java Technologies. Looking forward to working with ingenious teams on challenging 
                projects.
                I’m an easy going person that works well with everyone. 
                I enjoy being around different types of people and I like to always 
                challenge myself to improve at everything I do.
                I have a great passion for learning languages and exploring the world and also programming.
                I have always loved technology and programming. And this is my profession now.
                </p>
            </div>
            <div className="skills-container">
                <SkillsBar />
            </div>
            </section>
        </section>
    );
}
