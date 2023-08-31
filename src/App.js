import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Terms from './Pages/Terms';
import Main from './Pages/Main';
import Manage from './Pages/Manage';
import Profile from './Pages/Profile';
import { UserProvider } from './Contexts/userContext';
import PersonalizationProfile from './Pages/Profile/Pages/Personalization';
import SecurityProfile from './Pages/Profile/Pages/Security';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Unlogged */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />

          {/* Logged */}
          <Route path="/main" element={<Main user='Jorge' />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/profile" element={<Profile><Navigate to='/profile/personalization' /></Profile>} />
          <Route path="/profile/personalization" element={<Profile><PersonalizationProfile /></Profile>} />
          <Route path="/profile/security" element={<Profile><SecurityProfile /></Profile>} />

          {/* 404 */}
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;