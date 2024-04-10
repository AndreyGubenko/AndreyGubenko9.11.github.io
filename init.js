
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('job').innerText = initPerson.job;
};

