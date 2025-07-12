import { useContext, useState } from "react"
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./userProfileCard.scss"
import { AuthContext } from '../../context/AuthProvider';

const UserProfileCard = () => {

    const { changePassword, currentUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState({
        passwordOld: "",
        passwordNew1: "",
        passwordNew2: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setPassword(prev => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(password)
    };

    const handleClick = async (e) => {
        if (password.passwordNew1 != password.passwordNew2) {
            setError("New password does not match")
        } else if (!password.passwordOld || !password.passwordNew1 || !password.passwordNew2) {
            setError("All password fields are required")
        }

        try {
            await changePassword(password)
            await logOut()
            navigate("/login")
        } catch (err) {
            const errorMessage =
                err?.response?.data || "An unexpected error occurred";
            setError(errorMessage)
        }
    }



    return (
        <div className="userProfileCard">
            <div className="top">
                <img src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="" />
                <div className="name">
                    <h1>{currentUser.username}</h1>
                </div>
            </div>

            <div className="bottom">
                <span>Change password</span>
                {error && <h1>{error}</h1>}
                <input name="passwordOld" type="password" placeholder="old password" onChange={handleChange} />
                <input name="passwordNew1" type="password" placeholder="new password" onChange={handleChange} />
                <input name="passwordNew2" type="password" placeholder="new password" onChange={handleChange} />
                <button onClick={handleClick}>Change</button>
            </div>
        </div>
    )
}

export default UserProfileCard