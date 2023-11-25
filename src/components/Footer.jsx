import React from "react";
import Gmail from './../assets/Gmail.svg'
import Localisation from './../assets/Localisation.svg'
import Telephone from './../assets/Telephone.svg'
import { handleClick } from "./Header";
import insta from './../assets/insta.svg'
import facebook from './../assets/facebook.svg'


export default function Footer(){

    return(
        <>
        <div className="footerUpperContainer" id="contact-section">
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
                <div className="socialMediaContainer">
                    <img src={insta} alt="insta"
                     onClick={() => window.location.href = "https://www.instagram.com/gdsc_estin/?hl=en"} />
                    <img src={facebook} alt="facebook"
                     onClick={() => window.location.href = "https://web.facebook.com/gdscestin"}/>
                    <img src={Gmail} alt="gmail"
                     onClick={() => window.open("https://mail.google.com/mail/u/0/?to=gdsc@estin.dz&fs=1&tf=cm","_blank")}/>    
                </div>
            </div>
        </div>
         <div className="footerLowerContainer">
                <button onClick={handleClick('home')} >Home</button>
                <button onClick={handleClick('about')}>About</button>
                <button onClick={handleClick('workshop')}>workshop</button>
                <button>Contact</button>
         </div>
         </>
    )

}