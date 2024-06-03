import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import { Homepage } from './pages/Homepage'
import { Homepage } from '../../pages/homePage/Homepage'
import { Failure } from '../../pages/Failure'
import CoursePage from '../../pages/coursePage'
import NotesTable from '../NotesTable/'

export default function Router(props) {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                {/*tries to match path through the following list, if can't match anything it returns the 404 component*/}
                <Route exact path="/" element={<Homepage/>}/> {/*match nothing*/}
                <Route path="/testTable" element={<NotesTable/>}/>
                {/* "key" props in CoursePage below are used to force re-renders when we switch between CoursePage instances (for different courses) */}
                <Route path="/CO250" element={<CoursePage courseName='CO250' key='CO250'/>}/>
                <Route path="/CS348" element={<CoursePage courseName='CS348' key='CS348'/>}/>
                <Route path="/CS350" element={<CoursePage courseName='CS350' key='CS350'/>}/>
                <Route path="/MATH136" element={<CoursePage courseName='MATH136' key='MATH136'/>}/>
                <Route path="/MATH239" element={<CoursePage courseName='MATH239' key='MATH239'/>}/>
                <Route path="/STAT230" element={<CoursePage courseName='STAT230' key='STAT230'/>}/>
                <Route component={Failure} />
            </Routes>
        </HashRouter>
    )
}