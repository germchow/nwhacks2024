import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import FarmerPage from './Pages/FarmerPage/FarmerPage.jsx';
import MatchPage from './Pages/MatchPage/MatchPage.js';
import SwipePage from './Pages/SwipePage/SwipePage.js';
import NavBar from './Components/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link
} from "react-router-dom"
import LoginPage from './Pages/LoginPage/LoginPage';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    document.title = "FarmShare"
  },[])

  return (
    <>
    <div className='appContainer'>
      <NavBar/>
        <Routes>
          <Route path="/farmerpage" element={<FarmerPage/>}/>
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/matchpage" element={<MatchPage/>}/>
          <Route path="/swipepage" element={<SwipePage/>}/>
        </Routes>  
    </div>
    </>
  )
}

export default App;
