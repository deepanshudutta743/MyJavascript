// for

// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }

// for(let i =0;i<=10 ,i++)
// {
//     const  element =i;
//     if(element == 5)
//     {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// make table
for(let i=1;i<=10;i++)
{
    console.log(`Table for :${i}`);
    for(let j=1;j<=10;j++)
    {
       console.log(i + "*" + j+"="+ i*j);
    }
}
let myArray = ["flash","batman","superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and contunue

for (let index = 0; index < 20; index++) {
    if(index==5)
    {
        console.log('Detected 5');
    }
    else if(index==6)
    {
        continue;
    }
    else{
        console.log(index);
    }

    
}