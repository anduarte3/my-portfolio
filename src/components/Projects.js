import weather from '../img/weather-app.png'
import tictactoe from '../img/tictactoe.png'
import battleship from '../img/battleship.png'
import shopping from '../img/shopping.png'
import '../css/Projects.css'

function Projects() {

    return (
        <div className="project-section">
            <h1>My Projects</h1>
            <div className='text-image-container'>
                {/* Weather App */}
                <div className='text-image-alignment'>
                    <div className='text-alignment'>
                        <div className='title-text'>Weather App</div>
                        <div className='project-info'>A very clean and good looking weather website, 
                            used this opportunity to learn a bit of asynchronous javascript and APIs.
                        </div>
                        <div>
                            <a href='https://anduarte3.github.io/weather-app/dist/index.html'>
                                <button className='code-link'>Live App</button>
                            </a>
                            <a href='https://github.com/anduarte3/weather-app'>
                                <button className='code-link'>Code</button>
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
                        <div className='project-info'>A simple Tic-Tac-Toe game, used this opportunity
                            to get more confortable with factory functions and objects manipulation,
                            while figuring it game logic and the flow of the game.
                        </div>
                        <div>
                            <a href='https://anduarte3.github.io/Tic-Tac-Toe/'>
                                <button className='code-link'>Live App</button>
                            </a>
                            <a href='https://github.com/anduarte3/Tic-Tac-Toe'>
                                <button className='code-link'>Code</button>
                            </a>
                        </div>
                    </div>
                    <div className='image-alignment'>
                        <img src={tictactoe} className='project-img'></img>
                    </div>
                </div>
                {/* Battleship */}
                <div className='text-image-alignment'>
                    <div className='text-alignment'>
                        <div className='title-text'>Battleship</div>
                        <div className='project-info'>A very challenging project, using pretty much
                            every concept i've learn so far.
                        </div>
                        <div>
                            <a href='https://anduarte3.github.io/Battleship/dist/index.html'>
                                <button className='code-link'>Live App</button>
                            </a>
                            <a href='https://github.com/anduarte3/Battleship'>
                                <button className='code-link'>Code</button>
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
                        <div className='project-info'> A cool looking Shopping website, main goal was to 
                            get more practice with react and learn to use react-router-dom.
                        </div>
                        <div>
                            <a href='https://anduarte3.github.io/Shopping-Cart/'>
                                <button className='code-link'>Live App</button>
                            </a>
                            <a href='https://github.com/anduarte3/Shopping-Cart'>
                                <button className='code-link'>Code</button>
                            </a>
                        </div>
                    </div>
                    <div className='image-alignment'>
                        <img src={shopping} className='project-img'></img>
                    </div>
                </div>
            </div>
            <div className='some-info'>For more projects you can check out my github at the bottom of the page!</div>
        </div>
    )
}

export default Projects