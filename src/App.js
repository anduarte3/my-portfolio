import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Link to='/MyPortfolio/' className='nav-link'>Home</Link>
        <Link to='/Skills' className='nav-link'>Skills</Link>
        <Link to='/Projects' className='nav-link'>Projects</Link>
      </header>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <footer>
        <div>
          <a href='https://www.linkedin.com/in/andrte/'>
            <img src={linkedin} alt='Linkedin Logo' className='img-contact'></img>
          </a>
          <a href='https://github.com/anduarte3'>
            <img src={github} alt='Github Logo' className='img-contact'></img>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
