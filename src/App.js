import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import Navbar from './Components/Navbar';
import Manage from './Pages/Manage';
import { UserProvider } from './Contexts/userContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/main" element={<Main user='Jorge' />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;