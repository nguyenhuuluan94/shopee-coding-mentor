import Header from "../../shared/header/Header";
import Footer from "../../shared/footer/Footer";

const Layout = (props) => {
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
    );
};

export default Layout;
