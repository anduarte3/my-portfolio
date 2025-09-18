import weather from '../img/weather-app.png'
import battleship from '../img/battleship.png'
import shopping from '../img/shopping.png'
import auth from '../img/authapp.png'
import register from '../img/register.png'
import login from '../img/login.png'
import feed from '../img/feed.png'
import '../css/Projects.css'

function Projects() {

    return (
        <div className="project-section">
            <div className='title-project'>Projects</div>
            <div className='text-image-container'>
                {/* Social App */}
                <div className='text-image-position'>
                    <div className='text-container'>
                        <div className='text-title'>Social App 📱</div>
                        <div className='text-info'>Using all the knowledge I have been learning to build a social app
                        using MERN stack and REST APIs to communicate the server side with the client, 
                        with good practices like json web token, passportJS for authentication, the following image is a sneak peek.
                        </div>
                        <div className='link-position'>
                            <a href='https://social-app-al2jczf7hr.netlify.app/' className='ref-link'>Live Preview</a>
                            <a href='https://github.com/anduarte3/social-app' className='ref-link'>View Code</a>
                        </div>
                    </div>
                    <div className='image-position'>
                        <img src={register} className='project-img'></img>
                        <img src={login} className='project-img'></img>
                        <img src={feed} className='project-img'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects