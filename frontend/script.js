const reloadButton = document.getElementById('reload') //кнопк обновления списка команд
const listElement = document.getElementById('list')
const authorizedName = document.getElementById('authorizedName')
const loginBut = document.getElementById('loginBut') //кнопка входа в аккаунт
teamStorage = window.localStorage
console.log(teamStorage.getItem('succesfulSign'))
const searchInput = document.getElementById('search')
const searchMenu = document.getElementById('search_menu')
for (let i = 0; i = 0; i++) {
    if (isCurrentLocation("http://127.0.0.1:5500/index.html") === true && teamStorage.getItem('succesfulSign') === 'true') {
        //если открыта начальная страница ( входа ) и пользователь авторизован - то переброс на вторую страницу
        window.location.href = 'http://127.0.0.1:5500/index2.html';

    }
    // else if (isCurrentLocation("http://127.0.0.1:5500/index2.html") === true && (teamStorage.getItem('succesfulSign') === "false" || teamStorage.getItem('succesfulSign') === null)) {
    // //если вторая (где юзеры) и неавторизован - переброс на авторизацию
    //     window.location.href = 'index.html';
    // } 
}

class Team { // класс команд, в котором есть конструктор класса, через который создаются команды
    constructor(id ,name, email, capitan, password, members, description, banner, link) {
        this.id = id //конструктор, с помощью которого создаются экземпляры класса
        this.teamName = name
        this.teamEmail = email
        this.capitan = capitan
        this.password = password
        this.members = members
        this.description = description
        this.banner = banner
        this.link = link
    }

    getLog() { //метод, возвращающий почту команды
        return this.teamEmail
    }
    getPass() {
        return this.password //метод, возвращающий пароль команды
    }
}

Team.instanes = []// массив с экземплярами объектов

teamMembers = ["Vera Kostenko", "Andrey Hutornoy"] //пример массива с участниками
const habsyTeam = new Team("0","TeamSpirit", "hutornoyaa@gmail.com", "Siderea", "Habsy2024", teamMembers, "best of the best", "/img/banners/ithub.png", "index4.html") // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
const habsyTeam2 = new Team("1","Gladiators", "hutornoyaa2@gmail.com", "Siderea2", "Habsy20242", teamMembers, "can do everything", "/img/banners/ithub.png", "index3.html")
const habsyTeam3 = new Team("2","TeamSpirit", "hutornoyaa@gmail.com", "Siderea", "Habsy2024", teamMembers, "best of the best", "/img/banners/ithub.png", "index4.html") // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
const habsyTeam4 = new Team("3","Gladiators", "hutornoyaa2@gmail.com", "Siderea2", "Habsy20242", teamMembers, "can do everything", "/img/banners/ithub.png", "index3.html")
const habsyTeam5 = new Team("4","TeamSpirit", "hutornoyaa@gmail.com", "Siderea", "Habsy2024", teamMembers, "best of the best", "/img/banners/ithub.png", "index4.html") // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
const habsyTeam6 = new Team("5","Gladiators", "hutornoyaa2@gmail.com", "Siderea2", "Habsy20242", teamMembers, "can do everything", "/img/banners/ithub.png", "index3.html")
const habsyTeam7 = new Team("6","TeamSpirit", "hutornoyaa@gmail.com", "Siderea", "Habsy2024", teamMembers, "best of the best", "/img/banners/ithub.png", "index4.html") // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
const habsyTeam8 = new Team("7","Gladiators", "hutornoyaa2@gmail.com", "Siderea2", "Habsy20242", teamMembers, "can do everything", "/img/banners/ithub.png", "index3.html")
Team.instanes.push(habsyTeam) //добавляем команду в масив, хранящий экземпляры класса
Team.instanes.push(habsyTeam2)
Team.instanes.push(habsyTeam3)
Team.instanes.push(habsyTeam4)
Team.instanes.push(habsyTeam5)
Team.instanes.push(habsyTeam6)
Team.instanes.push(habsyTeam7)

