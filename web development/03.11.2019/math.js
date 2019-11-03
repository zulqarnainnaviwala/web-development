exports.add = (num1,num2) =>{
    return num2+num1;
}


exports.sub = (num1,num2,callBack)=>{
    callBack(num1 - num2);
}