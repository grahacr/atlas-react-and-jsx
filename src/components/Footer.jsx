// footer component
import data from "../assets/links.json";

export default function Footer() {
    let year = new Date().getFullYear();

    return (
    <footer>
        <ul>
            {data.map(item => (
                <li><a href={item.link} target="_blank">{item.label}
                </a></li>
            ))}
        </ul>
        <p>© {year} Atlas School</p>
    </footer>
    );
}