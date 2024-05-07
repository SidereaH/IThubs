const reloadButton = document.getElementById('reload') //кнопк обновления списка команд
const listElement = document.getElementById('list')
const authorizedName = document.getElementById('authorizedName')
const loginBut = document.getElementById('loginBut') //кнопка входа в аккаунт
teamStorage = window.localStorage
console.log(teamStorage.getItem('succesfulSign'))

if (isCurrentLocation("http://127.0.0.1:5500/index.html") === true && teamStorage.getItem('succesfulSign') === "true") {
    window.location.href = 'http://127.0.0.1:5500/index2.html';
} 
else if (isCurrentLocation("http://127.0.0.1:5500/index2.html") === true && (teamStorage.getItem('succesfulSign') === "false" || teamStorage.getItem('succesfulSign') === null)) {
    window.location.href = 'http://127.0.0.1:5500/index.html';
} 
class Team{ // класс команд, в котором есть конструктор класса, через который создаются команды
    constructor(name ,email, capitan, password, members){
        this.teamName = name
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

teamMembers = ["Vera Kostenko", "Andrey Hutornoy"] //пример массива с участниками
const habsyTeam = new Team("cringe", "hutornoyaa@gmail.com",  "Siderea", "Habsy2024", teamMembers ) // пример создания команды
const habsyTeam2 = new Team("cringe","hutornoyaa2@gmail.com",  "Siderea2", "Habsy20242", teamMembers ) // пример создания команды
Team.instanes.push(habsyTeam) //добавляем команду в масив
Team.instanes.push(habsyTeam2)
//teamStorage.setItem("teamSigned in", JSON.stringify(Team.instanes)) //преобразуем команды в json и добавляем в локальное хранилище

//let teamow = teamStorage.getItem("teams")
//console.log(teamow)

let succesful = false
if (isCurrentLocation('http://127.0.0.1:5500/index.html') === true){
    console.log("first windows")
    loginBut.onclick = function() { //обработка клика по кнопке входа
        let email = document.getElementById('emailInput').value
        let password = document.getElementById('passInput').value// получаем введенное значение из логина и пароля
        if(isEmpty(email) === false && isEmpty(password) === false) { //если поля непустые

            for(const team in Team.instanes){ // перебор экземпляров класса Team (перебор команд)
                let emailTeam = Team.instanes[team].getLog()
                let passwordTeam = Team.instanes[team].getPass() //получение пароля и логина
                if(email === emailTeam && passwordTeam === password){ //сравнение логина и пароля введенного с экземпляром
                    teamStorage.setItem("authorizedTeam", Team.instanes[team].teamName)
                    teamStorage.setItem("succesfulSign", "true")
                    window.location.href = 'index2.html'; //если да, переход дальше по страницам
                    succesful = true
                }
            }
            if(succesful === true){ //если правильно ввели пароль

                alert("succesful")
            }
            else{
                alert("Неверный логин или пароль")
                teamStorage.setItem("succesfulSign", "false")
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
    return str === '';
}
function isCurrentLocation(url){
    let currentUrl = window.location.href;
    return currentUrl === url;
}
function render() {
    console.log( teamStorage.getItem("succesfulSign"), teamStorage.getItem("authorizedTeam"))
    listElement.innerHTML = ''

    if(Team.instanes.length === 0){
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < Team.instanes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(Team.instanes[i], i))
    }

}
let isStoppedAuthoriz = false
if (isCurrentLocation('http://127.0.0.1:5500/index2.html') === true ){
    if(teamStorage.getItem('succesfulSign') === "true"){
        render()
        renderTeamName()
    }
    else{
        while (isStoppedAuthoriz === false  ){
            window.location.href = 'http://127.0.0.1:5500/index.html'
            isStoppedAuthoriz = true
        }
    }


}
else if(teamStorage.getItem('succesfulSign') === false){
    console.log(teamStorage.getItem('succesfulSign'))
    window.location.href = 'http://127.0.0.1:5500/index2.html'
}


function getNoteTemplate(team, index){
    return  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class = "team ">${team.teamEmail}</span>
        <span class = "team">${team.capitan}</span>
        <span class = "team">${team.members}</span>
      </li>`
}
function renderTeamName(){
    authorizedName.innerHTML = ''

    if(teamStorage.getItem("authorizedTeam") === null){
        authorizedName.innerHTML = '<p>Вы неавторизовались</p>'
    }
    
    authorizedName.insertAdjacentHTML('beforeend', getTeamNameTemplate())

    
}

function getTeamNameTemplate(){
    return `
    <p>
    ${teamStorage.getItem("authorizedTeam")}
    </p>
    `
}

