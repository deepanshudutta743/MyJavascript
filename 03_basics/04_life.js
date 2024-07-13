// Immediately Invocked Function Expression(IIFE)

(function chai() // named IIFE
{
    console.log(`DB CONNECTED`);
})();

// which function will execute immediately
// Sometime polution of Globalscope create problem so we want to delete the polution of global score variable thats why
 
// (()=>{
//    console.log(`DB connected TWO`); 
// })();

((name)=>{ // unnamed IIFE
    console.log(`DB connected TWO`); 
 })('Deepanshu');