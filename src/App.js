import "./css/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
function App() {
  return (
    <>
    
    <Routes>

      <Route path="/" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
    
    </>
  );
}

export default App;
