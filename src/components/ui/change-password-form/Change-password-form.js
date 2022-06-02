import { useEffect, useState } from "react";
import CustomToast from "../../shared/toast/Custom-toast";
import axios from "axios";

const ChangePasswordForm = () => {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isNewPasswordValid, setIsNewPasswordValid] = useState();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        setIsNewPasswordValid(newPassword.length >= 6);
        setIsConfirmPasswordValid(newPassword === confirmPassword);
    }, [newPassword, confirmPassword]);
    
    const changePassword = () => {
        setMessage(null);
        axios.put("https://shopee-nodejs.herokuapp.com/api/user/change-password", {
            password,
            newPassword
        }, {
            headers: {
                ['x-auth-token']: localStorage.getItem('token')
            }
        })
            .then(function (response) {
                console.log(response);
                setMessage({
                    title: "Change password successfully",
                    message: "Your password has been changed"
                });
            })
            .catch(function (err) {
                console.log(err);
                setMessage({
                    title: "Change password failed",
                    message: err.response.data
                });
            });
    }
    
    return (
        <>
            {message && <CustomToast title={message.title} message={message.message} onClose={() => setMessage(null)}/>}
            <div className="p-4 bg-white">
                <h5>Đổi mật khẩu</h5>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
                <div className="divider mb-3"/>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Mật khẩu hiện tại</label>
                    <div className="col-sm-9">
                        <input type="password"  className="form-control"   id="password" onChange={(e) => setPassword(e.target.value)}/>
                     
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="newPassword" className="col-sm-3 col-form-label">Mật khẩu mới</label>
                    <div className="col-sm-9">
                        <input type="password" className={`form-control ${isNewPasswordValid ? "is-valid" : "is-invalid"}`} id="newPassword" onChange={(e) => setNewPassword(e.target.value)}/>
                        <div className="invalid-feedback">
                            Password must have at least 6 characters
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="confirmPassword" className="col-sm-3 col-form-label">Xác nhận mật khẩu</label>
                    <div className="col-sm-9">
                        <input type="password" className={`form-control ${isConfirmPasswordValid ? "is-valid" : "is-invalid"}`} id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        <div className="invalid-feedback">
                            Confirm password does not match new password
                        </div>
                    </div>
                </div>
                <div className="mb-3 row justify-content-center">
                    <button className="btn bg-primary w-25 text-white" onClick={changePassword} disabled={!isNewPasswordValid || !isConfirmPasswordValid}>Xác nhận</button>
                </div>
            </div>
        </>
    );
};

export default ChangePasswordForm;
