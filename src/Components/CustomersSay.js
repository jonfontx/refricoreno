import React from "react";
import ratings from "../icons_assets/360_F_335919003_TH0ZtHZZ5QGT34n1NcQXzRGvz4Pthg11.jpg";
import profile1 from "../icons_assets/10.jpg";
import profile2 from "../icons_assets/32.jpg";
import profile3 from "../icons_assets/42.jpg";
import profile4 from "../icons_assets/57.jpg";


const CustomersSay = () => {
    return (
            <>
            <div className="testimonials">
              <div className="testimonial-header">
                <h1>Testimonials</h1>
              </div>

              <div className="review-container">
                <div className="review">
                  <img id="rating" src={ratings} alt="ratings" />
                  <img id="profile" src={profile1} alt="Customer Pic" />Selena G.
                  <p>"Really enjoyed the atmosphere."</p>
                </div>
                <div className="review">
                  <img id="rating" src={ratings} alt="ratings" />
                  <img id="profile" src={profile2} alt="Customer Pic" />Brandon M.
                  <p>"The greek salad was excellent!"</p>
                </div>

                <div className="review">
                  <img id="rating" src={ratings} alt="ratings" />
                  <img id="profile" src={profile3} alt="Customer Pic" />Peter R.
                  <p>"You have to try the Greek Salad!"</p>
                </div>

                <div className="review">
                  <img id="rating" src={ratings} alt="ratings" />
                  <img id="profile" src={profile4} alt="Customer Pic" />Neha J.
                  <p>"Awesome place, peaceful, with delicious food"</p>
                </div>
              </div>
            </div>
            </>
        );
      };

export default CustomersSay;