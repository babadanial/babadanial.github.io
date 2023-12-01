import React from 'react'
import Table from 'react-bootstrap/Table'
import './NotesTable.css'

var tableElements
var row = 0;
var resourceFormat;

function createTableElements(value, key, map) {
    // to understand what key and value are, look at the "resources" property of the course interface in CourseList.ts
    var downloadLinks = [];
    value.forEach(
        (resource, index) => {
            downloadLinks.push(<td key={resource}><a download href={resource} target="_blank" rel="noreferrer">{resourceFormat[index]}</a></td>)
        }
    )
    tableElements[row] = (
        <tr key={row}>
            <td key={row}>{key}</td>
            {downloadLinks}
        </tr>
    )
    row++;
}

function NotesTable(props) {
    tableElements = []
    resourceFormat = props.resourceFormat
    props.resources.forEach(createTableElements)
    return  (
            <Table hover striped>
                <thead></thead>
                <tbody>{tableElements}</tbody>
            </Table>
            )
}

export default NotesTable;
