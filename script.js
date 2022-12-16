function Clear(){
    localStorage.clear();
    document.getElementById('result').innerHTML = "all cleared";
}

class myClass{
    constructor(name, age, password, gender){
        this.name = name;
        this.age = age;
        this.password = password;
        this.gender = gender;
    }
}

function logMyInfo(){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    const USERNAME = firstname + ' ' + lastname;
    const PASSWORD = document.getElementById('password').value;
    const AGE = document.getElementById('age').value;
    const GENDER = document.getElementById('gender').value;
    clearInput();
    let Class2 = new myClass(USERNAME, AGE, PASSWORD, GENDER);
    localStorage.setItem(USERNAME, JSON.stringify(Class2));
}

function clearInput(){
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('password').value = '';
}