import Layout from "../../shared/layout/Layout";
import "./Cart.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        getCart();
    }, []);

    const getCart = () => {
        axios.get("https://shopee-nodejs.herokuapp.com/api/cart", {
            headers: {
                ["x-auth-token"]: localStorage.getItem("token")
            }
        })
            .then(function (response) {
                console.log(response);
                if (response?.data?.length) {
                    setCarts(response.data);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };
    
    const deleteCart = (id) => {
        axios.delete(`https://shopee-nodejs.herokuapp.com/api/cart/${id}`, {
            headers: {
                ["x-auth-token"]: localStorage.getItem("token")
            }
        })
            .then(function (response) {
                console.log(response);
                const newCarts = carts.filter(item => item._id !== id)
                setCarts(newCarts);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    
    return (
        <Layout>
            <main className="bg-gray py-4 header-spacing">
                {carts.map((item, index) => {
                    return (
                        <section className="wrapper bg-white flex-column my-2" key={index}>
                            <div className="form-check p-3 ps-5">
                                <input className="form-check-input me-3" type="checkbox" value=""
                                       id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Happy Home 1977
                                </label>
                            </div>
                            <div className="divider"/>
                            <div
                                className="form-check d-flex flex-wrap align-items-center p-3 ps-5 justify-content-between">
                                <div className="d-flex flex-wrap align-items-center" style={{width: "40%"}}>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <div className="product-image-wrapper mx-3">
                                        <img src={item.product.productImage} alt="" className="d-block w-100"/>
                                    </div>
                                    <div className="form-check-label product-item-description w-75 text-truncate">
                                        {item.product.description}
                                    </div>
                                </div>
                                <div className="text-muted">
                                    Phân loại hàng: {item.color}
                                </div>
                                <div>
                                    <del>{item.product.price}</del>
                                    &nbsp; <span>{item.product.discountPrice}</span>
                                </div>
                                <div>
                                    Số lượng: {item.quantity}
                                </div>
                                <div className="text-primary">{item.product.discountPrice} * {item.quantity}</div>
                                <div onClick={ () => deleteCart(item._id) }>Xóa</div>
                            </div>
                        </section>
                    );
                })}
            </main>
        </Layout>
    );
};

export default Cart;
