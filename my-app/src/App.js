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
import { useEffect, useState } from 'react';

const db = [
  {
      name: "Green Acres",
      address: "123 Farm Road, Anytown, BC, Canada",
      distance: 18.2,
      rating: 4.9,
      produceType: "Potatoes",
      weight: 20,
      timeSincePost: 3.0,
      produceUrl:'./potatoes.png',
  },
  {
      name: "Farmland 21",
      address: "201 Farm District, BC, Canada",
      distance: 10.1,
      rating: 4.0,
      produceType: "Onions",
      weight: 8,
      timeSincePost: 6.0,
      produceUrl:'./onions.png',
  },
  {
      name: "Farmers Market",
      address: "Somewhere",
      distance: 26.6,
      rating: 3.6,
      produceType: "Carrots",
      weight: 12,
      timeSincePost: 1.0,
      produceUrl:'./carrots.png',
  },
  {
    name: "Sunrise Fields",
    address: "45 Sunrise Lane, Ruralville, BC, Canada",
    distance: 14.5,
    rating: 4.7,
    produceType: "Tomatoes",
    weight: 15,
    timeSincePost: 2.5,
    produceUrl: './tomatoes.jpg',
},
{
    name: "Organic Harvest",
    address: "789 Green Street, Organic City, BC, Canada",
    distance: 8.3,
    rating: 4.5,
    produceType: "Apples",
    weight: 10,
    timeSincePost: 4.2,
    produceUrl: './apples.jpeg',
},
{
    name: "Golden Meadows",
    address: "150 Farm Way, Sunnydale, BC, Canada",
    distance: 20.8,
    rating: 3.9,
    produceType: "Broccoli",
    weight: 5,
    timeSincePost: 5.8,
    produceUrl: './broccoli.jpg',
},
{
  name: "Harvest Haven",
  address: "33 Orchard Street, Fruitland, BC, Canada",
  distance: 12.7,
  rating: 4.8,
  produceType: "Peaches",
  weight: 18,
  timeSincePost: 1.8,
  produceUrl: './peaches.jpg',
},
{
  name: "Green Gardens",
  address: "55 Gardener's Lane, Plantville, BC, Canada",
  distance: 15.2,
  rating: 4.3,
  produceType: "Cucumbers",
  weight: 7,
  timeSincePost: 3.5,
  produceUrl: './cucumbers.jpg',
},
]


function App() {

  const [cards, setCards] = useState(db)

  useEffect(() => {
    document.title = "FarmShare"
  },[])

  return (
    <>
    <div className='appContainer'>
      <NavBar/>
        <Routes>
          <Route path="/farmerpage" element={<FarmerPage cards={cards} cardsSetter={setCards}/>}/>
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/matchpage" element={<MatchPage/>}/>
          <Route path="/swipepage" element={<SwipePage cards={cards}/>}/>
        </Routes>  
    </div>
    </>
  )
}

export default App;
