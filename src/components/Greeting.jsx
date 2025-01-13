// Greeting component
import React from "react";
import dayPic from "../assets/day.svg";
import nightPic from "../assets/evening.svg";

export default function Greeting() {
    const currentTime = new Date().getHours();
    let greetingMsg;
    let greetingImg;

    switch (true) {
        case (currentTime >= 6 && currentTime < 12):
            greetingMsg = "Good Morning!";
            greetingImg = dayPic;
            break;
        case (currentTime >= 12 && currentTime < 5):
            greetingMsg = "Good Afternoon!";
            greetingImg = dayPic;
            break;
        case (currentTime >= 5 && currentTime < 9):
            greetingMsg = "Good Evening!";
            greetingImg = nightPic;
            break;
        default:
            greetingMsg = "Good Night!";
            greetingImg = nightPic;
            break;
        }
        
        return (
            <h1 className="greeting">
            <img src={greetingImg} alt={greetingMsg} />
            {greetingMsg}
            </h1>
        );
    }