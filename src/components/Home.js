import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import '../css/Home.css'

function Home () {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <div className='intro-container'>
            <div className="name">Hello! I'm André😁.</div>
            <div className='summary'>I aspire to be a FullStack Web Developer!</div>
            <div className='link-to'>
                <button className='link-btn' onClick={() => scrollToSection('skills')}>Skills</button>
                <button className='link-btn' onClick={() => scrollToSection('projects')}>Projects</button>
            </div>
        </div>
        <div id='skills' className='skill-pagesize'><Skills/></div>
        <div id='projects' className='project-pagesize'><Projects/></div>
        </>
    )
}

export default Home