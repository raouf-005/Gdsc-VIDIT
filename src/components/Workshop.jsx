import React from "react"; 
import workshop from "./../assets/workshop.svg";


export default function Workshop() {
    return(
       <div className="ContainerWorkshop">
           <img src={workshop} alt="workshop" />
            <div className="ContainerAgenda1Right">
                <hr />
                <h2 className="workshopTitle">
                    workshops
                </h2>
                <p className="workshopDescription">
                Unleash Your Creative Potential! Join Vidit and Dive into the World of Video Editing - Where Your Imagination Knows No Limits 
                </p>
            </div>
       </div>
      )
}