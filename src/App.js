import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import Navbar from './Components/Navbar';
import Manage from './Pages/Manage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/main" element={<Main user='Jorge' />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;