import html from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javascript.png'
import react from '../img/react.png'
import webpack from '../img/webpack.png'
import npm from '../img/npm.png'
import nodejs from '../img/node-js.png'
import mongodb from '../img/mongodb.png'
import expressjs from '../img/express-js.png'
import '../css/Skills.css'

function Skills() {
    return (
        <div className='techstack-section'>
            <div className='title'>Tech Stack</div>
            <div className='position-logos'>
                <div className='border-logos'>
                    <img src={html} alt='html' className='logos'></img>
                    <div className='skill-name'>html</div>
                </div>
                <div className='border-logos'>
                    <img src={css} alt='css' className='logos'></img>
                    <div className='skill-name'>css</div>
                </div>
                <div className='border-logos'>
                    <img src={javascript} alt='javascript' className='logos'></img>
                    <div className='skill-name'>javascript</div>
                </div>
                <div className='border-logos'>
                    <img src={react} alt='react' className='logos'></img>
                    <div className='skill-name'>react</div>
                </div>
                <div className='border-logos'>
                    <img src={webpack} alt='webpack' className='logos'></img>
                    <div className='skill-name'>webpack</div>
                </div>
                <div className='border-logos'>
                    <img src={npm} alt='npm' className='logos'></img>
                    <div className='skill-name'>npm</div>
                </div>
                <div className='border-logos'>
                    <img src={nodejs} alt='nodejs' className='logos'></img>
                    <div className='skill-name'>nodejs</div>
                </div> 
                <div className='border-logos'>
                    <img src={mongodb} alt='mongodb' className='logos'></img>
                    <div className='skill-name'>mongodb</div>
                </div>
                <div className='border-logos'>
                    <img src={expressjs} alt='expressjs' className='logos'></img>
                    <div className='skill-name'>expressjs</div>
                </div> 
            </div>  
        </div>
    )
}

export default Skills