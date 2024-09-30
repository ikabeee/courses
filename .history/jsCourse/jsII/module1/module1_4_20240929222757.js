//Dot notation vs bracket notation

//Multi-word keys
//We can create an object containing a property whose key consist of several words
let contact = {
    "first name": "Ronald"
};
contact["first name"] = "Tim";
console.log(contact["first name"])