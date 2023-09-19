
import App from "./app";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
import { Provider } from "react-redux";
import store from './store/';
const root = createRoot(container); 
function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
root.render(<Main tab="home" />);