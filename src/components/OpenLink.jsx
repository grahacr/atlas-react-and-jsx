// Open Link component
import Open from "../assets/open.svg";

export default function OpenLink(props) {
    return (
        <a href={props.link} target="_blank">
            <img src={Open}></img>
        </a>
    );
}