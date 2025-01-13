// Copy Link component
import React from "react";
import Copy from "../assets/copy.svg";

export default function CopyLink(props) {
    return (
        <a href={props.link} target="_blank">
            <img className="copy" src={Copy}
            onClick={(event) => {
                event.preventDefault();
                navigator.clipboard.writeText(props.link)}}></img>
        </a>
    );
}