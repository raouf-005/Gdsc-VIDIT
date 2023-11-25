import React from "react";
import WeeksCard from "./WeeksCard";
import pathWeeks from "./../../assets/pathWeeks.svg";
import week1bg from "./../../backgroundassets/weeksbg.svg";
import week2bg from "./../../backgroundassets/week2bg.svg";
import week3bg from "./../../backgroundassets/week3bg.svg";
import week4bg from "./../../backgroundassets/week4bg.svg";


    const Weeks=[
            {
                title: "Week 1: Foundation and Introduction",
                workshop1: "Workshop 1: Introduction to Video Editing",
                workshop2: "Workshop 2: Exploring Editing Techniques",
                gridRow: "1",
                gridColumn: "1",
                img: week1bg,
            },
             {
                title: "Week 2: Advanced Techniques",
                workshop1: "Workshop 3: Audio Editing and Enhancement",
                workshop2: "Workshop 4: Effects and Visual Enhancements",
                gridRow: "2",
                gridColumn: "2",
                img: week2bg,
            },
            {
                title: "Week 3: Storytelling and Narrative",
                workshop1: "Workshop 5: Storytelling through Editing",
                workshop2: "Workshop 6: Collaborative Editing and Project Management",
                gridRow: "4",
                gridColumn: "2",
                img: week3bg,
            },
             {
                title: "Week 4: Specialization and Project Work",
                workshop1: `Workshop 7: Specialization Focus (e.g., Documentary Editing, Music Video Editing, Short Film Editing)`,
                workshop2: "Workshop 8: Final Project Showcase and Feedback",
                gridRow: "5",
                gridColumn: "1",
                img: week4bg,
            }]
        

        export default function WeeksGrid() {

                const WeeksComponent=Weeks.map((week,index)=>{
                    return(
                        <WeeksCard {...week} key={index+1}/>
                    )
                })
            return (
                <div className="weeksGrid">
                    {WeeksComponent}
                    <div className="pathContainer">
                        <img src={pathWeeks} className="pathWeeks" />
                    </div>
                </div>
            )
        }
    
