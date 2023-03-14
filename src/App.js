import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Forms from './pages/Forms';
import Info from './pages/Info';
import Files from './pages/Files';
import Assignments from './pages/Assignments';
import Hamm from './pages/Hamm';
import Wirtgen from './pages/Wirtgen';
import Voegele from './pages/Voegele';
import Kleemann from './pages/Kleemann';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Forms' element={<Forms/>} />
        <Route path='/Assignments' element={<Assignments/>} />
        <Route path='/Info' element={<Info/>} />
        <Route path='/Files' element={<Files/>} />
        <Route path='/Hamm' element={<Hamm/>} />
        <Route path='/Voegele' element={<Voegele/>} />
        <Route path='/Wirtgen' element={<Wirtgen/>} />
        <Route path='/Kleemann' element={<Kleemann/>} />
    </Routes>
    </Router>
);
}
  
export default App;