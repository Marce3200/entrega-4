import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
        />
        <Route
        path='/blog'
        element={<Blog/>}
        />
        <Route
        path='/menu'
        element={<Menu />}
        />
        <Route
        path='/reservas'
        element={<Reservas />}
        />
        <Route
        path='/contacto'
        element={<Contacto />}
        />
        <Route
        path='/about'
        element={<About />}
        />
    </Routes>
    
  );
}

export default App;
