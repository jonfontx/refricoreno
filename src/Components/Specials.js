import React from "react";
import greek from "../icons_assets/greek salad.jpg";
import bruschetta from "../icons_assets/bruchetta.svg";
import dessert from "../icons_assets/lemon dessert.jpg";
import {Link} from 'react-router-dom';

const Specials = () => {
    return (

    <main>
        <div className="main-top">
            <h1>This weeks Specials!</h1>
            <button aria-label="On Click"><Link to='Menu'>Online Menu</Link></button>
        </div>
        <div className="cards">
        <div className="card1">
            <img src={greek} alt="salad"/>
            <h3>Greek Salad <span>5.99</span></h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic croutons.</p>
            <br></br><h4>Order a delivery</h4>
        </div>
        <div className="card2">
            <img src={bruschetta} alt="bruschetta"/>
            <h3>Bruschetta <span>6.90</span></h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <br></br><h4>Order a delivery</h4>
        </div>
        <div className="card3">
            <img src={dessert} alt="dessert"/>
            <h3>Lemon Dessert <span>4.40</span></h3>
            <p>This comes straight from grandma's recipe book,every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <br></br><h4>Order a delivery</h4>
        </div>
        </div>
    </main>
    );
};


export default Specials;