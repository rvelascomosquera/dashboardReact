import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Project from './components/Project';
import Dashboard from './components/Pages/Dashboard';
import Skills from './components/Pages/Skills';
import References from './components/Pages/References';



function App() {
  return (
    <BrowserRouter>
      <div className='box'>
        <Sidebar />
        <div className='content'>
          <Navbar />
          <div className='content__box'>
            <div className='content__info'>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/references" element={<References />} />
              </Routes>
            </div>
              <Project />
            </div>
          </div>
          
        </div>
    </BrowserRouter>
  );
}

export default App;
