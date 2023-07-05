import { useEffect } from 'react';

import html from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javascript.png'
import react from '../img/react.png'
import webpack from '../img/webpack.png'
import npm from '../img/npm.png'
import '../css/Skills.css'

function Skills() {
    return (
            <div className='skill-section'>
                <div className='skill-logos'>
                    <div className='title-logos'>My Skills</div>
                    <div className='logos-position'>
                        <div>
                            <img src={html} alt='html' className='logos'></img>
                            <div className='skill-name'>html</div>
                        </div>
                        <div>
                            <img src={css} alt='css' className='logos'></img>
                            <div className='skill-name'>css</div>
                        </div>
                        <div>
                            <img src={javascript} alt='javascript' className='logos'></img>
                            <div className='skill-name'>javascript</div>
                        </div>
                        <div>
                            <img src={react} alt='react' className='logos'></img>
                            <div className='skill-name'>react</div>
                        </div>
                        <div>
                            <img src={webpack} alt='webpack' className='logos'></img>
                            <div className='skill-name'>webpack</div>
                        </div>
                        <div>
                            <img src={npm} alt='npm' className='logos'></img>
                            <div className='skill-name'>npm</div>
                        </div>   
                    </div>  
                </div>
            </div>
    )
}

export default Skills