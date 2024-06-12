import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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

    //   <main>
    //     <section>
    //       <div>
    //         <p> SignIn </p>

    //         <form>
    //           <div>
    //             <label htmlFor="email-address">Email address</label>
    //             <input
    //               id="email-address"
    //               name="email"
    //               type="email"
    //               required
    //               placeholder="Email address"
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>

    //           <div>
    //             <label htmlFor="password">Password</label>
    //             <input
    //               id="password"
    //               name="password"
    //               type="password"
    //               required
    //               placeholder="Password"
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>

    //           <div>
    //             <button onClick={onLogin}>Login</button>
    //           </div>
    //         </form>

    //         <p className="text-sm text-center">
    //           No account yet? <NavLink to="/signup">Sign up</NavLink>
    //         </p>
    //       </div>
    //     </section>
    //   </main>

    <main className="SignupMain">
      <div className="content">
        <form class="form">
          <div class="title">
            Welcome,
            <br />
            <span>Sign In to your account</span>
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

          <button class="button-confirm" onClick={onLogin}>
            Login →
          </button>

          <p className="login">
            New to out site? <NavLink to="/SignUp" className="logBtn">SignUp</NavLink>{" "}
          </p>
        </form>
      </div>
    </main>
    
  );
};

export default SignIn;
