import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetter'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    // Need to figure out how this state works
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a software engineer with a background in civil engineering. I enjoy creating and developing products
                    and applications that not only provide great service, but also look great aesthetically using CSS, HTML,
                    and Javascript. I thrive in fast-paced environments that require collaborative problem solving. An engineer
                    at heart, I enjoy being on a motivated team working together to find solutions and consistently meet goals.</p>
            </div>
        </div>
    )
}

export default About