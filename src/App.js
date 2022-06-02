import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
    faBell,
    faCircleQuestion,
    faGlobe,
    faMagnifyingGlass,
    faCartShopping,
    faSyncAlt,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import Home from "./components/page/homepage/Homepage";

library.add(fab, faFacebook, faInstagram, faBell, faCircleQuestion, faGlobe, faMagnifyingGlass, faCartShopping, faSyncAlt, faStar);

const App = () => {
    return (
        <Home/>
    );
};

export default App;
