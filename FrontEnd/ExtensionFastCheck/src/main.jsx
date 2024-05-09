import ReactDOM from "react-dom/client";
import { LoginContextProvider } from "./store/login"
import { PageContextProvider } from "./store/navigation"

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <LoginContextProvider>
        <PageContextProvider>
            <App />
        </PageContextProvider>
    </LoginContextProvider>
);