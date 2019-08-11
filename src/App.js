import React from "react";
import MainHeader from "./view/main-header";
import MainFooter from "./view/main-footer";
import RouterIndex from "./router/index";
import "./view/index.css";
function App() {
    return (
        <div className="pageWrap">
            <MainHeader />
            <main className="main"></main>
            <MainFooter />
        </div>
    );
}

export default App;
