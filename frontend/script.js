const reloadButton = document.getElementById("reload"); //кнопк обновления списка команд
const listElement = document.getElementById("list");
const authorizedName = document.getElementById("authorizedName");
const loginBut = document.getElementById("loginBut"); //кнопка входа в аккаунт
teamStorage = window.localStorage;
const searchInput = document.getElementById("search");
const searchMenu = document.getElementById("search_menu");

const addMemberButton = document.getElementById("addmember");
const secondnameInput = document.getElementById("secondnameInput");
const firstnameInput = document.getElementById("firstnameInput");
const middlenameInput = document.getElementById('middlenameInput');
const githubInput = document.getElementById('githubInput')
const phoneInput = document.getElementById('phoneInput')
const emailMemberInput = document.getElementById('emailMemberInput')
const telegramInput = document.getElementById('telegramInput')
const capitanSwitch = document.getElementById('flexSwitchCheckDefault')

const bodyMembers = document.getElementById('bodyMembers')
const watchMembers = document.getElementById('watchMembers')

for (let i = 0; (i = 0); i++) {
  if (
    isCurrentLocation("http://127.0.0.1:5500/index.html") === true &&
    teamStorage.getItem("succesfulSign") === "true"
  ) {
    //если открыта начальная страница ( входа ) и пользователь авторизован - то переброс на вторую страницу
    window.location.href = "http://127.0.0.1:5500/index2.html";
  }
  // else if (isCurrentLocation("http://127.0.0.1:5500/index2.html") === true && (teamStorage.getItem('succesfulSign') === "false" || teamStorage.getItem('succesfulSign') === null)) {
  // //если вторая (где юзеры) и неавторизован - переброс на авторизацию
  //     window.location.href = 'index.html';
  // }
}
let i = 0
class Employer{
  constructor(
    id,
    isEmployer,
    name,
    email,
    password,
    description,
    banner,
    link,
    rate,
    outsourcelink,
    vacancies
  ){
    this.id = id
    this.isEmployer = isEmployer
    this.teamName = name
    this.email = email
    this.password = password
    this.description =description
    this.banner = banner
    this.link = link
    this.rate =  rate
    this.outsourcelink = outsourcelink
    this.vacancies = vacancies
  }
}
class Vacancy {
  constructor(
    id,
    name,
    description,
    keyskills,
    city,
    address,
    canDistant,

  ){
    this.id = id
    this.name = name
    this.description = description
    this.keyskills = keyskills
    this.city= city
    this.address = address
    this.canDistant = canDistant
  }
}

Vacancy.yandexVacancies = []
const keyskillsDesign = ["HTML", "CSS", "JavaScript", "Next.js", "Vue.js", "Git"]
const yandexWebDesign = new Vacancy(
  0,
  "WebDesigner",
  "Ищем крутого веб дизайнера для наших проектов и так далее и так далее",
  keyskillsDesign,
  "Ростов-на-Дону",
  "пл.Гагарина 1",
  true
)
Vacancy.yandexVacancies.push(yandexWebDesign)
const yandex = new Employer(
  i,
  true,
  "Yandex",
  "yandex@yandex.ru",
  "12345",
  "Ищем специалистов: в разработке, маркетинге, аналитике, контенту, дизайну, текстам и много в чем еще. Смотреть вакансии и откликаться на них лучше тут — https://yandex.ru/jobs/ Тогда ваше резюме напрямую попадет к HR–менеджерам Яндекса.",
  "/img/banners/Yandex_icon.svg.png",
  "index7.html",
  5,
  "https://yandex.ru/jobs/",
  Vacancy.yandexVacancies
)


class Team {
  // класс команд, в котором есть конструктор класса, через который создаются команды
  constructor(
    isEmployer,
    id,
    name,
    email,
    password,
    capitan,
    members,
    description,
    banner,
    link,
    rate
  ) {
    this.isEmployer = isEmployer
    this.id = id //конструктор, с помощью которого создаются экземпляры класса
    this.teamName = name
    this.teamEmail = email
    this.password = password
    
    this.capitan = capitan
    this.members = members
    
    this.description = description
    this.banner = banner
    this.link = link
    this.rate = rate

  }

  getLog() {
    //метод, возвращающий почту команды
    return this.teamEmail;
  }
  getPass() {
    return this.password; //метод, возвращающий пароль команды
  }
}

