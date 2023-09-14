import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div style={{ margin: '10px 10px 0 10px' }}>
      <NavBar />
      <Routes>
        <Route path="/stamps-market" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
