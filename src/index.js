import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/page/login/Login";
import ProductDetail from "./components/page/product-detail/Product-detail";
// import App from './App';
// import Account from "./components/page/account/Account";
// import MyProfile from "./components/ui/my-profile/My-profile";
// import ChangePasswordForm from "./components/ui/change-password-form/Change-password-form";
import NotFound from "./components/page/not-found/Not-found";
import AuthRoute from "./components/guard/Auth-route";
import UnAuthRoute from "./components/guard/unAuth-route";
import Register from "./components/page/register/Register";
import Cart from "./components/page/cart/Cart";
import Search from "./components/page/search/Search";
import { Provider } from "react-redux";
import store from "./store/store";
const App = React.lazy(() => import('./App'));
const Account = React.lazy(() => import('./components/page/account/Account'));
const MyProfile = React.lazy(() => import("./components/ui/my-profile/My-profile"));
const ChangePasswordForm = React.lazy(() => import("./components/ui/change-password-form/Change-password-form"));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<p>loading...</p>}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AuthRoute />}>
                            <Route path="/" element={<App/>}/>
                            <Route path="account" element={<Account/>}>
                                <Route path="profile" element={<MyProfile/>}/>
                                <Route path="change-password" element={<ChangePasswordForm/>}/>
                            </Route>
                            <Route path="product/:productId" element={<ProductDetail/>}/>
                            <Route path="cart" element={<Cart/>}/>
                            <Route path="search" element={<Search/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>
                        <Route element={<UnAuthRoute />}>
                            <Route path="login" element={<Login/>}/>
                            <Route path="register" element={<Register/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
