import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About Us/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/> 
      <Routes>     
        <Route exact path="/" element={<HomePage/>}/>  
        <Route exact path="/About" element={<About/>}/>  
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
