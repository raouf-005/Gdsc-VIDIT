import React from "react";
import WeeksCard from "./WeeksCard";
import pathWeeks from "./../../assets/pathWeeks.svg";
const weeks=[
    {
        title:"Week 1: Foundation and Introduction",
        workshop1:"Workshop 1: Introduction to Video Editing",
        workshop2:"Workshop 2: Exploring Editing Techniques",
    },
    {
        title:"Week 2: Advanced Techniques",
        workshop1:"Workshop 3: Audio Editing and Enhancement",
        workshop2:"Workshop 4: Effects and Visual Enhancements",
    },
    {
        title:"Week 3: Storytelling and Narrative",
        workshop1:"Workshop 5: Storytelling through Editing",
        workshop2:"Workshop 6: Collaborative Editing and Project Management",
    },
    {
        title:"Week 4: Specialization and Project Work",
        workshop1:`  Workshop 7: Specialization Focus (e.g., Documentary
            Editing, Music Video Editing, Short Film Editing)`,
        workshop2:"     Workshop 8: Final Project Showcase and Feedback",
    },
]



export default function WeeksGrid(){

    return(
            <div className="weeksGrid">
                <WeeksCard gridRow="1" gridColumn="1" {...weeks[0]}/>
                <WeeksCard gridRow="2" gridColumn="2" {...weeks[1]}/>
                <WeeksCard gridRow="4" gridColumn="2" {...weeks[2]}/>
                <WeeksCard gridRow="5" gridColumn="1" marginTop="-264px" {...weeks[3]}/>
                <div className="pathContainer">
                <img src={pathWeeks} className="pathWeeks"/>
                </div>
                
                
            </div>
    )
}