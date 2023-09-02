import { Route, Routes, Navigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import Main from './components/Main'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <div className='header-name'>André</div>
        <div className='header-links'>
          <Link smooth to='#home' className='header-link'>Home</Link>
          <Link smooth to='#aboutme' className='header-link'>About</Link>
          <Link smooth to='#skills' className='header-link'>Skills</Link>
          <Link smooth to='#projects' className='header-link'>Projects</Link>
        </div>
      </header>
        <Routes>
          <Route path='#home' element={<Home/>} />
          <Route path='#aboutme' element={<About/>} />
          <Route path='#skills' element={<Skills/>} />
          <Route path='#projects' element={<Projects/>} />
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
        <div><Main/></div>
      <footer>
        <div className='footer-icons'>
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