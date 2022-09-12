import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import top from "./top";
import image1 from "../images/resume2.jpg";
import image2 from "../images/projects2.jpg";

function Cards() {
    return (
        <div className="cards">
            <h1>Take a Look!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image1}
                            text="Take a look at my resume to see how I could fit on your team"
                            label="Resume"
                            path="/resume"
                            onClick={top}
                        />
                        <CardItem
                            src={image2}
                            text="Check out some of my past Projects and see what I have done"
                            label="Projects"
                            path="/projects"
                            onClick={top}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
