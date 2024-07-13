const buttons = document.querySelectorAll(".button");
//console.log(buttons); // here we will get tghe nodelist

const body = document.querySelector("body");

buttons.forEach((btn) => {

    btn.addEventListener('click', function (e) {

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }


    })

});