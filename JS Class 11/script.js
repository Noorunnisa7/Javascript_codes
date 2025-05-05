let array = [];
// add item in empty array 
array[0] = "Ali";
array[1] = "Zara";

document.write(array)

array[2] = "Ahmed";
document.write("<br>")
document.write(array)

let fruits = ["Apple" , "Banana", "orange"];

document.write("<br>")
document.write(fruits)

fruits[3] = "Strawberry"

document.write("<br>")
document.write(fruits)


//update an array item
fruits[1] = "Mango"
document.write("<br>")
document.write(fruits)
// access array from indexed number
document.write("<br>")

document.write(fruits.at(2))
// Join Method 
document.write("<br>")

document.write(fruits.join("&nbsp;"))
document.write("<br>")
// POP and Push Method 
let cars = ["BMW", "CIVIC" , "Mehran" , "AUDI"];
cars.pop()
document.write(cars.join(" "))
document.write("<br>")
cars.push("Corolla")
cars.push(" Aulto ")
document.write(cars.join(" * "))

// shift and unshift 
cars.shift();
document.write("<br>")
document.write(cars.join(" "))

cars.unshift("Audi")

document.write("<br>")
document.write(cars.join(" "))
document.write("<br>")

//Concat

let girls = ["SANA" , "Zara" , "Hira"]
let boys = ["Ali" , "Hyder"]
let kids = ["Ahmed" , "Zain" , "erum"]
// let newarray = girls.concat(boys)
let newarray = girls.concat(boys,kids)


document.write(newarray.join(" "))
