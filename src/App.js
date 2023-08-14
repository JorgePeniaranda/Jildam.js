import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;