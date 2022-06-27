import { useState } from "react";
import "./App.css";

import LoginForm from "./components/LoginForm";
import { Welcome } from "./pages";
import API from './services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const adminUser = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState({ username: "" });
  const [status, setStatus] = useState(0);
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    // if (
    //   details.username === adminUser.username &&
    //   details.password === adminUser.password
    // ) {
    //   console.log("Logged in");
    //   setUser({
    //     username: details.username,
    //     password: details.password,
    //   });
    // } else {
    //   console.log("Details do not match!");
    //   setError("Details do not match!");
    // }

    const api = new API();
    api
      .onCallAPI(
        'post',
        'sys_users/admin_login',
        { email: details.username, password: details.password },
        {},
        {},
      )
      .then(async res => {
        //lưu data res vào storage để giữ đăng nhập home
        await AsyncStorage.setItem("token", res.data.token); // lưu token response trả về để authorize
        await AsyncStorage.setItem("avatar", res.data.image);
        await AsyncStorage.setItem("fullName", res.data.fullName);
        setStatus(res.status);

        setUser({
          username: details.username,
          password: details.password,
        });
        console.log(status)
        console.log(user.username)
      });

  };

  const Logout = () => {
    setUser({ username: "" });
  };

  return (
    <div className="App">
      {status === 200 ? (
        <Welcome />
      ) : (
        <div className="LoginForm">
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  );

  // return (
  //   <div className="App">
  //     <button class="login-with-google-btn" onClick={signInWithGoogle}>
  //       Sign in with Google
  //     </button>
  //     <h1>{localStorage.getItem("name")}</h1>
  //     <h1>{localStorage.getItem("email")}</h1>
  //     <img src={localStorage.getItem("profilePic")} />

  //   </div>
  // );
}

export default App;
