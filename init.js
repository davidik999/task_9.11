const button = document.getElementById("btn_accidentally");
const button2 = document.getElementById("btn_clearing");

window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('professionOutput').innerText = initPerson.profession;

    button.addEventListener("click", (event) => {
        location.reload()
    })  

    button2.addEventListener("click", (event) => {
        document.getElementById('firstNameOutput').innerText = "";
        document.getElementById('surnameOutput').innerText = "";
        document.getElementById('patronymicOutput').innerText = "";
        document.getElementById('genderOutput').innerText = "";
        document.getElementById('birthYearOutput').innerText = "";
        document.getElementById('professionOutput').innerText = "";
    })  
};


