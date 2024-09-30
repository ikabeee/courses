//Property existence test and property enumeration
//If you try to read a non-existent property, the undefined value will be returned

if(contact.notes){ //if different then undefined. Reference error
    console.log(contact.notes); 

//In most cases, it won't matter to us whether a field does or doesn't exist, or simply has no value assigned to it
//Both case are handled in the same way, with a new value being assigned to the property (if the field doesn't exist, it will automatically be created)