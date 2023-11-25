import React from "react";
import Condor from './../assets/Condor.svg'
import Nvidia from './../assets/Nvidia.svg'
import DigitalOcean from './../assets/DigitalOcean.svg'
import GdscLogo from './../assets/GdscLogo.svg'

export default function Sponsers() {

    return(
        <>
           <p style={{textAlign:'center',fontSize:'24px'}}>
            sponsors
           </p>
            <div className="sponsorLogosContainer">
                <img src={Condor} alt="condor"/>
                <img src={Nvidia} alt="nvidia"/>
                <img src={DigitalOcean} alt="digitalocean"/>
            </div>
            <center>
            <img src={GdscLogo} alt="gdsclogo"  className="gdsclogo"/>
            </center>
        </>
    )
}