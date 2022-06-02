import "./Suggestion.scss";
import hoanxu from "../../../assets/images/hoanxu.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Suggestion = () => {
    const [items, setItems] = useState([]);
    const loadMore = () => {
    };
    
    useEffect(() => {
        getProducts();
    }, []);
    
    const getProducts = () => {
        axios.get("https://shopee-nodejs.herokuapp.com/api/products")
            .then(function (response) {
                console.log(response);
                if (response?.data?.length) {
                    setItems(response.data)
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    
    return (
        <section className="wrapper bg-white flex-column mt-3 today-hint">
            <div className="d-flex align-items-center tabs bg-white">
                <h6 className="py-4 px-5 text-primary mb-0 tab active">GỢI Ý HÔM NAY</h6>
                <div className="hint-image-wrapper">
                    <img src={hoanxu} alt="" className="d-block w-100"/>
                </div>
            </div>
            <div className="row hint-wrapper bg-gray d-flex justify-content-between flex-wrap row-cols-6 g-2">
                {items.map((item, index) => {
                    return (
                        <div className="today-hint-item-wrapper bg-white" key={index}>
                            <div className="position-relative w-100">
                                <img src={item.productImage} alt="" className="d-block w-100"/>
                                <div className="flash-sale-number position-absolute top-0 end-0 text-center">
                                    <p className="mb-0 text-danger"><small>{item.discountPercentage}%</small></p>
                                    <p className="text-white">GIẢM</p>
                                </div>
                                <div className="position-absolute bottom-0">
                                    <img src={item.footerImage} alt="" className="d-block w-100"/>
                                </div>
                            </div>
                            <div className="hint-item-footer w-100 mt-2 p-2">
                                <NavLink to={`/product/${item._id}`} className="text-decoration-none">
                                    <p className="item-description text-dark">{item.description}</p>
                                </NavLink>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-primary">{item.price}</span>
                                    <small className="text-muted text-small">Đã bán {item.sold}</small>
                                </div>
                            </div>
                            <div className="bg-primary text-center text-white py-2 similar">
                                <small>Tìm sản phẩm tương tự</small>
                            </div>
                        </div>
                    );
                })}
                <div className="row w-100">
                    <button className="view-more " onClick={loadMore}>XEM THÊM</button>
                </div>
            </div>
        </section>
    );
};

export default Suggestion;
