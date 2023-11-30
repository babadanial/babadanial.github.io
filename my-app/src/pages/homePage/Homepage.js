import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Homepage.css'

export const Homepage = () => (
    <React.Fragment>
        <Container className="mainContentWrapper">
            <Container className="mainContent">
            <Row>
                <Col>
                    <h1 className="homepageHeader">
                        <b>
                            Danny's CS Notes
                        </b>
                    </h1>
                    <hr/>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="leftContentColumn contentColumn">
                    <p>
                        This is an open archive of personal notes I have created in my time studying computer science 
                        at the University of Waterloo, including CS, CO, STAT and MATH courses.
                    </p>
                    <p>
                        Use the navigation bar on top to see if the course you are looking for is available here and access 
                        the associated note files, which will usually be in OneNote (.one) format. There's a mix of typed 
                        and handwritten (neatly, don't worry) content, mostly content summaries.
                    </p>
                </Col>
                <Col className="rightContentColumn contentColumn">
                    <p>
                        All work on this website is licensed under a Creative Commons Attribution Non-Commercial ShareAlike 
                        4.0 International License (<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>). 
                        This means you can do whatever you want with it, provided you <b>(1)</b> give credit, <b>(2)</b> also share your work 
                        openly under the same license and <b>(3)</b> do not use it for commercial purposes.
                    </p>
                    
                    <p>
                        Everything on this website is unofficial and is not guaranteed to be correct; content here exists 
                        under the belief that is permitted by the associated faculty members: 
                        please <a href="mailto:dakbarza@uwaterloo.ca">contact me</a> if anything is not and it will be unpublished. 
                    </p>
                </Col>
            </Row>
        </Container>
        </Container>
       

    </React.Fragment>
)
