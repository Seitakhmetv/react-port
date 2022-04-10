import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Loader} from 'react-loaders'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm very ambitious web developer looking for a position
                    in established IT company with the oportunity to work with
                    the latest technologies on challenging and diverse projects.
                </p>

                <p>
                    I'm studying Information Systems in 
                    Kazakh-British Technical University (KBTU). By the time I graduate
                    I am willing to become an expert in my field and be ready to
                    collaborate with other proffessionals on a mission to deliver the best solutions.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>

                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#dd0031" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#dd0031" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#dd0031" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#dd0031" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="#dd0031" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type = "pacman" />
        </>
    )
}

export default About