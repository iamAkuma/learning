// const age = 20;
// const name = 'Saral';
// const hello =`My age is ${age} and My name is ${name}`;
// console.log(hello);

// const s = ['aKuma', 'Saral', 'is', 'too', 'fkn', 'OP'];

// console.log(Array.isArray(s))
// s.unshift('hehe')
// s.pop();
// console.log(s.indexOf('fkn'))
// console.log(s);

// const person = {
//     firstName: 'Saral', 
//     lastName: 'aKuma',
//     age: 21,
//     hobbies: ['sleeping', 'music'],
//     address: {
//         city: 'Bhaktapur'
//     }

// }
// const { firstName, lastName} = person;
// console.log(firstName + lastName);

// person.email = 'akuma@gmail.com'
// console.log(person.email)


// const todos = [{

//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
// },
// {
//     id: 2,
//     text: 'Shit',
//     isCompleted: false
// },

// ]

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


/*For
Loop*/

// for(let todo of todos){

//     console.log(todo.isCompleted);
// }

//ForEach, map, filter
// const todoText = todos.filter(function(todo){

// return todo.isCompleted=== true;
// })
// console.log(todoText)


// const x = 0;

// if(x===10){
//     console.log('x is 10')
// }else if(x>10){
//     console.log('x is greater than 10')

// }
// else{
//     console.log('x is less than 10')
// }

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// document.write(addNums(5,5));

//Constructor functions
function Person(fName, lName, dob) 
{
    this.fName = fName;
    this.lName = lName;
    this.dob = new Date(dob);
}

//Instantiate object
const person1 = new Person('akuma', 'akuma', '1-1-2000');
console.log(person1.dob.getFullYear());

