import html from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javascript.png'
import react from '../img/react.png'
import webpack from '../img/webpack.png'
import npm from '../img/npm.png'
import jest from '../img/jest.png'
import '../css/Skills.css'

function Skills () {
    return (
        <div className='skill-section'>These are the technologies i have been using
            <div className='skill-logos'>
                <img src={html} alt='html' className='logos'></img>
                <img src={css} alt='css' className='logos'></img>
                <img src={javascript} alt='javascript' className='logos'></img>
                <img src={react} alt='react' className='logos'></img>
                <img src={webpack} alt='webpack' className='logos'></img>
                <img src={npm} alt='npm' className='logos'></img>
                <img src={jest} alt='jest' className='logos'></img>
            </div>
        </div>
    )
}

export default Skills
