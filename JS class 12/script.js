

function fun(){
    // result
    // alert("Custom Function")
    document.write("Hello Javascipt functions")
}

// function call 
fun()
fun()
fun()

// parameter function 
function fun2(para1 , para2){
    document.write("<h2>Parameter function</h2>")
    document.write(para1+ para2);
}

fun2(10,60);

function stdName(name){
    document.write("<br>Student Name: "+ name)
}

stdName("Kashaf")
stdName("Unzeela")

function dw(a){
    document.write(a);
}


let num1 = 20;
let num2 = 90;
dw(num1+num2)



function rFun(a,b,c){
    return a*b*c;
}

dw("<p>"+rFun(10,30,50)+"</p>")