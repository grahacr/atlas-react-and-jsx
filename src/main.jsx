import "./index.css";
import reactDOM from "react-dom/client";
import App from "./App";

// Render the App component to the root element

const div = document.getElementById("root");
const root = reactDOM.createRoot(div);
root.render(<App />);
