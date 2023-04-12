import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./App";

const cont = document.getElementById("root");
const root = createRoot(cont);

root.render(<App />)