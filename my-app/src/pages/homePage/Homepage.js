import React, { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Homepage.css'
import { CSSTransition } from 'react-transition-group';

export const Homepage = () => {
    const [showLeftCol, setshowLeftCol] = useState(false)
    const [showRightCol, setshowRightCol] = useState(false)
    const [fadeHeader, setFadeHeader] = useState(false)
    const [slideHrHeader, setSlideHrHeader] = useState(false);
    const [showMiddleSeparator, setShowMiddleSeparator] = useState(false);
    setTimeout(setshowLeftCol, 0, true)
    setTimeout(setshowRightCol, 0, true)
    setTimeout(setFadeHeader, 0, true)
    setTimeout(setSlideHrHeader, 0, true)
    setTimeout(setShowMiddleSeparator, 0, true)
    const headerRef = useRef(null)
    const headerHrRef = useRef(null)
    const leftColRef = useRef(null)
    const rightColRef = useRef(null)
    const middleSepRef = useRef(null)

    return (
    <React.Fragment>
        <Container className="mainContentWrapper">
            <Container className="mainContent">
            <Row>
                <Col>
                    <CSSTransition
                        in={fadeHeader}
                        nodeRef={headerRef}
                        timeout={2000}
                        classNames="headerTransition"
                        >
                        <h1 className="homepageHeader" ref={headerRef}>
                            <b>
                                Danny's Notes
                            </b>
                        </h1>
                    </CSSTransition>
                    <CSSTransition
                        in={slideHrHeader}
                        nodeRef={headerHrRef}
                        timeout={3000}
                        classNames="headerHrTransition"
                        >
                        <hr ref={headerHrRef}></hr>
                    </CSSTransition>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <CSSTransition
                    in={showLeftCol}
                    nodeRef={leftColRef}
                    timeout={7000}
                    classNames="leftColTransition">
                    <Col className="leftContentColumn contentColumn" ref={leftColRef}>
                        <p>
                            This is an open archive of personal notes I have created in my time studying computer science 
                            at the University of Waterloo, including CS, CO, STAT and MATH courses.
                        </p>
                        <p>
                            Use the navigation bar on top to see if the course you are looking for is available here and access 
                            the associated note files, which will usually be in OneNote (.one) format. There's a mix of typed 
                            and handwritten (neatly, don't worry) content, mostly content summaries.
                        </p>

                        <p>
                            Notes for 10 more courses will be published over the break; please be patient since my PC is slow and it takes
                            time to export each OneNote file one by one to then add them to the site's files.
                        </p>
                    </Col>
                </CSSTransition>
                <CSSTransition
                    in={showMiddleSeparator}
                    nodeRef={middleSepRef}
                    timeout={5000}
                    classNames="middleSeparatorTransition">
                    <div className="middleSeparator" ref={middleSepRef}>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={showRightCol}
                    nodeRef={rightColRef}
                    timeout={5000}
                    classNames="rightColTransition">
                    <Col className="rightContentColumn contentColumn" ref={rightColRef}>
                        <p>
                            All work on this website is licensed under a Creative Commons Attribution Non-Commercial ShareAlike 
                            4.0 International License (<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>). 
                            This means you can do whatever you want with it, provided you <b>(1)</b> give credit, <b>(2)</b> also share your work 
                            openly under the same license and <b>(3)</b> do not use it for commercial purposes.
                        </p>
                        
                        <p>
                            Everything on this website is unofficial and is not guaranteed to be correct, and content here exists
                            under the belief that is permitted by the associated faculty members: 
                            please <a href="mailto:dakbarza@uwaterloo.ca">contact me</a> if anything is not and it will be unpublished. 
                    </p>
                    </Col>
                </CSSTransition>
            
            </Row>
        </Container>
        </Container>
       

    </React.Fragment>
    )
}
