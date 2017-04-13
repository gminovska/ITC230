var myResources = [
    {
        name: "Web Developer Bootcamp",
        type: "Course",
        author: "Colt Steele"
    },
    {
        name: "You Don't Know JS",
        type: "Book",
        author: "Kyle Simpson"
    },
    {
        name: "Git Essential Training",
        type: "Course",
        author: "Kevin Skoglund"
    }
];

function getResource(name, resources = myResources) {
    return resources.find((item) => item.name == name);    
}

module.exports = {

    getResource
}