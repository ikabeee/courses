//Literals

//1.2.1 Basic way to create objects
//Create empty object without properties
let contact = {};
//We can modify an object without by among other things, adding new properties
contact.tel = "207-662-5412"; // --> Adding a new property to the object in this case its "tel"
console.log(contact);
console.log(contact.tel);

//Setting properties to an object
let contact = {
    tel: "207-662-5412", // --> Between each property we need to put a colon 
    email: "RonaldSMurphy@freepost.org",
    "first name": "Carlos" //-> . When creating an object, the key can be enclosed in quotation marks, although this is not necessary (JavaScript automatically interprets it as a string). However, this can be useful when you want to create a key consisting of several words

}

