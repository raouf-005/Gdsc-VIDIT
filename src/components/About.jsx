import React from "react";
import comp2 from "./../assets/comp2.svg";
import "./../styles/Components.css";
import aboutbg from "./../backgroundassets/aboutbg.svg";
export default function About() {
    return(
        <div className="Container2" id='about-section'>
            <img src={comp2} alt="" className="aboutImgtitle" />
            <div className="aboutRightPart">
                <h2 className="aboutTitle">About <span style={{color:'#F48177'}}>VIDIT</span> </h2>
                <h3 className="aboutSubTitle">
                    VIDITrip, as indicated by its name, is a Trip into 
                    the world of Videos organized by 
                    <span style={{color:'#F4B400'}}> Google </span>
                    <br />
                   <span style={{color:'#0F9D58'}}>Developer </span>
                   <span style={{color:'#4D8CF3'}}>Student </span>
                   <span style={{color:'#DB4437'}}>Club </span>  ESTIN
                </h3>
                <p className="aboutDescription">
                During this learning journey, participants will attend series of workshops in which they’ll learn the essentials of Video Editing from the basics to advanced editing tools and techniques. Also, they’ll have the chance not only to acquire knowledge and skills, this event encourages you to learn, improve, develop your skills and techniques and showcase your artistic vision
                </p>
                <img src={aboutbg} alt="" className="aboutbg"/>
            </div>
            
        </div>
    )
}