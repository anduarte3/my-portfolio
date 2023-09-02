import weather from '../img/weather-app.png'
import battleship from '../img/battleship.png'
import shopping from '../img/shopping.png'
import '../css/Projects.css'

function Projects() {

    return (
        <div className="project-section">
            <div className='title-project'>My Projects</div>
            <div className='text-image-container'>
                {/* Weather App */}
                <div className='text-image-position'>
                    <div className='text-container'>
                        <div className='text-title'>Weather App 🌦️</div>
                        <div className='text-info'>A very clean and good looking weather website, 
                            used this opportunity to learn a bit of asynchronous javascript and APIs.
                        </div>
                        <div className='link-position'>
                            <a href='https://anduarte3.github.io/weather-app/dist/index.html' className='ref-link'>View Code</a>
                            <a href='https://github.com/anduarte3/weather-app' className='ref-link'>Live Preview</a>
                        </div>
                    </div>
                    <div className='image-position'>
                        <img src={weather} className='project-img'></img>
                    </div>
                </div>
                {/* Battleship */}
                <div className='text-image-position'>
                    <div className='text-container'>
                        <div className='text-title'>Battleship 🛳️</div>
                        <div className='text-info'>A very challenging project, using pretty much
                            every concept i've learn so far.
                        </div>
                        <div className='link-position'>
                            <a href='https://anduarte3.github.io/Battleship/dist/index.html' className='ref-link'>View Code</a>
                            <a href='https://github.com/anduarte3/Battleship' className='ref-link'>Live Preview</a>
                        </div>
                    </div>
                    <div className='image-position'>
                        <img src={battleship} className='project-img'></img>
                    </div>
                </div>
                {/* Shopping Cart */}
                <div className='text-image-position'>
                    <div className='text-container'>
                        <div className='text-title'>Shopping Cart 🛒</div>
                        <div className='text-info'> A cool looking Shopping website, main goal was to 
                            get more practice with react and learn to use react-router-dom.
                        </div>
                        <div className='link-position'>
                            <a href='https://anduarte3.github.io/Shopping-Cart/' className='ref-link'>View Code</a>
                            <a href='https://github.com/anduarte3/Shopping-Cart' className='ref-link'>Live Preview</a>
                        </div>
                    </div>
                    <div className='image-position'>
                        <img src={shopping} className='project-img'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects