// Helpful Resource component
import React from "react";
import OpenLink from "./OpenLink"
import CopyLink from "./CopyLink";

export default function HelpfulResource(props) {
    return (
        <div className="helpful-resource">
            {props.label}
            <OpenLink link={props.link} />
            <CopyLink link={props.link} />
        </div>
    )
}