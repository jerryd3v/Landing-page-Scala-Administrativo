
//Librerias
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Vistas
import Home from './pages/home';
import About from './pages/about';
import Princing from './pages/princing';
import NotFound from './pages/NotFound';
import Users from './pages/users';





function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/pricing' element={<Princing/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>

    </Router>

  );

}

export default App;
