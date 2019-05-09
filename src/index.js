import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import FluxApp from "./flux/FluxApp";
import ReduxApp from "./redux/ReduxApp";

ReactDOM.render(<FluxApp />, document.getElementById("root"));
// ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
