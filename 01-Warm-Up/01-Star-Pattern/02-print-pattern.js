
// question 1, now we have to print this pattern for n = 4;
//   *
//  **
// ***
//****

// this is my logic

let  n = 4;

for(let i =  0; i < n; i++){
    let row = "";
    for(let j = 0; j < n; j++){
      if((j + 1 + i) >= n){
        row = row + "*";
      }else{
        row = row + " ";
      }
    }
    console.log(row);
}

// now this is the logic of akshay saini

for(let i = 0; i < n; i++){
    let row = "";
    // this loop adding empty spaces
    for(let j = 0; j < n - (i + 1); j++){
        row = row + " ";
    }
    // this loop adding stars
    for(let k = 0; k < i + 1; k++){
        row = row + "*";
    }
    console.log(row);
}

// question 2, now we have to print this pattern for n = 4;
// 1
// 10
// 101
// 1010

// this is my logic

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j <= i; j++){
        if(j % 2 === 0){
            row = row + 1;
        }else{
            row = row + 0;
        }
    }
    console.log(row);
}

// this is akshay saini logic

for(let i = 0; i < n; i++){
    let row = "";
    let toggle = 1;
    for(let j = 0; j <= i; j++){
       row = row + toggle;
       if(toggle === 1){
        toggle = 0;
       }else{
        toggle = 1;
       }
    }
    console.log(row);
}

// question 4, now we have to print this pattern for n = 4;
// 1
// 01
// 010
// 1010

// this is my logic

let count = 0;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j <= i; j++){
       if(count % 2 === 0){
        row = row + 1;
       }else{
        row = row + 0;
       }
       count++;
    }
    console.log(row);
}

// this is akshay saini logic

 let toggler = 1;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j <= i; j++){
       row = row + toggler;
       if(toggler === 1){
        toggler = 0;
       }else{
        toggler = 1;
       }
    }
    console.log(row);
}