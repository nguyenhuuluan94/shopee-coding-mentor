import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
    return (
        <>
            <ul className="list-group">
                <NavLink className={({isActive}) => isActive ? "list-group-item text-primary" : "list-group-item"}
                         to="/account/profile">Tài khoản của tôi</NavLink>
                <li className="list-group-item">Hồ sơ</li>
                <li className="list-group-item">Ngân hàng</li>
                <li className="list-group-item">Địa chỉ</li>
                <NavLink className={({isActive}) => isActive ? "list-group-item text-primary" : "list-group-item"}
                         to="/account/change-password">Đổi mật khẩu</NavLink>
            </ul>
        </>
    );
};

export default ProfileMenu;
