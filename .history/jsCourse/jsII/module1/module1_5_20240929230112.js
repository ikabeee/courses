//Property existence test and property enumeration
//If you try to read a non-existent property, the undefined value will be returned

if(contact.notes){ //if different then undefined
    console.log(contact.notes); // undefined
}

//In most cases, it won't matter to us whether a field does or 