import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import top from "./top";

function Cards() {
    return (
        <div className="cards">
            <h1>Check Me Out!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/resume2.jpg"
                            text="Take a look at my resume to see how I could fit on your team"
                            label="Resume"
                            path="/resume"
                            onClick={top}
                        />
                        <CardItem
                            src="images/projects2.jpg"
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
