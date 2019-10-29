let age = 25;
let name = 'ali';
let acc = 'student';

const print = name + "as" + acc + "as" + age + "as"; 

//template literal
const print2 = `${name} is a ${acc} and he is ${age} years old`;

console.log(print);
console.log(print2);

//Destructuring
let nameArr = ['ali','najeeb','saad'];
let name1 = nameArr[0];
let name2 = nameArr[1];
let name3 = nameArr[2];

let [name4,name5,name6] = nameArr;

console.log(name4,name5,name6);
console.log(name1,name2,name3);


let personOjb = {
    name7 : "ali",
    city1 : "karachi",
    country1 : "Pak"
};
// 31,32,33 is same as 35
let personName = personOjb.name;
let city = personOjb.city1;
let country = personOjb.country1;

let {name8,city1,country1} = personOjb;
console.log(name8);
console.log(name8,city1,country1);
