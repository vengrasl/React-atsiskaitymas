import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Add from './components/Add';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/*" element={<h1>404 not found</h1>} />
      </Routes>
     
      <Footer/>
    </>
  );
}

export default App;
