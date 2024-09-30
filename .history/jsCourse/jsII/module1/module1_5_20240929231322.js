//Property existence test and property enumeration
//If you try to read a non-existent property, the undefined value will be returned
let contact = {};
if(contact.notes){ //if different then undefined. 
    console.log(contact.notes); 
}
    
//In most cases, it won't matter to us whether a field does or doesn't exist, or simply has no value assigned to it
//Both case are handled in the same way, with a new value being assigned to the property (if the field doesn't exist, it will automatically be created)
if(!contact.notes) { // if undefined (check !)
    contact.notes = "something really important";
    console.log(contact.notes);
}

delete contact.notes;

//Good practice! to test if a given object exist before trying to read it.
console.log(contact.notes); // -> undefined

//If we try to refer to a non-existent field, which seems to contain the nested work and private fields, the consequences will be sightly more serious
console.log(contact.email.private); // exception!

//JS engine will try to find the private field in the object, which is... undefined. This will end up throwing out an exception, which if not handled with the try...catch, will terminate our program

//Ways to protect our program