class Member{
  constructor(
    memberID,
    capitan,
    secondname,
    firstname,
    middleName,
    github,
    phone,
    email,
    telegram
  ) {
    this.memberID = memberID
    this.capitan = capitan
    this.secondname = secondname
    this.firstname = firstname
    this.middleName = middleName
    this.github = github
    this.phone = phone
    this.email = email
    this.telegram = telegram
  }
}

Member.members = []

const member = new Member(
  1,
  true,
  "Ivanov",
  "Ivan",
  "Ivanovich",
  "/git/ivn",
  "+919291112",
  "@ivanivan"
)

Member.members.push(member)

addMemberButton.onclick = function(){
  if(isEmpty(firstnameInput.value) === false && isEmpty(secondnameInput.value) === false && (isEmpty(phoneInput.value) === false || isEmpty(githubInput.value) === false|| isEmpty(emailMemberInput.value) === false))
  {
    const lengthMembers = Member.members.length+1

    let isCapitan

    if(capitanSwitch.checked === true){
      isCapitan = true
    }
    else{
      isCapitan = false
    }

    alert('Участник добавлен')

    const newMember = new Member(
      lengthMembers,
      isCapitan,
      secondnameInput.value,
      firstnameInput.value,
      middlenameInput.value,
      githubInput.value,
      phoneInput.value,
      emailMemberInput.value,
      telegramInput.value
    )
    Member.members.push(newMember)
  }
  else {
    alert('Введите оставшиеся поля')
  } 
}

Team.instanes = [] // массив с экземплярами объектов
Employer.companies = [] //массив с компаниями-работодателями

teamMembers = ["Vera Kostenko", "Andrey Hutornoy"] //пример массива с участниками

