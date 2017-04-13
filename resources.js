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
    var result = resources.find((item) => item.name.toLowerCase() == name.toLowerCase()); 
    if(!result) {
        return "Not found";
    }
    return result;  
}

/*This function returns the length of the filtered array because the requirements specify displaying the total # of items after delete*/

function deleteResource(name, resources = myResources) {

    var message = getResource(name) === "Not found"? name + " not found" : name + " removed";
    myResources = resources.filter((item) => item.name.toLowerCase() != name.toLowerCase());
    return {message:message, remaining: myResources.length};
}

function addResource(resource, resources = myResources) {
    resources.push(resource); 
    return resources;
}

function listResources(resources = myResources) {
    return resources;
}

//ES6 shorthand syntax that works if the right and the left side are equal. 
//(ex. getResource: getResource)
module.exports = {
    getResource,
    deleteResource,
    addResource,
    listResources
}