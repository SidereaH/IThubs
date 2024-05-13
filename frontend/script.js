const reloadButton = document.getElementById('reload') //кнопк обновления списка команд
const listElement = document.getElementById('list')
const authorizedName = document.getElementById('authorizedName')
const loginBut = document.getElementById('loginBut') //кнопка входа в аккаунт
teamStorage = window.localStorage
console.log(teamStorage.getItem('succesfulSign'))

if (isCurrentLocation("http://127.0.0.1:5500/index.html") === true && teamStorage.getItem('succesfulSign') === 'true') { 
    //если открыта начальная страница ( входа ) и пользователь авторизован - то переброс на вторую страницу
    window.location.href = 'http://127.0.0.1:5500/index2.html';
} 
else if (isCurrentLocation("http://127.0.0.1:5500/index2.html") === true && (teamStorage.getItem('succesfulSign') === "false" || teamStorage.getItem('succesfulSign') === null)) {
    //если вторая (где юзеры) и неавторизован - переброс на авторизацию
    window.location.href = 'index.html';
} 
class Team{ // класс команд, в котором есть конструктор класса, через который создаются команды
    constructor(name ,email, capitan, password, members){ //конструктор, с помощью которого создаются экземпляры класса
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
const habsyTeam = new Team("cringe", "hutornoyaa@gmail.com",  "Siderea", "Habsy2024", teamMembers ) // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
const habsyTeam2 = new Team("cringe","hutornoyaa2@gmail.com",  "Siderea2", "Habsy20242", teamMembers )
Team.instanes.push(habsyTeam) //добавляем команду в масив, хранящий экземпляры класса
Team.instanes.push(habsyTeam2)


//teamStorage.setItem("teamSigned in", JSON.stringify(Team.instanes)) //преобразуем команды в json и добавляем в локальное хранилище
//let teamow = teamStorage.getItem("teams")
//console.log(teamow)

let succesful = false//переменная успешной авторизации
if (isCurrentLocation('http://127.0.0.1:5500/index.html') === true){//проверка, если текущая страница - страница авторизации
    console.log("first windows")
    loginBut.onclick = function() { //обработка клика по кнопке входа
        let email = document.getElementById('emailInput').value //получаем, что ввел пользователь в поле логина
        let password = document.getElementById('passInput').value// получаем, что ввел пользователь в поле пароля
        if(isEmpty(email) === false && isEmpty(password) === false) { //если поля непустые

            for(const team in Team.instanes){ // перебор экземпляров класса Team (перебор команд)
                let emailTeam = Team.instanes[team].getLog()//получение логина команды (сохраненного)
                let passwordTeam = Team.instanes[team].getPass() //получение пароля команды (сохраненного)
                if(email === emailTeam && passwordTeam === password){ //сравнение введенного логина и пароля  с полученными из экземпляра класса
                    teamStorage.setItem("authorizedTeam", Team.instanes[team].teamName) //если все совпало, то добавляем этот экземпляр, с которым сошелся логин и пароль, в локальное хранилище, тем самым сохраняя, кто авторизовался
                    teamStorage.setItem("succesfulSign", "true")// сохраняем, авторизован ли человек
                    window.location.href = 'index2.html'; //если да, переход дальше по страницам
                    succesful = true
                }
            }
            /*if(succesful === true){ //если правильно ввели пароль

                alert("succesful")
            }
            else{
                alert("Неверный логин или пароль")
                teamStorage.setItem("succesfulSign", "false")
            }*/
        }
        else if(isEmpty(email) === true && isEmpty(password) === true ){ //валидация полей 
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


function isEmpty(str) {// функция проверки на пустую строку (может вызваться где угодно, с любой строкой, возвращает true false)
    return str === '';
}

function isCurrentLocation(url){ //функция проверяющая совпадает ли вставленный url с текущим
    let currentUrl = window.location.href;
    return currentUrl === url;
}

function render() { // рендер всех команд
    console.log( teamStorage.getItem("succesfulSign"), teamStorage.getItem("authorizedTeam"))// консольная проверка какие команды есть
    listElement.innerHTML = ''//делаем пустое поле в элементе, в котором будем выводить (рендерить) команды

    if(Team.instanes.length === 0){// если команд нет -
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < Team.instanes.length; i++){//перебор и вывод всех команд
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(Team.instanes[i], i)) //.innerAdjacentHTML (из курса джавы, работа с заметками)
        //передаем где (beforeend) и что вставлять - getNoteTemplate;
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


function getNoteTemplate(team, index){ //функция, использующаяся в render; Передается команда(team), из которой берутся хначения экземпляра класса Team
    return  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class = "team ">${team.teamEmail}</span>
        <span class = "team">${team.capitan}</span>
        <span class = "team">${team.members}</span>
      </li>`
}

function renderTeamName(){ //функция рендера названия команды, как в соц сетях показывает кто сейчас авторизован; работает по аналогии с рендером выше
    authorizedName.innerHTML = ''//authorizedName - элемент в html в который будет вставляться информация

    if(teamStorage.getItem("authorizedTeam") === null){
        authorizedName.innerHTML = '<p>Вы неавторизовались</p>'
    }
    
    authorizedName.insertAdjacentHTML('beforeend', getTeamNameTemplate())

    
}

function getTeamNameTemplate(){//шаблон вывода авторизованной сейчас команды ; Возвращается  html, который удет втавляться в рендер
    return `
    <p>
    ${  
        teamStorage.getItem("authorizedTeam")//берем из локального хранилища авторизованну команду
    }
    
    </p>
    `
}
