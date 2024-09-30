//Dot notation vs bracket notation

//Multi-word keys
//We can create an object containing a property whose key consist of several words
let contact = {
    "first name": "Ronald"
};
//we don't need dot notation to refer a property because our key it's a string we need to call it with brackets notations just like an array
contact["first name"] = "Tim"; // --> We are refer to the property "first name"
console.log(contact["first name"]);

