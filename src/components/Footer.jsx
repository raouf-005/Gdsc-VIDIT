import React from "react";
import Gmail from './../assets/Gmail.svg'
import Localisation from './../assets/Localisation.svg'
import Telephone from './../assets/Telephone.svg'
export default function Footer(){

    return(
        <>
        <div className="footerUpperContainer">
            <div className="leftPartFooter">
                <h1>VIDITrip</h1>
                <h2>video edting trip</h2>
            </div>
            <div className="middlePartFooter">
                <img src={Gmail} alt="Gmail" />
                <p>GDSC@estin.dz</p>
                <img src={Telephone} alt="telephone" />
                <p>+213xxxxxxxxx</p>
                <img src={Localisation} alt="localisation" />
                <p>ESTIN-Amizou-bejaia</p>
            </div>
            <div>
                <h1>
                  GET IN TOUCH  
                </h1>
                <div>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>    
                </div>
            </div>
        </div>
         <div className="footerLowerContainer">
                <button>Home</button>
                <button>About</button>
                <button>workshop</button>
                <button>Contact</button>
         </div>
         </>
    )

}