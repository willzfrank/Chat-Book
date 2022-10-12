import './App.css';
import Navbar from './component/NavbarChat/NavbarChat';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/Register/Register.jsx';
import LandingPage from './pages/LandingPage/LandingPage';
import Error404 from './pages/404/404.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="blur top"></div>
        <div className="blur bottom"></div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
