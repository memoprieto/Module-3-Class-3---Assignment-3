function calculation(){
    let num1 = Number(prompt("Enter the first number "));
    let num2 = Number(prompt("Enter the last number"));
    
    document.getElementById("sum").innerHTML=`${num1} + ${num2} = ${sum(num1,num2)}`;

    document.getElementById("substraction").innerHTML=`${num1} - ${num2} = ${substraction(num1,num2)}`;

    document.getElementById("multiplication").innerHTML=`${num1} * ${num2} = ${multiplication(num1,num2)}`;

    document.getElementById("division").innerHTML=`${num1} / ${num2} = ${division(num1,num2)}`;
}
// Sum
function sum(a,b){
    return a+b;
}
// Sub
function substraction(a,b){
    return a-b;
}
// Multi operation
function multiplication(a,b){
    return a*b;
}
// Div operation
function division(a,b){
    return a/b;
}