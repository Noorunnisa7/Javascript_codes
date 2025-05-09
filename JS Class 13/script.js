
function sayHello(){
    return "Hello! Students"
}

// document.write(sayHello());

function sayGoodBye(){
    // let output = sayHello()+"<br>Bye Students";
    let output = "Call back";
    return output
}

// document.write(sayGoodBye());

function display(){
    return sayHello()+sayGoodBye();
}
document.write(display())

document.write("<br>")



// parameter callback


// function myDisplay(sum){
//     let result = "Sum of two numbers: "+sum;
//     return result;
// }


// function CallBackFun(num1 , num2 , mycallBack){
//     let sum = num1 + num2;
//     return mycallBack(sum)
// }

// document.write(CallBackFun(20,62,myDisplay));



function fun1(){
    return "Function 1";
}
function fun2(){
    return "function 2"
}

function mycallBackFunction(callFun){
    return callFun();
}

document.write(mycallBackFunction(fun1))
document.write(mycallBackFunction(fun2))
document.write(mycallBackFunction(sayHello))

function DataDisplay(){
    document.write("<h1>My Custom Function! </h1>")
}