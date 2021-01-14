import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>Full Stack Development</h4>
              <p>
              fluent in front-end and back-end skills and responsibilities. Possess all the skills necessary to create a fully functional web app, from the front-facing user experience to the complex systems behind it.
              </p>
            </AnimationContainer>
          </Col>
          {/* <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
            <div className="icon">
            <FontAwesomeIcon icon={faAngular} />
            </div>
            <h4>Angular Web App</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
            In et sem libero. Integer pretium, tellus eu pellentesque
            tristique, ex libero maximus elit, mollis tristique urna eros
            non tellus
            </p>
            </AnimationContainer>
          </Col> */}
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAws} />
              </div>
              <h4>AWS Management</h4>
              <p>
              Setting up, maintaining, and evolving the cloud infrastructure of web applications. An understanding of the core AWS services and apply best practices regarding security and scalability.
              </p>
            </AnimationContainer>
          </Col>
          {/* <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
            <div className="icon">
            <FontAwesomeIcon icon={faPencilRuler} className="solid" />
            </div>
            <h4>UI/UX Design</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
            In et sem libero. Integer pretium, tellus eu pellentesque
            tristique, ex libero maximus elit, mollis tristique urna eros
            non tellus
            </p>
            </AnimationContainer>
          </Col> */}
          {/* <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
            <div className="icon">
            <FontAwesomeIcon icon={faServer} className="solid" />
            </div>
            <h4>Linux Server Management</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
            In et sem libero. Integer pretium, tellus eu pellentesque
            tristique, ex libero maximus elit, mollis tristique urna eros
            non tellus
            </p>
            </AnimationContainer>
          </Col> */}
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>Front-end React</h4>
              <p>
              Specialize in the development of user interface ( UI) design for the user-facing side of an application or website. Visual design elements , including layout and aesthetics, and an understanding of how people interact with and use computer programs. Knowledge of code that runs on different operating systems, browsers and user devices in order to ensure cross-browser compatibility.
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={100}
                text="Happy Clients"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          {/* <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faPizzaSlice}
                value={1000}
                text="Pizzas Ordered"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={500}
                text="Reviews"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col> */}
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={50000}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      )
    }
  }
}

export default Services
