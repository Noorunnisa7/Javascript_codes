let multiArray = [
    ["Amna","16","9" , 50 , 60 , 61], // 0
    ["Hina", "19","12",35 ,65 ,87 ], //1
    ["Raza", "12","6", 45 ,15 ] // 2
];


console.log( multiArray.length)

for(let x = 0; x < multiArray.length ; x++){
    // document.write(multiArray[x]);
    
    for(let j = 0; j < multiArray[x].length; j++ ){
        document.write(multiArray[x][j]+" ")
    }
    document.write("<br>")
}


let fruits = ["Apple", 'Banana', "Cherry" , "Mango", "Strawberry", "pineapple"];

// fruits.forEach((fruit)=>{
//     document.write(fruit+" &nbsp;")
// })


for(let y of fruits){
    document.write(y)
}



let studentRecords = [
    ["Amna", 50 , 60 , 61], // 0
    ["Hina",35 ,65 ,87 ], //1
    ["Raza", 45 ,15 ] // 2
];


document.write("<br>")
document.write("<br>")

for(let students of studentRecords){
    for(let data of students){
        document.write(data+" ")
     
    }
    document.write("Total Marks: ")  
    document.write("<br>")
}