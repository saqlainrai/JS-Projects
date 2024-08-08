
let form = document.querySelector("form");
let btnDiv = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    
    let resultHTML;
    if (height === '' || height < 0 || isNaN(height)) {
        resultHTML = `Please give a valid height...`;
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        resultHTML = `Please give a valid weight...`;
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        // resultHTML = `<span>${bmi}</span>`;
        resultHTML = `Your BMI is: ${bmi}`;
    }

    if (form.childElementCount === 3){
        let result = document.createElement('p');
        result.style.marginBottom = "0px";
        result.innerHTML = resultHTML;
        btnDiv.insertAdjacentElement("beforebegin", result);
    }
    else{
        btnDiv.previousElementSibling.innerHTML = resultHTML;
    }
});