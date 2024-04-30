const reloadButton = document.getElementById('reload'); //кнопк обновления списка команд
const listElement = document.getElementById('list');
const loginBut = document.getElementById('loginBut') //кнопка входа в аккаунт
teamStorage = window.localStorage;
class Team{ // класс команд, в котором есть конструктор класса, через который создаются команды
    constructor(email, capitan, password, members){
        this.teamEmail = email
        this.capitan = capitan
        this.password = password
        this.members = members
    }
    getLog(){ //метод, возвращающий почту команды
        return this.teamEmail
    }
    getPass(){
        return this.password //метод, возвращающий пароль команды
    }
}
Team.instanes = []// массив с экземплярами объектов

teamMembers = ["Vera Kostenko", "Andrey Hutornoy", "Nikita Eliseev"] //пример массива с участниками
const habsyTeam = new Team("hutornoyaa@gmail.com",  "Siderea", "Habsy2024", teamMembers ) // пример создания команды
const habsyTeam2 = new Team("hutornoyaa2@gmail.com",  "Siderea2", "Habsy20242", teamMembers ) // пример создания команды
Team.instanes.push(habsyTeam) //добавляем команду в масив
Team.instanes.push(habsyTeam2)
teamStorage.setItem("teams", JSON.stringify(Team.instanes)) //преобразуем команды в json и добавляем в локальное хранилище

let teamow = teamStorage.getItem("teams")
console.log(teamow)

let succesful = false
if (isCurrentLocation('http://localhost:63342/frontend/frontend/index.html') === true){
    console.log("first windows")
    loginBut.onclick = function() { //обработка клика по кнопке входа
        let email = document.getElementById('emailInput').value
        let password = document.getElementById('passInput').value// получаем введенное значение из логина и пароля
        if(isEmpty(email) === false && isEmpty(password) === false) { //если поля непустые

            for(const team in Team.instanes){ // перебор экземпляров класса Team (перебор команд)
                let emailTeam = Team.instanes[team].getLog()
                let passwordTeam = Team.instanes[team].getPass() //получение пароля и логина
                if(email === emailTeam && passwordTeam === password){ //сравнение логина и пароля введенного с экземпляром класса
                    window.location.href = 'index2.html'; //если да, переход дальше по страницам
                    return succesful = true
                }
            }
            if(succesful === true){ //если правильно ввели пароль
                alert("succesful")
            }
            else{
                alert("Неверный логин или пароль")
            }
        }
        else if(isEmpty(email) === true && isEmpty(password) === true ){
            alert("Введите логин и пароль")
        }
        else if(isEmpty(email) === true ){
            alert("Введите логин")
        }
        else{
            alert("Введите пароль")
        }
    }
}
else {
    console.log("not first window")
}

function isEmpty(str) {// функция проверки на пустую строку
    if (str === '') 
      return true      
    else return false
  }
function isCurrentLocation(url){
    let currentUrl = window.location.href;
    if(currentUrl === url){
        return true
    }
    return false
}



function render() {
    listElement.innerHTML = ''
    console.log("tape1")
    if(Team.instanes.length === 0){
        listElement.innerHTML = '<p>Нет элементов</p>'
        console.log("tape2 no elements")
    }
    for (let i = 0; i < Team.instanes.length; i++){
        console.log("tape3 gg")
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(Team.instanes[i], i))

    }

}
if (isCurrentLocation('http://localhost:63342/frontend/frontend/index2.html') === true){
    render()
    reloadButton.onclick = function () {
        if(listElement.value.length === 0){
            return
        }
        render()
        listElement.value = ''
    }
}

function getNoteTemplate(team, index){
    return  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class = "team">${team.teamEmail}</span>
        <span class = "team">${team.capitan}</span>
        <span class = "team">${team.members}</span>
      </li>`
}