let succesful = false//переменная успешной авторизации
if (isCurrentLocation('http://127.0.0.1:5500/index.html') === true || isCurrentLocation('http://127.0.0.1:5500') === true || isCurrentLocation('http://192.168.0.106:5500/') === true || isCurrentLocation('http://192.168.0.106:5500/index.html') === true) {//проверка, если текущая страница - страница авторизации
    console.log("first windows")
    loginBut.onclick = function () { //обработка клика по кнопке входа
        let email = document.getElementById('emailInput').value //получаем, что ввел пользователь в поле логина
        let password = document.getElementById('passInput').value// получаем, что ввел пользователь в поле пароля
        if (isEmpty(email) === false && isEmpty(password) === false) { //если поля непустые

            for (const team in Team.instanes) { // перебор экземпляров класса Team (перебор команд)
                let emailTeam = Team.instanes[team].getLog()//получение логина команды (сохраненного)
                let passwordTeam = Team.instanes[team].getPass() //получение пароля команды (сохраненного)
                if (email === emailTeam && passwordTeam === password) { //сравнение введенного логина и пароля  с полученными из экземпляра класса
                    teamStorage.setItem("authorizedTeam", Team.instanes[team].id) //если все совпало, то добавляем этот экземпляр, с которым сошелся логин и пароль, в локальное хранилище, тем самым сохраняя, кто авторизовался
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
        else if (isEmpty(email) === true && isEmpty(password) === true) { //валидация полей 
            alert("Введите логин и пароль")
        }
        else if (isEmpty(email) === true) {
            alert("Введите логин")
        }
        else {
            alert("Введите пароль")
        }
    }
}

function isEmpty(str) {// функция проверки на пустую строку (может вызваться где угодно, с любой строкой, возвращает true false)
    return str === ''; //true если пустая строка (соответсвует '')
}

function isCurrentLocation(url) { //функция проверяющая совпадает ли вставленный url с текущим
    let currentUrl = window.location.href;
    return currentUrl === url;
}
function getTeamNameByTeamId(id){
    for (const team in Team.instanes){
        
        if(Team.instanes[team].id === id){
            console.log(Team.instanes[team].id === id , id, Team.instanes[team].id )
            return Team.instanes[team].teamName
        }
    }
}
function getlinkOfAuthorisedByTeamId(id){
    for (const team in Team.instanes){
        
        if(Team.instanes[team].id === id){
            console.log(Team.instanes[team].id === id , id, Team.instanes[team].id )
            return Team.instanes[team].link
        }
    }
}

function render() { // рендер всех команд
    console.log(teamStorage.getItem("authorizedTeam")) // кто авторизовался
    listElement.innerHTML = ''//делаем пустое поле в элементе, в котором будем выводить (рендерить) команды
    if (Team.instanes.length === 0) {// если команд нет -
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < Team.instanes.length; i++) {//перебор и вывод всех команд
        listElement.insertAdjacentHTML('beforeend', getTeamTemplate(Team.instanes[i])) //.innerAdjacentHTML (из курса джавы, работа с заметками)
        //передаем где (beforeend) и что вставлять - getNoteTemplate;
    }
}


let isStoppedAuthoriz = false
if (isCurrentLocation('http://127.0.0.1:5500/index2.html') === true || isCurrentLocation('http://192.168.0.106:5500/index2.html') === true) {
    render()
    renderTeamName()

}
else if (teamStorage.getItem('succesfulSign') === false) {
    console.log(teamStorage.getItem('succesfulSign'))
    window.location.href = 'http://127.0.0.1:5500/index2.html'
}


function getTeamTemplate(team) { //функция, использующаяся в render; Передается команда(team), из которой берутся хначения экземпляра класса Team
    return `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${team.banner}" alt="team banner">
        <div class="card-body">
            <h5 class="card-title">${team.teamName}</h5>
            <p class="card-text">${team.description}</p>
            <a href="${team.link}" class="btn btn-primary">Просмотр команды</a>
        </div>
    </div>
`
}

function renderTeamName() { //функция рендера названия команды, как в соц сетях показывает кто сейчас авторизован; работает по аналогии с рендером выше
    authorizedName.innerHTML = ''//authorizedName - элемент в html в который будет вставляться информация
    if (teamStorage.getItem("authorizedTeam") === null) {
        authorizedName.innerHTML = '<p>Вы неавторизовались</p>'
    }
    authorizedName.insertAdjacentHTML('beforeend', getTeamNameTemplate())
}

function getTeamNameTemplate() {
    nameOfAuthorised = getTeamNameByTeamId(teamStorage.getItem("authorizedTeam")) //получаем имя по id авторизованной команды, хранящийся в teamStorage
    linkOfAuthorised = getlinkOfAuthorisedByTeamId(teamStorage.getItem("authorizedTeam"))
    //шаблон вывода авторизованной сейчас команды ; Возвращается  html, который удет втавляться в рендер
    if (teamStorage.getItem("succesfulSign") == "true") {
        return `
            <ul class="nav nav-pills">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">${nameOfAuthorised}</a>
                     <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="${linkOfAuthorised}">Профиль</a></li>
                    <li><a class="dropdown-item" href="#">Другое действие</a></li>
                    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><button class="dropdown-item" id="unlog"> Выйти </button></li>
                    </ul>
                </li>
            </ul>
        `
    }
    else {
        return `
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="btn btn-primary" aria-current="page" href="index.html">Авторизоваться</a>
            </li>
        </ul>
        `
    }
}
function renderSearchResults() {
    searchBlock.innerHTML = ''
}
if ((isCurrentLocation("http://127.0.0.1:5500/index.html")) === false) {
    const unlogbut = document.getElementById('unlog')
    unlogbut.onclick = function () {
        teamStorage.setItem("succesfulSign", "false")
        //window.location.href = 'index.html'
        renderTeamName()
    }
    searchInput.oninput = function() {
        const arrofSearch = searchInTeams(searchInput.value)
        if(arrofSearch != null){
            
        }
    }
}

function searchInTeams(name){
    let arr = [];
    for (const team in Team.instanes){
        if(Team.instanes[team].teamName.includes(name)){
            arr.push(Team.instanes[team].teamName)
            console.log(arr.toString(), arr)
            return arr
        }
    }
}
