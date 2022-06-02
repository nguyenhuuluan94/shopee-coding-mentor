import ProfileMenu from "../../ui/profile-menu/Profile-menu";
import { Outlet } from "react-router-dom";
import React from "react";
import Layout from "../../shared/layout/Layout";

const Account = () => {
    return (
        <Layout>
            <section className="bg-gray header-spacing p-4">
                <div className="wrapper">
                    <div className="d-flex w-100">
                        <div className="w-25 px-4">
                            <ProfileMenu/>
                        </div>
                        <div className="w-75">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Account;
