// import IndukBuku from "./induk-buku";
import Home from "./Pages/home";
import { Route, Routes } from "react-router-dom";
import State from "./Pages/state";
import EventHandling from "./Pages/eventHandling";
import UseEffect from "./Pages/useEffect";
import Animasi from "./Pages/timer";
import FetchApi from "./Pages//fetch";
import ReactContext from "./Pages/reactContext";
import GetMahasiswa from "./Components/admin/GetMahasiswa";
import CreateMahasiswa from "./Components/admin/CreateMahasiswa";

function App() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/" element={<IndukBuku/>} /> */}
            <Route path="/state" element={<State/>} />
            <Route path="/eventHandling" element={<EventHandling/>} />
            <Route path="/useEffect" element={<UseEffect/>} />
            <Route path="/timer" element={<Animasi/>} />
            <Route path="/fetch" element={<FetchApi/>} />
            <Route path="/reactContext" element={<ReactContext/>} />
            <Route path="/GetMahasiswa" element={<GetMahasiswa/>} />
            <Route path="/CreateMahasiswa" element={<CreateMahasiswa/>} />
        
        </Routes>
     );
}

export default App;