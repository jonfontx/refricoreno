import React from "react";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import CallToAction from "./CallToAction";
import Specials from "./Specials";

const Homepage = () => {
    return (
              <div className="homepage">
                <CallToAction />
                <Specials />
                <CustomersSay />
                <Chicago id="about" />
              </div>
            );
          }


export default Homepage;