interface course {
    title: string;
    resources: Map<string, Array<string>>;
    resourceFormat: Array<string>; // maybe should be Array<'OneNote' | 'PDF'>
    semesterTaken: string;
}

// MATH 135

// MATH 136

// MATH 137

// MATH 138

// MATH 235

// MATH 239
const MATH239 : course = {
    title: "MATH239",
    
    // resources map: name of course unit + array of note files (in different formats) for that unit
    resources: new Map<string, Array<string>>(),

    // resourceFormat: names of file formats, in order, to be displayed on course page
    resourceFormat: [],
    semesterTaken: "Fall 2022"
}
MATH239.resources.set("Enumeration", ["/CourseNotes/MATH/MATH239/Enumeration.one"])
MATH239.resources.set("Graph Theory", ["/CourseNotes/MATH/MATH239/Graph Theory.one"])
MATH239.resourceFormat = ['OneNote']

var courses = {
    "MATH239": MATH239,
}
export default courses;