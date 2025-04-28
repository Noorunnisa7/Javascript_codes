document.write("<h1>Array</h1>")

let students = ["Amna" , "Maryam" , "Raza" , "Ali" , "Hina" , "Kashaf" , "Basit"];
// document.write(students)
// document.write(students[0])
// document.write(students[2])

//Array Length 

let arrayLength = students.length;
document.write("Array length: "+ arrayLength)

for(let i = 0 ; i < arrayLength ; i++){
    document.write("<br>")
    document.write(students[i])
}




document.write("<h1>Nested Loop</h1>")

for(let i = 1; i <=10 ; i++){ // outer loop
    document.write("Outer: "+i+" ")
    for(let j = 1; j <= 3 ; j++){ // inner loop 
        document.write("Inner: "+j+ " ")
    }

    document.write("<br>")
}


document.write("<h1>Multidimensional Array</h1>")

let multiArray = [
    ["Amna","16","9" , 50 , 60 , 61], // 0
    ["Hina", "19","12",35 ,65 ,87 ], //1
    ["Raza", "12","6", 45 ,15 ,52 ] // 2
];

//Access The multidimensional array value 
document.write(multiArray[1][0])
document.write(multiArray[2][1])