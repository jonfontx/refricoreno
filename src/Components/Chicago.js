import React from "react";
import chef from '../icons_assets/restaurant chef B.jpg';
import chef2 from '../icons_assets/Mario and Adrian A.jpg';

const Chicago = () => {
    return (
        <about className="about">
        <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Little Lemon is a charming and cozy restaurant nestled in the heart of Chicago, known for its delightful fusion cuisine and warm, friendly atmosphere. Since opening its doors in 2023, Little Lemon has become a beloved local dining destination, drawing food lovers from across the city to savor its creative dishes and exceptional service.</p>
            </div>
            <img className="chef1" src={chef} alt="chef"/>
            <img src={chef2} alt="chef2" className="chef2"/>
        </section>
        </about>
    );
};


export default Chicago;