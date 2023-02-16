
//Librerias
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Vistas
import Home from './pages/home';
import Developer from './pages/developer';
import About from './pages/about';
import Princing from './pages/princing';
import NotFound from './pages/NotFound';
import Users from './pages/users';
import Codigo from './pages/codigo';




function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='developer' element={<Developer/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/pricing' element={<Princing/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/codigo' element={<Codigo/>}/>
      </Routes>

    </Router>

  );

}

export default App;
