import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main className="SignupMain">
      <div className="content">
        <form class="form">
          <div class="title">
            Welcome,
            <br />
            <span>sign up to continue</span>
          </div>

          <input
            class="input"
            id="email-address"
            name="email"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            class="input"
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button class="button-confirm" onClick={onSignup}>
            Let`s go →
          </button>

          <p className="login">
            Already have an account? <NavLink to="/SignIn" className="logBtn">Login</NavLink>{" "}
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUp;

//   <main className="SignupMain">
//     <div className="content">

//       <span className="head">
//         Sign Up with us and Start your Trading Career with Us!
//       </span>

//       <form>
//         <div>
//           <label htmlFor="email-address">Email address</label>
//           <input
//             className="input"
//             id="email-address"
//             name="email"
//             type="email"
//             required
//             placeholder="Email address"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             className="input"
//             id="password"
//             name="password"
//             type="password"
//             required
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div>
//           <button onClick={onSignup}>SignUp</button>
//         </div>
//       </form>

//       <p className="text-sm text-center btn">
//         Already have an account? <NavLink to="/SignIn">Login</NavLink>
//       </p>

//     </div>
//   </main>
