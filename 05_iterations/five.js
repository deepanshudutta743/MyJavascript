const programming = ['js','rb','python','java','cpp'];

// programming.forEach(function(item){
// console.log(item);
// })

// programming.forEach((val)=>{
//     console.log(val);
// })
// function printme(item)
// {
//   console.log(item);
// }
// programming.forEach(printme); // just give the function reference here

// programming.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[ // array of objects
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    }
]

myCoding.forEach((item)=>{
console.log(item.languageFileName+" "+item.languageName);

})


