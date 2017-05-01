
var expect = require('chai').expect;
var resource = require('../resources.js');

//testing the GetResource function
describe("If the resource is in the array, get the resource", () => {
it("returns the requested resource", () => {
    var result = resource.getResource("you don't know js");
    expect(result).to.deep.equal(
        {name: "You Don't Know JS",
        type: "Book",
        author: "Kyle Simpson"})
});
});

describe("If the resource is not found, return undefined", () => {
    it("returns undefined", () =>{
        var result = resource.getResource("test");
        expect(result).to.be.undefined; 
    });
});

//testing deleteResource function

describe("If the resource is in the array, remove it", () => {
    it("Returns success notification message and removes the item", () =>{
        var result = resource.deleteResource("Web Developer Bootcamp");
        expect(result).to.deep.equal(
            {message: "Web Developer Bootcamp removed",
             remaining: 2
        });
    });
});

describe("If the resource is not in the array, display not found", () => {
    it("Returns not found notification message and does not remove an item", () =>{
        var result = resource.deleteResource("JavaScript - The Good Parts");
        expect(result).to.deep.equal(
            {message: "JavaScript - The Good Parts not found",
             remaining: 2
        });
    });
});

//testing addResource function

describe("Add a resource", () =>{
    it('Adds an item to the array',()=>{
        let result = resource.addResource({name: "Eloquent JS", type: "book", author: "Marijn Haverbeke"});
        expect(result.length).to.equal(3);
        expect(result[2]).to.deep.equal({name: "Eloquent JS", type: "book", author: "Marijn Haverbeke"});
    });
});