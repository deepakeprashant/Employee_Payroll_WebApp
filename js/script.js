const text = document.querySelector('#name');
const errortext = document.querySelector('.text-error');

text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        errortext.textContent = "";
    else
        errortext.textContent = "Name is incorrect Ex.Prashant";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input',function(){
    output.textContent = salary.value;
});