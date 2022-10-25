import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/pages/Auth';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}/>
        <Route path='home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
