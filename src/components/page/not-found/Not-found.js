import pageNotFound from "../../../assets/images/not-found-page.jpeg";
import Layout from "../../shared/layout/Layout";

const NotFound = () => {
    return (
        <Layout>
            <section className="bg-gray header-spacing p-4">
                <div className="wrapper bg-white">
                        <div className="w-100 px-4">
                            <img src={pageNotFound} className="d-block w-100"/>
                        </div>
                        <div className="w-100 d-flex justify-content-center mb-4">
                            <p className="px-4 display-6">Sorry, we could not find the page you're looking for</p>
                        </div>
                </div>
            </section>
        </Layout>
    );
};

export default NotFound;
