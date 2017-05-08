var myResources = [
    {
        name: "Web Developer Bootcamp",
        image: "https://udemy-images.udemy.com/course/750x422/625204_436a_2.jpg",
        type: "Course",
        author: "Colt Steele"
    },
    {
        name: "You Don't Know JS",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/e951f3b0-aea8-4bb2-9a14-0fb220ac5bc2.png._CB325458148_.png",
        type: "Book",
        author: "Kyle Simpson"
    },
    {
        name: "Git Essential Training",
        image: "http://websnacks.net/wp-content/uploads/2015/05/Git.png",
        type: "Course",
        platform: "Lynda",
        author: "Kevin Skoglund"
    },
    {
        name: "Learning Full-Stack JS Development: MERN",
        image: 'https://pbs.twimg.com/media/CX5MTGGWEAARQ0m.jpg',
        type: "Course",
        platform: "Lynda",
        author: 'Samer Buna'
    },
    {
        name: "Eloquent JavaScript",
        image: "http://eloquentjavascript.net/img/cover.png",
        type: "Book",
        author: "Marijn Haverbeke"
    },
    {
        name: 'JavaScript30',
        image:'http://www.globalnerdy.com/wordpress/wp-content/uploads/2016/12/javascript30.jpg',
        type: 'Tutorial',
        author: 'Wes Bos'
    }
    
];

function getResource(name, resources = myResources) {
    var result = resources.find((item) => item.name.toLowerCase() == name.toLowerCase()); 
    return result;  
}

/*This function returns the length of the filtered array because the requirements specify displaying the total # of items after delete*/

function deleteResource(name, resources = myResources) {

    var message = getResource(name) === undefined? name + " not found" : name + " removed";
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