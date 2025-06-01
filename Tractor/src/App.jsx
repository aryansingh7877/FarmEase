
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Applayout from './components/Applayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Onrent from './pages/onRent';
import ViewTools from './pages/ViewTools';
import Login from './pages/login';
import Register from './pages/Register';

// import Login from './pages/login';
// import OnRent from './pages/onRent';
// import ViewTools from './pages/VeiwTool';



function App() {
  

  return (
    <>
    <Router>
      <Routes>
      
        <Route path="/" element={<Applayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          {/* <Route path="/onrent" element={<OnRent/>} /> */}
          {/* <Route path="/view" element={<ViewTools/>} /> */}
          <Route path='/contact' element={<Contact/>} />
          <Route path='/onrent' element={<Onrent/>} />
          <Route path='/viewtool' element={<ViewTools/>} />
         

        </Route>
      </Routes>
    </Router>
  
    </>
  )
}

export default App
