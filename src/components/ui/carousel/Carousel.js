import styles from "./Carousel.module.scss";
import slide_1 from "../../../assets/images/slide-1.png";
import slide_2 from "../../../assets/images/slide-2.png";
import slide_3 from "../../../assets/images/slide-3.png";
import slide_aside_1 from "../../../assets/images/slide-aside-1.png";
import slide_aside_2 from "../../../assets/images/slide-aside-2.png";
import health from "../../../assets/images/health-protect.png";
import re from "../../../assets/images/re.png";
import flash from "../../../assets/images/flash.gif";
import freeship from "../../../assets/images/freeship.png";

const Carousel = () => {
    const carouselCategories = [
        {
            text: "Bảo vệ sức khỏe",
            url: "o-nha-khong-kho-co-shopee-lo",
            img: health
        },
        {
            text: "Gì cũng rẻ - Mua là freeship",
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: re
        },
        {
            text: 'Khung giờ săn sale',
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: flash
        },
        {
            text: 'Freeship Xtra',
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: freeship
        },
        {
            text: 'Hoàn xu Xtra',
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: health
        },
        {
            text: 'Hàng hiệu -50%',
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: re
        },
        {
            text: 'Hàng quốc tế',
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: freeship
        },
        {
            text: 'Nạp thẻ',
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: freeship
        },
        {
            text: 'Deal sốc 1k',
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: freeship
        },
        {
            text: 'Chọn 6 số trúng tiền',
            url: 'o-nha-khong-kho-co-shopee-lo',
            img: freeship
        },
    ]
    return (
        <>
            <section className={`d-flex wrapper ${styles.carouselSection}`}>
                <div id="carouselExampleControls" className={`${styles.carousel} slide`} data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slide_1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={slide_2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={slide_3} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className={`${styles.carouselAside} ms-2 d-flex flex-column justify-content-between`}>
                    <img src={slide_aside_1} alt="" className="d-block w-100"/>
                    <img src={slide_aside_2} alt="" className="d-block w-100"/>
                </div>
            </section>

            <section className="wrapper d-flex justify-content-between mt-3">
                {carouselCategories.map(item => {
                    return (
                        <div className={`${styles.carouselCategoryItem} d-flex flex-column align-items-center`}
                             key={item.text}>
                            <img src={item.img} alt={item.text}
                                 className={`d-block ${styles.carouselCategoryItemImg}`}/>
                            <p className="text-center"><small>{item.text}</small></p>
                        </div>
                    )
                })}
            </section>
        </>
    );
};

export default Carousel;
    
    
