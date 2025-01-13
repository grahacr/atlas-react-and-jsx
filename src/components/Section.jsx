// Section component
import React from "react";

export default function Section(props) {
    return <div className="section">
        <h1>{props.title}</h1>
        {props.children}
    </div>
}