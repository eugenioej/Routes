import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Perfil } from './pages/Perfil';
import { Layout } from './pages/Layout';
import { Footer } from './pages/Footer';

function App() {

  return (
    <div>
      <Layout/>

      <Routes>
        <Route path="Dashboard" element={ <Dashboard/> }> </Route>
        <Route path="Home" element={ <Home/> }> </Route>
        <Route path="Login" element={ <Login/> }> </Route>
        <Route path="Perfil" element={ <Perfil/> }> </Route>
      </Routes>
        
      <Footer/>
    </div>
  );
}

export default App
