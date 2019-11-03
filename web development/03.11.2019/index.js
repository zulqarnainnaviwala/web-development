//  import {add} from "./math";

const math  = require('./math');

console.log('--before addition--');
console.log(math.add(2,1));
console.log('--after addition--');


console.log('--before subtraction--');
math.subset(2,3,(result)=>{
    console.log();
})
console.log('--after subtraction--');