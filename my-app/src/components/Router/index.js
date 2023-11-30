import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import { Homepage } from './pages/Homepage'
import { Homepage } from '../../pages/Homepage'
import { Failure } from '../../pages/Failure'
import CoursePage from '../../pages/coursePage'
import NotesTable from '../NotesTable/'

export default function Router(props) {
    return (
        <HashRouter>
            <Routes>
                {/*tries to match path through the following list, if can't match anything it returns the 404 component*/}
                <Route exact path="/" element={<Homepage/>}/> {/*match nothing*/}
                <Route path="/testTable" element={<NotesTable/>}/>
                <Route path="/MATH239" element={<CoursePage courseName='MATH239'/>}/>
                <Route component={Failure} />
            </Routes>
        </HashRouter>
    )
}