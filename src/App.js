import CardAbout from "./components/CardAbout";
import NavBar from "./components/NavBar";
import "./css/index.css";
import CardActive from "./components/CardActive";
import CardMightKnow from "./components/CardMightKnow";
import Sidebar from "./components/SideBar";
function App() {
  return (
    <div className="bodyApp">
      <NavBar />
      <CardMightKnow />
    </div>
  );
}

export default App;
