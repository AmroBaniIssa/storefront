// import React from "react";
// import ReactDOM from "react-dom";
// import Theme from "./Context/theme.jsx";

// import App from "./app.jsx";
// import "./App.css";

// class Main extends React.Component {
//   render() {
//     return (
//       <Theme>
//         <App />
//       </Theme>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Main />, rootElement);

import App from "./app";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
import { Provider } from "react-redux";
import store from './store/';
const root = createRoot(container); // createRoot(container!) if you use TypeScript
function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
root.render(<Main tab="home" />);