const habsyTeam = new Team(
  false,
  i,
  "TeamSpirit",
  "hutornoyaa@gmail.com",
  "Habsy2024",
  "Siderea",
  teamMembers,
  "best of the best",
  "/img/banners/Team-Spirit.png",
  "index4.html",
  4
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
i+=1
const habsyTeam9 = new Team(
  false,
  i,
  "1488",
  "hutornoyaa@gmail.com",
  "Habsy2024",
  "Siderea",
  teamMembers,
  "best of the best",
  "/img/banners/Team-Spirit.png",
  "index5.html",
  4
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
i+=1
const habsyTeam2 = new Team(
  false,
  i,
  "Gladiators",
  "hutornoyaa2@gmail.com",
  "Habsy20242",
  "Siderea2",
  teamMembers,
  "can do everything",
  "/img/banners/gg.png",
  "index3.html",
  2
);
i+=1
const habsyTeam3 = new Team(
  false,
  i,
  "BetBoom",
  "hutornoyaa3@gmail.com",
  "Habsy2024",
  "Siderea",
  teamMembers,
  "best of the best",
  "/img/banners/bb.png",
  "index4.html",5
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
i+=1
const habsyTeam4 = new Team(
  false,
  i,
  "Хабсы",
  "hutornoyaa4@gmail.com",
  "Siderea2",
  teamMembers,
  "can do everything",
  "/img/banners/ithub.png",
  "index3.html",
  5
);
i+=1
const habsyTeam5 = new Team(
  false,
  i,
  "BetBoom",
  "hutornoyaa5@gmail.com",
  "Habsy2024",
  "Siderea",
  teamMembers,
  "best of the best",
  "/img/banners/bb.png",
  "index4.html",
  3
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
i+=1
const habsyTeam6 = new Team(
  false,
  i,
  "ДГТУ",
  "hutornoyaa6@gmail.com",
  "Habsy20242",
  "Siderea2",

  teamMembers,
  "can do everything",
  "/img/banners/dstu.jpg",
  "index3.html",
  4
);
i+=1
const habsyTeam7 = new Team(
  false,
  i,
  "whatTheHell",
  "hutornoya7@gmail.com",
  "Habsy2024",
  "Siderea",

  teamMembers,
  "best of the best",
  "/img/banners/ithub.png",
  "index4.html",
  3
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
i+=1
const habsyTeam8 = new Team(
  false,
  i,
  "BetBoom",
  "hutornoyaa8@gmail.com",
  "Habsy20242",
  "Siderea2",
  teamMembers,
  "can do everything",
  "/img/banners/bb.png",
  "index3.html",
  5
);


Team.instanes.push(habsyTeam); //добавляем команду в масив, хранящий экземпляры класса
Team.instanes.push(habsyTeam2);
Team.instanes.push(habsyTeam3);
Team.instanes.push(habsyTeam4);
Team.instanes.push(habsyTeam5);
Team.instanes.push(habsyTeam6);
Team.instanes.push(habsyTeam7);
Team.instanes.push(habsyTeam8);
Employer.companies.push(yandex);


let succesful = false; //переменная успешной авторизации
if (
  isCurrentLocation("http://127.0.0.1:5500/index.html") === true ||
  isCurrentLocation("http://127.0.0.1:5500/") === true ||
  isCurrentLocation("http://192.168.0.106:5500/") === true ||
  isCurrentLocation("http://192.168.0.106:5500/index.html") === true
) {
  //проверка, если текущая страница - страница авторизации
  console.log("first windows");
  loginBut.onclick = function () {
    //обработка клика по кнопке входа
    let email = document.getElementById("emailInput").value; //получаем, что ввел пользователь в поле логина
    let password = document.getElementById("passInput").value; // получаем, что ввел пользователь в поле пароля
    if (isEmpty(email) === false && isEmpty(password) === false) {
      //если поля непустые
      for (const team in Team.instanes) {
        // перебор экземпляров класса Team (перебор команд)
        let emailTeam = Team.instanes[team].getLog(); //получение логина команды (сохраненного)
        let passwordTeam = Team.instanes[team].getPass(); //получение пароля команды (сохраненного)
        
        if (email === emailTeam && passwordTeam === password) {

          //сравнение введенного логина и пароля  с полученными из экземпляра класса
          teamStorage.setItem("authorizedTeam", Team.instanes[team].id); //если все совпало, то добавляем этот экземпляр, с которым сошелся логин и пароль, в локальное хранилище, тем самым сохраняя, кто авторизовался
          teamStorage.setItem("succesfulSign", "true"); // сохраняем, авторизован ли человек
          teamStorage.setItem("isEmployee", "false")
          window.location.href = "index2.html"; //если да, переход дальше по страницам
          succesful = true;
        }
      }
      if(succesful != true){
        for (const employee in Employer.companies) {
          // перебор экземпляров класса Team (перебор команд)
          let emailTeam = Employer.companies[employee].email //получение логина команды (сохраненного)
          let passwordTeam = Employer.companies[employee].password//получение пароля команды (сохраненного)
          if (email === emailTeam && passwordTeam === password) {
            //сравнение введенного логина и пароля  с полученными из экземпляра класса
            teamStorage.setItem("authorizedTeam", Employer.companies[employee].id); //если все совпало, то добавляем этот экземпляр, с которым сошелся логин и пароль, в локальное хранилище, тем самым сохраняя, кто авторизовался
            teamStorage.setItem("succesfulSign", "true"); // сохраняем, авторизован ли человек
            teamStorage.setItem("isEmployee", "true")
            window.location.href = "index2.html"; //если да, переход дальше по страницам
            succesful = true;
          }
        }
      }
      if(succesful != true){
        alert("Неверный логин или пароль")
      }

      /*if(succesful === true){ //если правильно ввели пароль

                alert("succesful")
            }
            else{
                alert("Неверный логин или пароль")
                teamStorage.setItem("succesfulSign", "false")
            }*/
    } else if (isEmpty(email) === true && isEmpty(password) === true) {
      //валидация полей
      alert("Введите логин и пароль");
    } else if (isEmpty(email) === true) {
      alert("Введите логин");
    } else {
      alert("Введите пароль");
    }
  };
}
function isEmpty(str) {
  // функция проверки на пустую строку (может вызваться где угодно, с любой строкой, возвращает true false)
  return str === ""; //true если пустая строка (соответсвует '')
}

function isCurrentLocation(url) {
  //функция проверяющая совпадает ли вставленный url с текущим
  let currentUrl = window.location.href;
  return currentUrl === url;
}
function getTeamNameByTeamId(ids) {
  let id  = Number(ids)
  for (const team in Team.instanes) {
    if (Team.instanes[team].id === id) {
      //console.log(Team.instanes[team].id === id, id, Team.instanes[team].id);
      return Team.instanes[team].teamName;
    }
  }
}
function getCompanyNameByCompanyId(ids) {
  let id  = Number(ids)
  for (const employee in Employer.companies) {
    if (Employer.companies[employee].id === id) {
      //console.log(Employee.companies[employee].id === id, id, Employee.companies[employee].id);
      return Employer.companies[employee].teamName;
    }
  }
}
function getlinkOfAuthorisedByTeamId(id) {
  for (const team in Team.instanes) {
    if (Team.instanes[team].id === id) {
      //console.log(Team.instanes[team].id === id, id, Team.instanes[team].id);
      return Team.instanes[team].link;
    }
  }
}
function getlinkOfAuthorisedByEmployeeId(ids) {
  let id = Number(ids)
  for (const employee in Employer.companies) {
    if (Employer.companies[employee].id === id) {
      //console.log(Employee.companies[employee].link);
      return Employer.companies[employee].link;
    }
  }
}
function renderComp(){
  //console.log(Employee.companies)
  listElement.innerHTML = ""; //делаем пустое поле в элементе, в котором будем выводить (рендерить) команды
  if (Employer.companies.length === 0) {
    // если команд нет -
    listElement.innerHTML = "<p>Нет элементов</p>";
  }
  for (let i = 0; i < Employer.companies.length; i++) {
    //перебор и вывод всех команд
    if(Employer.companies[i].rate >=4){
      listElement.insertAdjacentHTML(
        "beforeend",
        getTeamTemplate(Employer.companies[i])
        
      ); //.innerAdjacentHTML (из курса js, работа с заметками)
      
      //передаем где (beforeend) и что вставлять - getNoteTemplate;
    }
  }
}

function render() {
  // рендер всех команд
  //console.log(teamStorage.getItem("authorizedTeam")); // кто авторизовался
  listElement.innerHTML = ""; //делаем пустое поле в элементе, в котором будем выводить (рендерить) команды

  if (Team.instanes.length === 0) {
    // если команд нет -
    listElement.innerHTML = "<p>Нет элементов</p>";
  }
  for (let i = 0; i < Team.instanes.length; i++) {
    //перебор и вывод всех команд
    if(Team.instanes[i].rate >=4){
      listElement.insertAdjacentHTML(
        "beforeend",
        getTeamTemplate(Team.instanes[i])

      ); //.innerAdjacentHTML (из курса js, работа с заметками)
      //передаем где (beforeend) и что вставлять - getNoteTemplate;
    }
  }
}


let isStoppedAuthoriz = false;
if (
  //isCurrentLocation("http://127.0.0.1:5500/index2.html") === true ||
  //isCurrentLocation("http://192.168.0.106:5500/index2.html") === true
  //isCurrentLocation("http://192.168.0.106:5500/index.html") === false ||
  (isCurrentLocation("http://127.0.0.1:5500/index.html") === false &&
  isCurrentLocation("http://127.0.0.1:5500/") === false ) ||
  (isCurrentLocation("http://127.0.0.1:5500/index.html") === false &&
  isCurrentLocation("http://127.0.0.1:5500/") === false )

  ||(isCurrentLocation("http://127.0.0.1:5500/index8.html") === false)
  
) {
  if(isCurrentLocation("http://127.0.0.1:5500/index6.html")){
    renderComp();
  }
//   else{
//    render();
//  }

  // renderTeamName();
} else if (teamStorage.getItem("succesfulSign") === false) {
  //console.log(teamStorage.getItem("succesfulSign"));
  window.location.href = "http://127.0.0.1:5500/index2.html";
}
function getTeamTemplate(team) {
  //функция, использующаяся в render; Передается команда(team), из которой берутся хначения экземпляра класса Team
  return `
    <div class="card" style="width: 18rem;">
        <div class="card-cont">
          <img class="card-img-top" src="${team.banner}" alt="team banner">
        </div>
        
        <div class="card-body">
            <h5 class="card-title">${team.teamName}</h5>
            <p class="card-text">${getShortestString(0,70,team.description)}</p>
            <a href="${team.link}" class="btn btn-primary">Просмотр команды</a>
        </div>
    </div>`;
}



function renderMembers(){

  bodyMembers.innerHTML = ""

  if(Member.members.length === 0){
  bodyMembers.innerHTML = "<p>Нет элементов</p>"
  }
  else {
    for (let i = 0; i < Member.members.length; i++){
      bodyMembers.insertAdjacentHTML(
        "beforeend",
        getMemberTemplate(Member.members[i]))
    }
  }
  console.log('леле')
  
}
renderMembers()

watchMembers.onclick = function(){
  renderMembers()
}


function getMemberTemplate(member) {
  //функция, использующаяся в render; Передается команда(member), из которой берутся значения экземпляра класса member

  let capitanState
  if(member.capitan === true){
    capitanState = `<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled>
  <label class="form-check-label" for="flexSwitchCheckDisabled">Капитан</label>
  </div>`
  }

  else{
    capitanState = `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
  </div>`
}

  return `
    <div class="card" style="width: 18rem;">    
        <div class="card-body">
            <p class="card-text">${member.secondname}</p>
            <p class="card-text">${member.firstname}</p>
            <p class="card-text">${member.middleName}</p>

            ${capitanState}

            <p class="card-text">${member.github}</p>
            <p class="card-text">${member.phone}</p>
            <p class="card-text">${member.email}</p>
            <p class="card-text">${member.telegram}</p>
        </div>
    </div>`;
}


function renderTeamName() {
  //функция рендера названия команды, как в соц сетях показывает кто сейчас авторизован; работает по аналогии с рендером выше
  authorizedName.innerHTML = ""; //authorizedName - элемент в html в который будет вставляться информация
  if (teamStorage.getItem("authorizedTeam") === null) {
    //authorizedName.innerHTML = "<p>Вы неавторизовались</p>";
  }
  authorizedName.insertAdjacentHTML("beforeend", getTeamNameTemplate());
}
function getTeamNameTemplate() {
  
  if(teamStorage.getItem("isEmployee") === "false"){
    nameOfAuthorised = getTeamNameByTeamId(
      teamStorage.getItem("authorizedTeam")
    ); //получаем имя по id авторизованной команды, хранящийся в teamStorage
    linkOfAuthorised = getlinkOfAuthorisedByTeamId(
      teamStorage.getItem("authorizedTeam")
    );
  }
  else{
    nameOfAuthorised = getCompanyNameByCompanyId(
      teamStorage.getItem("authorizedTeam")
    );
    linkOfAuthorised = getlinkOfAuthorisedByEmployeeId(
      teamStorage.getItem("authorizedTeam")
    );
  }
  
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
        `;
  } else {
    return `
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="btn btn-primary" aria-current="page" href="index.html">Авторизоваться</a>
            </li>
        </ul>
        `;
  }
}
function renderSearchResults() {
  searchMenu.innerHTML = "";
  if (Team.arr.length === 0) {
    searchMenu.innerHTML = `
        <li class="nav-item">
            <p class="ms-2">Нет результатов</p>
        </li>`;
  }
  for (const team in Team.arr) {
    searchMenu.insertAdjacentHTML(
      "beforeend",
      getTeamSearchTeamplate(Team.arr[team])
    );
  }
}
if (
  (isCurrentLocation("http://127.0.0.1:5500/index.html") === false &&
  isCurrentLocation("http://127.0.0.1:5500/") === false ) ||
  (isCurrentLocation("http://127.0.0.1:5500/index.html") === false &&
  isCurrentLocation("http://127.0.0.1:5500/") === false )) {
  const unlogbut = document.getElementById("unlog");
  unlogbut.onclick = function () {
    //teamStorage.setItem("succesfulSign", "false");
    teamStorage.clear()
    //window.location.href = 'index.html'
    renderTeamName();
  };
  searchInput.oninput = function () {
    searchMenu.classList.remove("hidden");

    const arrOfSearch = searchInTeams(searchInput.value);
    const arrOfEmployee = searchInEmplyee(searchInput.value)
    if (!searchInput.value) {
      searchMenu.innerHTML = "";
      searchMenu.classList.add("hidden");
    } else if (arrOfSearch != null) {
      renderSearchResults(arrOfSearch + arrOfEmployee);
    }
  };
}

function getTeamSearchTeamplate(team) {
  return `
        <li class="nav-item">
            <a class="dropdown-item searchitem" href="${team.link}"><p>${team.teamName}</p><img class="searchicon" src="${(team.isEmployer === true) ? "/img/briefcase.png":"/img/management.png"}"></a>
        </li>
    `;
}
function searchInEmplyee(name){
  Employer.arr= []
  for (const team in Employer.companies) {
    if (
      Employer.companies[team].teamName.toLowerCase().includes(name) ||
      Employer.companies[team].teamName.includes(name)
    ) {
      Team.arr.push(Employer.companies[team])
    }
  }
  return Employer.arr;
}
function searchInTeams(name) {
  Team.arr = []
  for (const team in Team.instanes) {
    if (
      Team.instanes[team].teamName.toLowerCase().includes(name) ||
      Team.instanes[team].teamName.includes(name)
    ) {
      Team.arr.push(Team.instanes[team])
    }
  }
  return Team.arr;
}

function getShortestString(begin, finish, string){
  let newStr = string.slice(begin,finish)
  if (newStr.length >= string.length){
    return string
  }
  else{
    return newStr + "..."
  }
}