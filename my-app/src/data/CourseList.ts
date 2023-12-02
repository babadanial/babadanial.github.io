// interface course {
//     title: string;
//     resources: Map<string, Array<string>>;
//     resourceFormat: Array<string>; // maybe should be Array<'OneNote' | 'PDF'>
//     semesterTaken: string;
// }


const COPath = "/CourseNotes/CO/"
const CSPath = "/CourseNotes/CS/"
const MathPath = "/CourseNotes/MATH/"
const StatPath = "/CourseNotes/STAT/"
class courseInstance // implements course
{
    title: string;
    resources = new Map<string, Array<string>>;
    resourceFormat = new Array<string>;
    semesterTaken: string;

    constructor(name: string, semesterTaken: string) {
        this.title = name;
        this.semesterTaken = semesterTaken;
    }
}

// CO 250
var CO250Path = COPath + "CO250/"
const CO250 = new courseInstance("CO250", "Fall 2022")
CO250.resources.set("Chapter 1", [CO250Path + "1.one"])
CO250.resources.set("Chapter 2.1-2.2", [CO250Path + "2.1-2.2.one"])
CO250.resources.set("Chapter 2.2-2.8", [CO250Path + "2.2-2.8.one"])
CO250.resources.set("Chapter 3 - Duality and Convexity", [CO250Path + "3.one"])
CO250.resourceFormat = ['OneNote']

// CS348
var CS348Path = CSPath + "CS348/"
const CS348 = new courseInstance("CS348", "Winter 2023")
CS348.resources.set("Introduction", [CS348Path + "Intro.one"])
CS348.resources.set("Relational Model", [CS348Path + "Relational Model.one"])
CS348.resources.set("Basic SQL", [CS348Path + "SQL Basics.one"])
CS348.resources.set("Intermediate SQL 1", [CS348Path + "SQL Intermediate 1.one"])
CS348.resources.set("Intermediate SQL 2", [CS348Path + "SQL Intermediate 2.one"])
CS348.resources.set("Advanced SQL", [CS348Path + "SQL Advanced.one"])
CS348.resources.set("Entity Relationship Model 1", [CS348Path + "ER Model 1.one"])
CS348.resources.set("Entity Relationship Model 2", [CS348Path + "ER Model 2.one"])
CS348.resources.set("From Model to Diagram", [CS348Path + "Model to Diagram.one"])
CS348.resources.set("Schema Refinement", [CS348Path + "Schema refinement.one"])
CS348.resources.set("Transactions", [CS348Path + "Transactions.one"])
CS348.resources.set("Indexing", [CS348Path + "Indexing.one"])
CS348.resources.set("Query Processing", [CS348Path + "Query Processing.one"])
CS348.resources.set("Transaction Processing", [CS348Path + "Transaction Processing.one"])
CS348.resources.set("Analytics", [CS348Path + "Analytics.one"])
CS348.resources.set("Big Data", [CS348Path + "Big Data.one"])
CS348.resourceFormat = ['OneNote']

// MATH 135

// MATH 136

// MATH 137

// MATH 138

// MATH 235

// MATH 239
const MATH239Path = MathPath + "MATH239/"
const MATH239 =  new courseInstance ("MATH239", "Fall 2022")
MATH239.resources.set("Enumeration", [MATH239Path + "Enumeration.one"])
MATH239.resources.set("Graph Theory", [MATH239Path + "Graph Theory.one"])
MATH239.resourceFormat = ['OneNote']

var courses = {
    "CO250" : CO250,
    "CS348" : CS348,
    "MATH239": MATH239,
}
export default courses;