import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function Main() {
    return (
        <>
            <div id='home' className='aboutme-pagesize'><Home/></div>
            <div id='aboutme' className='aboutme-pagesize'><About/></div>
            <div id='skills' className='skill-pagesize'><Skills/></div>
            <div className="horizontal-line"></div>
            <div id='projects' className='project-pagesize'><Projects/></div>
            <div className='hidden'></div>
        </>
    )
}

export default Main