import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a Full Stack web developer working from home</h3>
                            <div className="separator" />
                            <p> Richard Flores is a Software Developer , with experience building applications for Front End and Back End projects. His background in managing large scale event production, band management, and many software development proficiencies help him leverage a collabrotive and fast paced approach. Richard is fueled by her passion for understanding the nuances of how software works. He considers gimself a ‘forever student,’ eager to both build on his academic foundations in Back End and Front End development and stay in tune with the latest digital technologies  through continued coursework.
    His hunger for knowledge and determination to turn information into action has contributed to his most recent successes, where he built many collabrative projects and many on his own. Meanwhile, he vastly improved his productivity by asking questions, commenting code and keeping an organizied code base. 
    Richard believes mindfulness in the workplace is key to success - a tenet he lives out through his interests in yoga, meditation, photography, and playing guitar. Richard is currently working as a freelance video director/audio engineer and is always interested in a challenge. Reach out to Richardflores009@gmail.com to connect!</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/Richardflores009')}/>
                                {/* <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
                                <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} /> */}
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/richard-flores-7a19578b/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="JavaScript" value={90} delay={1100} />
                                <Progress name="MySQL" value={60} delay={1100} />
                                <Progress name="React" value={80} delay={1100} />
                                <Progress name="Object-Oriented Programming" value={100} delay={1100} />
                                <Progress name="MERN" value={100} delay={1100} />
                                <Progress name="Bootstrap" value={60} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero