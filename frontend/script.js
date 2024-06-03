const reloadButton = document.getElementById("reload"); //кнопк обновления списка команд
const listElement = document.getElementById("list");
const authorizedName = document.getElementById("authorizedName");
const loginBut = document.getElementById("loginBut"); //кнопка входа в аккаунт
teamStorage = window.localStorage;
console.log(teamStorage.getItem("succesfulSign"));
const searchInput = document.getElementById("search");
const searchMenu = document.getElementById("search_menu");
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
class Employee{
  constructor(
    id,
    name,
    email,
    password,
    description,
    banner,
    link,
    rate,
    outsourcelink
  ){
    this.id = id
    this.teamName = name
    this.email = email
    this.password = password
    this.description =description
    this.banner = banner
    this.link = link
    this.rate =  rate
    this.outsourcelink = outsourcelink
  }
}
const yandex = new Employee(
  i,
  "Yandex",
  "yandex@yandex.ru",
  "12345",
  "Ищем специалистов: в разработке, маркетинге, аналитике, контенту, дизайну, текстам и много в чем еще. Смотреть вакансии и откликаться на них лучше тут — https://yandex.ru/jobs/ Тогда ваше резюме напрямую попадет к HR–менеджерам Яндекса.",
  "/img/banners/Yandex_icon.svg.png",
  "index7.html",
  5,
  "https://yandex.ru/jobs/"
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
    rate,
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

Team.instanes = [] // массив с экземплярами объектов
Employee.companies = [] //массив с компаниями-работодателями

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
Employee.companies.push(yandex);


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
    console.log("ocho")
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
          console.log("pizdecauthorized")
          //сравнение введенного логина и пароля  с полученными из экземпляра класса
          teamStorage.setItem("authorizedTeam", Team.instanes[team].id); //если все совпало, то добавляем этот экземпляр, с которым сошелся логин и пароль, в локальное хранилище, тем самым сохраняя, кто авторизовался
          teamStorage.setItem("succesfulSign", "true"); // сохраняем, авторизован ли человек
          teamStorage.setItem("isEmployee", "false")
          window.location.href = "index2.html"; //если да, переход дальше по страницам
          succesful = true;
        }
      }
      if(succesful != true){
        for (const employee in Employee.companies) {
          // перебор экземпляров класса Team (перебор команд)
          let emailTeam = Employee.companies[employee].email //получение логина команды (сохраненного)
          let passwordTeam = Employee.companies[employee].password//получение пароля команды (сохраненного)
          if (email === emailTeam && passwordTeam === password) {
            //сравнение введенного логина и пароля  с полученными из экземпляра класса
            teamStorage.setItem("authorizedTeam", Employee.companies[employee].id); //если все совпало, то добавляем этот экземпляр, с которым сошелся логин и пароль, в локальное хранилище, тем самым сохраняя, кто авторизовался
            teamStorage.setItem("succesfulSign", "true"); // сохраняем, авторизован ли человек
            teamStorage.setItem("isEmployee", "true")
            window.location.href = "index2.html"; //если да, переход дальше по страницам
            succesful = true;
          }
        }
      }
      if(succesful != true){
        alert("Неверный пароль")
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
      console.log(Team.instanes[team].id === id, id, Team.instanes[team].id);
      return Team.instanes[team].teamName;
    }
  }
}
function getCompanyNameByCompanyId(ids) {
  let id  = Number(ids)
  for (const employee in Employee.companies) {
    if (Employee.companies[employee].id === id) {
      console.log(Employee.companies[employee].id === id, id, Employee.companies[employee].id);
      return Employee.companies[employee].teamName;
    }
  }
}
function getlinkOfAuthorisedByTeamId(id) {
  for (const team in Team.instanes) {
    if (Team.instanes[team].id === id) {
      console.log(Team.instanes[team].id === id, id, Team.instanes[team].id);
      return Team.instanes[team].link;
    }
  }
}
function getlinkOfAuthorisedByEmployeeId(ids) {
  let id = Number(ids)
  for (const employee in Employee.companies) {
    if (Employee.companies[employee].id === id) {
      console.log(Employee.companies[employee].link);
      return Employee.companies[employee].link;
    }
  }
}
function renderComp(){
  console.log(Employee.companies)
  listElement.innerHTML = ""; //делаем пустое поле в элементе, в котором будем выводить (рендерить) команды
  if (Employee.companies.length === 0) {
    // если команд нет -
    listElement.innerHTML = "<p>Нет элементов</p>";
  }
  for (let i = 0; i < Employee.companies.length; i++) {
    //перебор и вывод всех команд
    if(Employee.companies[i].rate >=4){
      listElement.insertAdjacentHTML(
        "beforeend",
        getTeamTemplate(Employee.companies[i])
        
      ); //.innerAdjacentHTML (из курса js, работа с заметками)
      
      //передаем где (beforeend) и что вставлять - getNoteTemplate;
    }
  }
}

function render() {
  // рендер всех команд
  console.log(teamStorage.getItem("authorizedTeam")); // кто авторизовался
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
  
) {
  console.log("pizda")
  if(isCurrentLocation("http://127.0.0.1:5500/index6.html")){
    renderComp();
  }
  else{
    render();
  }

  renderTeamName();
} else if (teamStorage.getItem("succesfulSign") === false) {
  console.log(teamStorage.getItem("succesfulSign"));
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
    </div>
`;
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
            <p class="ms-2">Нет резульатов</p>
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
            <a class="dropdown-item" href="${team.link}">${team.teamName}</a>
        </li>
    `;
}
function searchInEmplyee(name){
  Employee.arr= []
  for (const team in Employee.companies) {
    if (
      Employee.companies[team].teamName.toLowerCase().includes(name) ||
      Employee.companies[team].teamName.includes(name)
    ) {
      Team.arr.push(Employee.companies[team])
    }
  }
  return Employee.arr;
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