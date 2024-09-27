//Q1
var trainTicket = {
    from: 'Tulum',
    to: 'Merida',
    price: 100
};

console.log(`Ticket train from: ${trainTicket.from} to ${trainTicket.to} Price: $ ${trainTicket.price} MXN`
); // -> Ticket train from: Tulum to Merida Price: $ 100 MXN

//Q2
var person ={};
person.name='Carlos';
person.surname='Gonzalez';

console.log(`Welcome ${person.name} ${person.surname}!`) //-> Welcome Carlos Gonzalez!

//Q3

var books=[
    {
        name: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        numberPages: 460
    },
    
    {
        name: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        numberPages: 254
    },
    
    {
        name: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        numberPages: 352
    },

];

//Q4

var newBook={
    name: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
    numberPages: 254
}

books.push(newBook);
for (let i=0; i<books.length; i++){
    console.log(books[i].name);
}

//Q5
console.log(books.slice(-2));

//Q6
console.log(books.shift());
for (let i=0; i<books.length; i++){
    console.log(books[i].name);
}

//Q7
var sum=0;
for (let i=0; i<books.length; i++){
    sum+=books[i].numberPages
}

console.log(sum); //-> 860

//Lab data types
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

var lenghtContacts = contacts.length
var firstContact=contacts.shift();
var lastContact=contacts.pop();

console.log(firstContact + lastContact);
