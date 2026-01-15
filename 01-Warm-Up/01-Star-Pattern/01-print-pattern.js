// this is square pattern question 

// question print square

let n = 4;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < n; j++){
        row = row + "*";
    }
    console.log(row);
}

// here i is responsible for rows and j is responsible for columns

// question 2, print right this pattern for n = 4
// *
// * *
// * * *
// * * * *

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < i + 1; j++){ // we can use both j <= i or j < i + 1 both are same
       row = row + "*";
    }
    console.log(row);
}

// explanation in this above our j loop run 1 time, then 2 time, then 3 time, ....
// so for that we have to use i + 1; our problem solve;
// for number of column target j loop and for number of rows target i loop

// question 3, now we have to print this pattern for n = 4;
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4

for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row = row + (j + 1);
    }
    console.log(row);
}

// question 4, now we have to print this pattern for n = 4;
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j <= i; j++){
        row = row + (i + 1);
    }
    console.log(row);
}

// question 6, now we have to print this pattern for n = 4;
// 1 2 3 4
// 1 2 3
// 1 2
// 1


let count = 1;
for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < n - i; j++){
        row = row + (j + 1);
    }
    console.log(row);
} 

// above question explanation first time our j loop run 4 time then 3 time then 2 time then 1 time
// that why we use n - i logic
