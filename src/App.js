import Explore from "./components/Explore";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </>
  );    
}

export default App;
