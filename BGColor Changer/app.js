

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

for (button of buttons){
    // to automatically set the background of div's to their id's
    button.style.backgroundColor = button.id;
    
    button.addEventListener("click", (call)=>{
        body.style.backgroundColor = call.target.id;
    });
};
