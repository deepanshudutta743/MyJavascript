const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI)

//console.log(descriptor)

const chai={

    name:'ginger chai',
    price:250,
    isAvaliable:true,
    orderChai:function()
    {
        console.log(`chai nahi bani hei`);
    }
}
 console.log(Object.getOwnPropertyDescriptor(chai,"name"));
 // u can change this properties
 Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
    
 })
//  console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for(let [key,value] of Object.entries(chai))
    {
        if(typeof value!='function')
        console.log(`${key}: ${value}`);
    }