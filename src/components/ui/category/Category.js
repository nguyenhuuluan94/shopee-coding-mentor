import "./Category.scss";
import shirt from "../../../assets/images/t-shirt.png";
import { Component } from "react";

class Category extends Component {
    categories = [
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
        {
            text: "Thời trang nam",
            images: shirt
        },
    ];
    
    render() {
        return (
            <section className="wrapper bg-white flex-column">
                <h6 className="p-4 mb-0">DANH MỤC</h6>
                <div className="divider"/>
                <div className="d-flex flex-wrap">
                    {this.categories.map((item, index) => {
                        return (
                            <div className="category-item" key={index}>
                                <img src={item.images} alt={item.text} className="d-block w-100"/>
                                <p><small>{item.text}</small></p>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Category;
