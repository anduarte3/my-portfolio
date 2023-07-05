import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Skills from './components/Skills'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <Link to='/MyPortfolio/' className='nav-link'>Home</Link>
        <Link to='/Projects' className='nav-link'>Projects</Link>
        <Link to='/Resume' className='nav-link'>Resume</Link>
      </header>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skills/>} />
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
