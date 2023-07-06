// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if(city && temperature) console.log(`it ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'penguin'
//     }
// }

// const {name: publisherName = 'Self Published'} = book.publisher;
// console.log(publisherName)

//array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennyslvania', '19147'];

const [street, city, state, zip] = address;