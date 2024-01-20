import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage.js';
import FarmerPage from './Pages/FarmerPage/FarmerPage';
import MatchPage from './Pages/MatchPage/MatchPage';
import NavBar from './Components/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom"
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/farmerpage" element={<FarmerPage/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/matchpage" element={<MatchPage/>}/>
        {/*TODO - ADD SWIPE PAGE */}
      </Routes>  
    </>
  )
}

export default App;
