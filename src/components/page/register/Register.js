import "./Register.scss";
import logo from "../../../assets/images/logo.png";
import { useState, useEffect } from "react";
import Footer from "../../shared/footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomToast from "../../shared/toast/Custom-toast";

const Register = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState();
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsEmailValid(email.includes("@"));
        setIsPasswordValid(password.length >= 6);
    }, [email, password]);

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const register = () => {
        setError(null);
        axios.post("https://shopee-nodejs.herokuapp.com/api/auth/register", {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                navigate('/login');
            })
            .catch(function (err) {
                console.log(err);
                setError({
                    title: 'Register failed',
                    message: err.response.data
                });
            });
    };

    return (
        <>
            { error && <CustomToast title={error.title} message={error.message} onClose={() =>  setError(null)}/>}
            <nav className="container navbar d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center brand">
                    <img src={logo} alt="logo"/>
                    <h2>Đăng kí</h2>
                </div>
            </nav>
            <main className="bg-primary">
                <section className="container">
                    <form className="form-container" autoComplete="off">
                        <div className="d-flex justify-content-between">
                            <p className="text-heading text-uppercase">Đăng kí tài khoản</p>
                        </div>
                        {/*{error && <p className="text-danger">{error}</p>}*/}
                        <div className="form-input">
                            <input type="text" name="username" placeholder="Email / SDT / Tên đăng nhập"
                                   onChange={emailChangeHandler}
                                   className={`form-control ${isEmailValid ? "is-valid" : "is-invalid"}`}
                            />
                            <div className="invalid-feedback">
                                This email is invalid.
                            </div>
                        </div>
                        <div className="form-input">
                            <input type="password" name="password" placeholder="Mật khẩu" onChange={passwordChangeHandler}
                                   className={`form-control ${isPasswordValid ? "is-valid" : "is-invalid"}`}/>
                            <div className="invalid-feedback">
                                Password must have at least 6 characters
                            </div>
                        </div>
                        <button type="button" className="login-button bg-primary" onClick={register}
                                disabled={!isEmailValid || !isPasswordValid}>ĐĂNG KÍ
                        </button>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Register;
