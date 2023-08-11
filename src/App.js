import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from './Pages/Main';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter /* basename="/" */>
      <Navbar />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





{/* <nav>
<NavLink to="/home">
  <h1 className='text-red-400 bg-red-800'>Hola</h1>
</NavLink>
</nav> */}
