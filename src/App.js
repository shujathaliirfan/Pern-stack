import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './app/Home/Home';
import Header from './app/Header';
import Login from './app/Login';
import NotFound from './app/NotFound/NotFound';

function App() {
  return (          
      <Routes>
        <Route index  path="/" element={<Home />} />
        <Route  path="/login" element={<Login />}/>
        <Route  path="/header" element={<Header />}/>        
        <Route element={<NotFound/>} />
      </Routes>
 
  );
}

export default App;
