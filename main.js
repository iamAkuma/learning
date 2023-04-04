// // const age = 20;
// // const name = 'Saral';
// // const hello =`My age is ${age} and My name is ${name}`;
// // console.log(hello);

// // const s = ['aKuma', 'Saral', 'is', 'too', 'fkn', 'OP'];

// // console.log(Array.isArray(s))
// // s.unshift('hehe')
// // s.pop();
// // console.log(s.indexOf('fkn'))
// // console.log(s);

// // const person = {
// //     firstName: 'Saral', 
// //     lastName: 'aKuma',
// //     age: 21,
// //     hobbies: ['sleeping', 'music'],
// //     address: {
// //         city: 'Bhaktapur'
// //     }

// // }
// // const { firstName, lastName} = person;
// // console.log(firstName + lastName);

// // person.email = 'akuma@gmail.com'
// // console.log(person.email)


// // const todos = [{

// //     id: 1,
// //     text: 'Take out trash',
// //     isCompleted: true
// // },
// // {
// //     id: 2,
// //     text: 'Shit',
// //     isCompleted: false
// // },

// // ]

// // const todoJSON = JSON.stringify(todos);
// // console.log(todoJSON);


// /*For
// Loop*/

// // for(let todo of todos){

// //     console.log(todo.isCompleted);
// // }

// //ForEach, map, filter
// // const todoText = todos.filter(function(todo){

// // return todo.isCompleted=== true;
// // })
// // console.log(todoText)


// // const x = 0;

// // if(x===10){
// //     console.log('x is 10')
// // }else if(x>10){
// //     console.log('x is greater than 10')

// // }
// // else{
// //     console.log('x is less than 10')
// // }

// // const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// // document.write(addNums(5,5));

// // //Constructor functions
// // function Person(fName, lName, dob) 
// // {
// //     this.fName = fName;
// //     this.lName = lName;
// //     this.dob = new Date(dob);
// // }

// //Class
// class Person{
//     constructor(fName, lName, dob){
//         this.fName = fName;
//         this.lName = lName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.fName} ${this.lName}`;
//     }
// }

// //Instantiate object
// const person1 = new Person('akuma', 'Saral', '1-1-2000');
// console.log(person1.getFullName());
// console.log(person1)



// //Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('container'));

// //Multiple Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));

const ul = document.querySelector('.items');
// ul.remove();

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'aKuma';
// ul.lastElementChild.innerHTML = '<h1> YOO </h1>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'blue';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e) => {
//     // e.preventDefault();
//     // console.log(e.target.className)
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('#msg')
const userList = document.querySelector('#users')


myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    // console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); // milena kasari thavayena
        msg.innerHTML = 'Please enter all fields';
        setTimeout(()=> msg.remove(), 3000)
        
    }
        else {
            console.log( "Success");
            const li = document.createElement( 'li');
            li.appendChild(document.createTextNode( `${nameInput.value} : ${emailInput.value}`));

            userList.appendChild(li)

            //Clear fields
            nameInput.value = '';
            emailInput.value = '';
        }
    }
