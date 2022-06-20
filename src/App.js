// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FiSettings } from "react-icons/fi";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// import { Navbar, Footer, Header, Sidebar, ThemeSettings } from "./components";
// import {
//   Home,
//   Users,
//   Tests,
//   TestResults,
//   Bar,
// } from "./pages";

// import { useStateContext } from "./contexts/ContextProvider";

// import "./App.css";

// const App = () => {
//   const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

//   useEffect(() => {
//     const currentThemeColor = localStorage.getItem('colorMode');
//     const currentThemeMode = localStorage.getItem('themeMode');
//     if (currentThemeColor && currentThemeMode) {
//       setCurrentColor(currentThemeColor);
//       setCurrentMode(currentThemeMode);
//     }
//   }, []);

//   return (
//     <div className={currentMode === 'Dark' ? 'dark' : ''}>
//       <BrowserRouter>
//         <div className="flex relative dark:bg-main-dark-bg">
//           <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
//             <TooltipComponent content="Settings" position="Top">
//               <button
//                 type="button"
//                 onClick={() => setThemeSettings(true)}
//                 style={{ background: currentColor, borderRadius: '50%' }}
//                 className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
//               >
//                 <FiSettings />
//               </button>
//             </TooltipComponent>
//           </div>
//           {activeMenu ? (
//             <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
//               <Sidebar />
//             </div>
//           ) : (
//             <div className="w-0 dark:bg-secondary-dark-bg">
//               <Sidebar />
//             </div>
//           )}
//           <div
//             className={
//               activeMenu
//                 ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
//                 : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
//             }
//           >
//             <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
//               <Navbar />
//             </div>

//             <div>
//               {themeSettings && (<ThemeSettings />)}

//               <Routes>
//                 {/*Dashboard*/}
//                 <Route path="/" element={<Home />} />
//                 <Route path="/home" element={<Home />} />

//                 {/*Pages*/}
//                 <Route path="/users" element={<Users />} />
//                 <Route path="/tests" element={<Tests />} />
//                 <Route path="/testResults" element={<TestResults />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import "./App.css";
import { signInWithGoogle } from "./services/firebase";
import LoginForm from "./components/LoginForm";
import { Welcome } from "./pages";

function App() {
  const adminUser = {
    username: "admin",
    password: "admin123",
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ username: "" });
  };

  return (
    <div className="App">
      {user.username !== "" ? (
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
