import React from "react";
import restohead from "../icons_assets/restauranfood.jpg";
import {Link} from 'react-router-dom';

const CallToAction = () => {
    return (
    <header>
        <section>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Discover the bright and zesty flavors of Little Lemon.
                <br></br> Locally sourced ingredients, expertly crafted dishes, and a cozy ambiance that will make you feel right at home</p>
                <button><Link to ='BookingPage'>Reserve a Table</Link></button>
                </div>
            <img src={restohead} alt="food"/>
        </section>
    </header>
    );
};


export default CallToAction;