import React from "react";
import {Link} from 'react-router-dom';
import video from '../icons_assets/tecnico1.webm';

const CallToAction = () => {

    const handleClick = () => {
      };

    return (
    <header>
        <section>
            <div>
                <h2>Refrigeración Coreno</h2>
                <h3>Servicio Técnico</h3>
                <p>Especializado en neveras y congeladores familiares y comerciales
                <br></br>30 años de experiencia avalan nuestros trabajos <br></br>Operamos en Málaga Capital y Costa del Sol</p>
                <button onClick={handleClick} aria-label="On Click"><Link to ='BookingPage'>951 15 16 42</Link></button>
                </div>
            <video className='videoTag' autoPlay="autoPlay" loop="loop" muted="muted" playsInline="playsInline">
                <source src={video} type='video/webm' />
                </video>
        </section>
    </header>
    );
};


export default CallToAction;