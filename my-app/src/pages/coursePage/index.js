import React, { useState, useRef, useEffect } from 'react'
import NotesTable from '../../components/NotesTable'
import Courses from '../../data/CourseList.ts'
import './CoursePage.css'
import { CSSTransition } from 'react-transition-group';

var CoursePage = (props) => {
    // props should be map containing course objects
    var courseName = props.courseName;
    var courseToDisplay = Courses[courseName]
    const [showTable, setShowTable] = useState(false);
    const [showHeader, setShowHeader] = useState(false)
    setTimeout(setShowTable, 0, true)
    setTimeout(setShowHeader, 0, true)
    const tableRef = useRef(null)
    const headerRef = useRef(null)

    // set title for page
    //  if the second argument (dependencies) were an empty array, it would
    //  callsuseEffect only once, making it similar to componentDidMount.
    useEffect(() => {
        document.title = courseToDisplay.title
     }, [courseToDisplay.title]);

    return (
        <> 
            <CSSTransition
                in={showHeader}
                nodeRef={headerRef}
                timeout={1500}
                classNames="coursePageHeader"
                >
                <div className="bg-dark-subtle courseTitle" ref={headerRef}>
                    <h1>{courseToDisplay.title}</h1>
                    <p className='taken'>Taken {courseToDisplay.semesterTaken}</p>
                </div>
            </CSSTransition>
            <hr className="titleRule"></hr>
            <CSSTransition
                // in: show the component; triggers enter/exit states
                in={showTable}

                nodeRef={tableRef}

                // timeout: duration of the transition, in milliseconds:
                //   after this we switch from "enter" to "enter-active" class
                // Required unless addEndListener is provided.
                timeout={800}

                classNames="mainContent">
                    <div className="content" ref={tableRef}>
                        <h5>Notes</h5>
                        <NotesTable 
                            resources={courseToDisplay.resources} 
                            resourceFormat={courseToDisplay.resourceFormat}
                        />
                    </div>
            </CSSTransition>
        </>
    )
}

export default CoursePage;