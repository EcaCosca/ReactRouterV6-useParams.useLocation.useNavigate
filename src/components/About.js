import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function About() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);

    function handleClick() {
        navigate("/");
      }

    return ( 
        // <div>
        // </div>
        <div>
            <h1>About</h1>
            <h2>Location = {location.pathname}</h2>
            <button onClick={handleClick}>GO HOME</button>
            <button onClick={() => navigate(-1)}>GO BACK</button>

        </div>
     );
}

export default About;