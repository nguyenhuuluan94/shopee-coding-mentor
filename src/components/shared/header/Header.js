import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../../assets/images/avatar.jpeg";
import NavBar from "./navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    
    const user = {
        userName: 'nguyenhuuluan',
        avatar: avatar,
    }

    return (
        <header className="bg-primary">
            <div className="wrapper">
                <nav className="navbar navbar-expand w-100">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 left-nav">
                        <li className="nav-item ">
                            <a className="nav-link slash">Kênh người bán</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link slash">Tải ứng dụng</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Kết nối</a>
                            <FontAwesomeIcon icon="fa-brands fa-facebook" className="mx-2"/>
                            <FontAwesomeIcon icon="fa-brands fa-instagram"/>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <FontAwesomeIcon icon="fa-bell"/>
                            <a className="nav-link active">Thông báo</a>
                        </li>
                        <li className="nav-item">
                            <FontAwesomeIcon icon="fa-circle-question"/>
                            <a className="nav-link">Hỗ trợ</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon="fa-globe"/>
                                Tiếng Việt
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item">Tiếng Việt</a></li>
                                <li><a className="dropdown-item">English</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center"
                               id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="nav-link">{user.userName}</span>
                                <img src={user.avatar} alt="avatar" className="avatar circle"/>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/account/profile">Tài khoản của tôi</Link>
                                </li>
                                <li><a className="dropdown-item">Đơn mua</a></li>
                                <li><a className="dropdown-item" onClick={logout}>Đăng xuất</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <NavBar/>
        </header>
    );
}

export default Header;

