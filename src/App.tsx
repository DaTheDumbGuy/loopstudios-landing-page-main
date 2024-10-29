import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './assets/styles/stylesmin.css';
function App() {
  

  return (
    <>
     <Router basename="/FEM-loopstudios/">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
