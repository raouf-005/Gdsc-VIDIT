import React from "react";

const RegistrationBtn = () => {


    return (
        <center>
              <button className="RegistrationBtn"
              onClick={() => window.open('https://forms.gle/', '_blank')}>
            REGISTRATION
            </button>
        </center>
      
    );
};

export default RegistrationBtn;
