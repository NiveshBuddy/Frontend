import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About Us/About";
import SignUp from "./Pages/Login_signup/Components/SignUp";
import SignIn from "./Pages/Login_signup/Components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/> 
      <Routes>     
        <Route exact path="/" element={<HomePage/>}/>  
        <Route exact path="/About" element={<About/>}/> 
        <Route exact path="/SignUp" element={<SignUp/>}/> 
        <Route exact path="/SignIn" element={<SignIn/>}/> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
