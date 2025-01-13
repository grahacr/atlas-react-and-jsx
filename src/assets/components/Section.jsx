// Section component
import React from "react";
import linkedIn from "../linkedin.svg";
import github from "../github.svg";

export default function Section(props) {
    return <div>
        <h1>{props.title}</h1>
        {props.children}
    </div>
}