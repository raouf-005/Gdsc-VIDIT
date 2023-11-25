import React from "react";
import agenda1 from "./../../assets/agenda1.svg";
import path from "./../../assets/path.svg";
import "./../../styles/Components.css";

export default function AgendaTitle(){
    return(
                <div className="AgendaContainer1">
                    <div >
                    <hr className="agendaHr"/>
                    <h2 className="AgendaTitle">
                        AGENDA
                    </h2>
                        <div className="agendaTitleDescription">
                            <p className="agendaDescription">
                                VIDITrip in a hole month
                            </p>
                            <p>
                                From scratch to professionalism
                            </p>
                        </div>
                    </div>
                    <img src={agenda1} alt="agendaimg" className="img1Agenda"/>
                    <img src={path} alt="path" className="pathAgenda"/>
                    
                </div>
                

              

    )


}