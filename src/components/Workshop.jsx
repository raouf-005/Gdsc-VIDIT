import React from "react"; 
import workshop from "./../assets/workshop.svg";
import "./../styles/Components.css";

export default function Workshop() {
    return(
       <div className="ContainerWorkshop" id='workshop-section'>
           <img src={workshop} alt="workshop" className="workshopImg" />
            <div className="ContainerWorkshopRight">
                <hr />
                <h2 className="workshopTitle">
                    workshops
                </h2>
                <p className="workshopDescription">
                Unleash Your Creative Potential! Join <span  style={{color:'#F48177'}}> Vidit </span> and Dive into the World of Video Editing - Where Your Imagination Knows No Limits 
                </p>
            </div>
       </div>
      )
}