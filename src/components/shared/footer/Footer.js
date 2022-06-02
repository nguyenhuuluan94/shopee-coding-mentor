import './Footer.scss';

const Footer = () => {
    return (
        <footer className="container d-flex justify-content-between">
            <div>
                <p className="heading">CHĂM SÓC KHÁCH HÀNG</p>
                <ul>
                    <li>Trung tâm trợ giúp</li>
                    <li>Shopee Blog</li>
                    <li>Shopee Mall</li>
                    <li>Hướng dẫn mua hàng</li>
                    <li>Hướng dẫn bán hàng</li>
                    <li>Vận chuyển</li>
                    <li>Trả hàng hoàn tiền</li>
                    <li>Chăm sóc khách hàng</li>
                    <li>Chính sách bảo hành</li>
                </ul>
            </div>
            <div>
                <p className="heading">VỀ SHOPEE</p>
                <ul>
                    <li>Giới thiệu</li>
                    <li>Tuyển dụng</li>
                    <li>Điều khoản</li>
                    <li>Chính sách</li>
                    <li>Flash Sales</li>
                </ul>
            </div>
            <div>
                <p className="heading">THANH TOÁN</p>
            </div>
            <div>
                <p className="heading">THEO DÕI CHUNG TÔI</p>
            </div>
            <div>
                <p className="heading">TẢI ỨNG DỤNG</p>
            </div>
        </footer>
    )
}

export default Footer;
