import React, { useState } from "react";
import logo from "../assets/LogoFPT.png";

const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div class="Logo">
                    <img src={logo} alt="/home" width={200} />
                </div>
                {error !== "" ? <div className="error">{error}</div> : ""}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) =>
                            setDetails({ ...details, username: e.target.value })
                        }
                        value={details.username}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                            setDetails({ ...details, password: e.target.value })
                        }
                        value={details.password}
                    />
                </div>
                <div class="buttonHolder">
                    <input type="submit" value="LOGIN" />
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
