// eslint practice file for ITC 230
var names = ["sara","joe","dave","ann"];
var newArray = names.map( function(item) {  
	return item.toUpperCase();   
}); 

//assign the values from newArray to the names (solves unused variable eslint error)
names = newArray;