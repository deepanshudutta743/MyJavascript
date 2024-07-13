// generate a random colour
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        
      //Math.floor(Math.random)
      colour+=hex[Math.floor(Math.random()*16)];

    }
    return colour;
};
let interval;

const ChangingColor=function(){
  
  document.body.style.backgroundColor=randomColor();
 };
const startChangingColor=function(){
  if(!interval)
    {
      interval=setInterval(ChangingColor,1000)
  
    }
}


const stopChangingColor=function(){
   clearInterval(interval);
   interval=null; 
};
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);