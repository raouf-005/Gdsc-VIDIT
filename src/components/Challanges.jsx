import React from "react";
import ChallengeImg from './../assets/Challenge.svg'

export default function Challenge(){
    return(
        <div className="ChallengeContainer"> 
            <img src={ChallengeImg} alt="challenge"/>
           
            <div>
                <h1 className="ChallengeTitle">
                CHALLENGES 
                </h1>
                <p className="ChallengeDescription">
                And of course it will be a lot of Challenges between Workshops
                So <span style={{color:'#F28C82'}}>
                        Don’t Miss The Chance!!  
                    </span> 
                </p>
            </div>
        </div>

    )
}