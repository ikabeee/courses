//Dot notation vs bracket notation

//Multi-word keys
//We can create an object containing a property whose key consist of several words
let contact = {
    "first name": "Ronald"
};
//we don't need dot notation to refer a property because our key it's a string we need to call it with brackets notations just like an array
contact["first name"] = "Tim"; // --> We refer to the property "first name" with brackets 
console.log(contact["first name"]);

//Computed keys
//It may happen that property key we want to refer to will calculated during the operation of the program, on the fly
// We use bracket notation to solve this problem
let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contact[key]); //We use key 
}
