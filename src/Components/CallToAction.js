import React from "react";
import restohead from "../icons_assets/restauranfood.jpg";
import {Link} from 'react-router-dom';

const CallToAction = () => {

    const handleClick = () => {
      };

    return (
    <header>
        <section>
            <div>
                <h2>Refrigeración Coreno</h2>
                <h3>Servicio Técnico</h3>
                <p>Especializado en neveras y congeladores familiares y comerciales.
                <br></br> Todas las marcas. Atención eficiente y eficaz. En el menor tiempo y al menor costo. Trabajos garantizados por 3 meses. 30 años de experiencia avalan nuestros trabajos. Operamos en Málaga Capital y Costa del Sol</p>
                <button onClick={handleClick} aria-label="On Click"><Link to ='BookingPage'>Reserve a Table</Link></button>
                </div>
            <img src={restohead} alt="food"/>
        </section>
    </header>
    );
};


export default CallToAction;