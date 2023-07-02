import weather from '../img/weather-app.png'
import tictactoe from '../img/tictactoe.png'
import library from '../img/library.png'
import battleship from '../img/battleship.png'
import shopping from '../img/shopping.png'
import '../css/Projects.css'

function Projects() {
    return (
        <div className="project-section">
            <h1>My Projects</h1>
            {/* Weather App */}
            <div className='text-image-alignment'>
                <div className='text-alignment'>
                    <div className='title-text'>Weather App</div>
                    <div className='project-info'>A very clean and good looking weather website, 
                        used this opportunity to learn a bit of asynchronous javascript and APIs.
                    </div>
                    <div>
                        <a href='https://anduarte3.github.io/weather-app/dist/index.html'>
                            <button>Live App</button>
                        </a>
                        <a href='https://github.com/anduarte3/weather-app'>
                            <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className='image-alignment'>
                    <img src={weather} className='project-img'></img>
                </div>
            </div>
            {/* Tic-Tac-Toe */}
            <div className='text-image-alignment'>
                <div className='text-alignment'>
                    <div className='title-text'>Tic-Tac-Toe</div>
                    <div className='project-info'>
                    </div>
                    <div>
                        <a href='https://anduarte3.github.io/Tic-Tac-Toe/'>
                            <button>Live App</button>
                        </a>
                        <a href='https://github.com/anduarte3/Tic-Tac-Toe'>
                            <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className='image-alignment'>
                    <img src={tictactoe} className='project-img'></img>
                </div>
            </div>
            {/* Library */}
            <div className='text-image-alignment'>
                <div className='text-alignment'>
                    <div className='title-text'>Library</div>
                    <div className='project-info'>
                    </div>
                    <div>
                        <a href='https://anduarte3.github.io/Library/'>
                            <button>Live App</button>
                        </a>
                        <a href='https://github.com/anduarte3/Library'>
                            <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className='image-alignment'>
                    <img src={library} className='project-img'></img>
                </div>
            </div>
            {/* Battleship */}
            <div className='text-image-alignment'>
                <div className='text-alignment'>
                    <div className='title-text'>Battleship</div>
                    <div className='project-info'>
                    </div>
                    <div>
                        <a href='https://anduarte3.github.io/Battleship/dist/index.html'>
                            <button>Live App</button>
                        </a>
                        <a href='https://github.com/anduarte3/Battleship'>
                            <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className='image-alignment'>
                    <img src={battleship} className='project-img'></img>
                </div>
            </div>
            {/* Shopping Cart */}
            <div className='text-image-alignment'>
                <div className='text-alignment'>
                    <div className='title-text'>Shopping Cart</div>
                    <div className='project-info'>
                    </div>
                    <div>
                        <a href='https://anduarte3.github.io/Shopping-Cart/'>
                            <button>Live App</button>
                        </a>
                        <a href='https://github.com/anduarte3/Shopping-Cart'>
                            <button>Code</button>
                        </a>
                    </div>
                </div>
                <div className='image-alignment'>
                    <img src={shopping} className='project-img'></img>
                </div>
            </div>

            <div className='some-info'>For more projects you can check out my github at the bottom of the page!</div>
        </div>

        
        
    )
}

export default Projects