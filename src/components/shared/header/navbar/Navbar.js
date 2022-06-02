import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./search-bar/SearchBar";
import logo from "../../../../assets/images/logo-full-white.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartActions } from "../../../../store/cart";

const NavBar = () => {
  const shoppingCartNumbers = useSelector(
    (state) => {
      console.log(state);
      return state.cart.quantity
    }
  );

  const favorites = [
    {
      name: "Thời trang nam",
      id: 1,
    },
    {
      name: "Áo đá bóng",
      id: 2,
    },
    {
      name: "Mũ lưỡi trai",
      id: 3,
    },
    {
      name: "Điện thoại",
      id: 4,
    },
    {
      name: "Máy tính bảng",
      id: 5,
    },
  ];
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (shoppingCartNumbers) return;
    // assume this number is fetched from BE
    dispatch(cartActions.updateCart(2));
  }, [])

  return (
    <nav className="wrapper navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" width="162px" />
        </Link>
        <SearchBar>
          <div className="text-small mt-2 align-self-start">
            {favorites.map((item) => {
              return (
                <span className="me-3" key={item.name}>
                  {item.name}
                </span>
              );
            })}
          </div>
        </SearchBar>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link className="nav-item position-relative" to="/cart">
            <FontAwesomeIcon icon="fa-cart-shopping" className="text-white" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-primary">
              {shoppingCartNumbers}
            </span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
