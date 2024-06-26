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
const delMemberBut = document.getElementById("delMemberBut")
const regisrtationBut = document.getElementById('regisrtationBut')
const comandNameInput = document.getElementById('comandNameInput')
const passInput = document.getElementById('passInput')
const emailInput = document.getElementById('emailInput')
const toRegistry = document.getElementById('toRegistry')
const toLogIn = document.getElementById('toLogIn')

const modal = document.getElementById('modal')
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


//index8 регистрация

Team.instanes = [] // массив с экземплярами объектов
Employer.companies = [] //массив с компаниями-работодателями

//teamMembers = ["Vera Kostenko", "Andrey Hutornoy"] //пример массива с участниками
Member.teamMembers = []
const teamMember = new Member(
  Member.teamMembers.length,
  true,
  "Хуторной",
  "Андрей",
  "Андреевич",
  "https://github.com/SidereaH",
  "89882578790",
  "hutornoyaa@gmail.com",
  "@Siderean"
)
Member.teamMembers.push(teamMember)
const teamMember2 = new Member(
  Member.teamMembers.length,
  true,
  "Костенко",
  "Вероника",
  "Андреевна",
  "https://github.com/fverf",
  "-",
  "fverochka19@gmail.com",
  "@ovich"
)
Member.teamMembers.push(teamMember2)
const teamMember3 = new Member(
  Member.teamMembers.length,
  true,
  "Елисеев",
  "Никита",
  "Михайлович",
  "https://github.com/whykitaa",
  "-",
  "niki2004@gmail.com",
  "@whykitaa"
)
Member.teamMembers.push(teamMember3)
const habsyTeam = new Team(
  false,
  Team.instanes.length + 1,
  "TeamSpirit",
  "hutornoyaa@gmail.com",
  "Habsy2024",
  teamMember,
  Member.teamMembers,
  "best of the best",
  "/img/banners/Team-Spirit.png",
  "index7.html",
  4
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
Team.instanes.push(habsyTeam);
const habsyTeam9 = new Team(
  false,
  Team.instanes.length + 1,
  "1488",
  "hutornoyaa@gmail.com",
  "Habsy2024",
  teamMember,
  Member.teamMembers,
  "best of the best",
  "/img/banners/Team-Spirit.png",
  "index7.html",
  4
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)

const habsyTeam2 = new Team(
  false,
  Team.instanes.length + 1,
  "Gladiators",
  "hutornoyaa2@gmail.com",
  "Habsy20242",
  teamMember,
  Member.teamMembers,
  "can do everything",
  "/img/banners/gg.png",
  "index7.html",
  2
);
Team.instanes.push(habsyTeam2);
const habsyTeam3 = new Team(
  false,
  Team.instanes.length + 1,
  "BetBoom",
  "hutornoyaa3@gmail.com",
  "Habsy2024",
  teamMember,
  Member.teamMembers,
  "best of the best",
  "/img/banners/bb.png",
  "index7.html",5
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
Team.instanes.push(habsyTeam3);
i+=1
const habsyTeam4 = new Team(
  false,
  Team.instanes.length + 1,
  "Хабсы",
  "hutornoyaa4@gmail.com",
  teamMember,
  Member.teamMembers,
  "can do everything",
  "/img/banners/ithub.png",
  "index7.html",
  5
);
Team.instanes.push(habsyTeam4);Team.instanes.push(habsyTeam4);
i+=1
const habsyTeam5 = new Team(
  false,
  Team.instanes.length + 1,
  "BetBoom",
  "hutornoyaa5@gmail.com",
  "Habsy2024",
  teamMember,
  Member.teamMembers,
  "best of the best",
  "/img/banners/bb.png",
  "index7.html",
  3
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
Team.instanes.push(habsyTeam5);Team.instanes.push(habsyTeam5);
i+=1
const habsyTeam6 = new Team(
  false,
  Team.instanes.length + 1,
  "ДГТУ",
  "hutornoyaa6@gmail.com",
  "Habsy20242",
  teamMember,

  Member.teamMembers,
  "can do everything",
  "/img/banners/dstu.jpg",
  "index7.html",
  4
);

Team.instanes.push(habsyTeam6);Team.instanes.push(habsyTeam6);
i+=1
const habsyTeam7 = new Team(
  false,
  Team.instanes.length + 1,
  "whatTheHell",
  "hutornoya7@gmail.com",
  "Habsy2024",
  teamMember,

  Member.teamMembers,
  "best of the best",
  "/img/banners/ithub.png",
  "index7.html",
  3
); // пример создания команды (как экземпляр класса через конструктор, описанный выше стр.15)
Team.instanes.push(habsyTeam7);Team.instanes.push(habsyTeam7);
i+=1
const habsyTeam8 = new Team(
  false,
  Team.instanes.length + 1,
  "BetBoom",
  "hutornoyaa8@gmail.com",
  "Habsy20242",
  teamMember,
  Member.teamMembers,
  "can do everything",
  "/img/banners/bb.png",
  "index7.html",
  5
);
 //добавляем команду в масив, хранящий экземпляры класса
Team.instanes.push(habsyTeam8);


Employer.companies.push(yandex);


if(isCurrentLocation("http://127.0.0.1:5500/index8.html")){
 
  capitanSwitch.disabled = findCap() //кэп перпебирпает мемберов, если капитан - тру
  
  Member.members = []

const member = new Member(
  1,
  true,
  "Хуторной",
  "Андрей",
  "Андреевич",
  "https://github.com/SidereaH",
  "+79882578790",
  "hutornoyaa@gmail.com",
  "@Siderean"
)

Member.members.push(member)

function delMember(memberid){
  console.log("udalen", memberid)
  Member.members.splice(memberid-1,1)
  renderMembers()
}
function updateInform(memberid){

}
function changeCapitanState(memberid){
  Member.members[memberid].capitanState = !Member.members[memberid].capitanState
}
function findCap(){
  for(const member in Member.members){
    if(Member.members[member].capitan === true){
        return true
    }
  }
  return false
}
function disableSwithcingCap(){
  capitanSwitch.disabled = findCap()
}
addMemberButton.onclick = function(){

  if(isEmpty(firstnameInput.value) === false && isEmpty(secondnameInput.value) === false && (isEmpty(phoneInput.value) === false || isEmpty(githubInput.value) === false|| isEmpty(emailMemberInput.value) === false))
  {
    let isCapitan
  
      if(capitanSwitch.checked === true){
        isCapitan = true
      }
  
      else{
        isCapitan = false
      }
    if(findCap() === true && isCapitan === true){
      return alert("В команде можеть быть только один капитан!")
    }
    else{
      const lengthMembers = Member.members.length+1
      
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
      renderMembers()
    }
  }
  else {
    //alert('Введите оставшиеся поля')
  } 
}
regisrtationBut.onclick = function(){

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (isEmpty(comandNameInput.value) === false && isEmpty(emailInput.value) === false && isEmpty(passInput.value) === false) {

    if(emailPattern.test(emailInput.value)){

      let isComandName = checkComandName(comandNameInput.value)
      if(isComandName === false){
        let isComandEmail = checkComandEmail(emailInput.value)
        if(isComandEmail === false){
          if(Member.members.length != 0){
              if(findCap() === true){

                const comanda = new Team(
                  false,
                  Team.instanes.length + 1,
                  comandNameInput.value,
                  emailInput.value,
                  passInput.value,
                  searchCapitan(),
                  Member.members,
                  '',
                  '/img/banners/dstu.jpg',
                  'index9',
                  0
                )
                Team.instanes.push(comanda)
                window.location.href = 'index.html';
              }
              else{
                alert("Выберите капитана команды")
              }
            
          }
          else{
            alert("Вы не добавили ни одного участника")
          }
        }
        else{
          alert("Такая почта уже зарегистрирована")
        }
      }
      else{
        alert('Команда с таким названием уже существует')
      }
    }
    else{
      alert('Некорректный email-адрес')
    }
  }

  else{
    alert("Заполните пустые строки");
  }
}

renderMembers()

watchMembers.onclick = function(){
  renderMembers()
}

}

function renderMembers(){

  bodyMembers.innerHTML = ""

  if(Member.members.length === 0){
    bodyMembers.innerHTML = "<p>Команда пуста</p>"
  }
  else {
    for (let i = 0; i < Member.members.length; i++){
      bodyMembers.insertAdjacentHTML(
        "beforeend",
        getMemberTemplate(Member.members[i]))
    }
  }
}

function checkComandName(nameComand){

  for(const comanda in Team.instanes){

    if(Team.instanes[comanda].teamName ===nameComand){
      return true
    }
  }
  for(const company in Employer.companies){

    if(Employer.companies[company].teamName === nameComand){
      return true
    }
  }
  return false
  
}
function checkComandEmail(emailComand){

  for(const comanda in Team.instanes){

    if(Team.instanes[comanda].teamEmail ===emailComand){
      return true
    }
  }
  for(const company in Employer.companies){

    if(Employer.companies[company].email ===emailComand){
      return true
    }
  }
  return false
  
}


function searchCapitan(){
  for (const member in Member.members){
    if(member.capitan === true){
      return member
    }

  }
}


let succesful = false; //переменная успешной авторизации
if (
  isCurrentLocation("http://127.0.0.1:5500/index.html") === true ||
  isCurrentLocation("http://127.0.0.1:5500/") === true ||
  isCurrentLocation("http://192.168.0.106:5500/") === true ||
  isCurrentLocation("http://192.168.0.106:5500/index.html") === true
) {
  //проверка, если текущая страница - страница авторизации
  toRegistry.onclick = function(){
    window.location.href = "http://127.0.0.1:5500/index8.html"
  }
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
function getTeamorEmpById(ids, isEmployer) {
  let id  = Number(ids)
  if(isEmployer === "false"){
    for (const team in Team.instanes) {
      if (Team.instanes[team].id === id) {
        //console.log(Team.instanes[team].id === id, id, Team.instanes[team].id);
        return Team.instanes[team];
      }
    }
  }
  else{
    for (const company in Employer.companies) {
      if (Employer.companies[company].id === id) {
        //console.log(Team.instanes[team].id === id, id, Team.instanes[team].id);
        return Employer.companies[company];
      }
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
    if (Team.instanes[team].id == id) {
      //console.log(Team.instanes[team].id === id, id, Team.instanes[team].id);
      return Team.instanes[team].link;
    }
  }
}
function getlinkOfAuthorisedByEmployeeId(ids) {
  for (const employee in Employer.companies) {
    if (Employer.companies[employee].id == ids) {
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
  isCurrentLocation("http://127.0.0.1:5500/index.html") === false &&
  isCurrentLocation("http://127.0.0.1:5500/") === false  &&
  isCurrentLocation("http://127.0.0.1:5500/index8.html") === false  &&
  isCurrentLocation("http://127.0.0.1:5500/EmpIndex9.html") === false &&
  isCurrentLocation("http://127.0.0.1:5500/index7.html") === false

  
) {

  if(isCurrentLocation("http://127.0.0.1:5500/index6.html")){
    renderComp();
  }
   else{
    render();
  }

   renderTeamName();
} else if (teamStorage.getItem("succesfulSign") === false) {
  //console.log(teamStorage.getItem("succesfulSign"));
  window.location.href = "http://127.0.0.1:5500/index2.html";
}
function getTeamTemplate(team) {
  //функция, использующаяся в render; Передается команда(team), из которой берутся хначения экземпляра класса Team
  let emp
  if(team.isEmployer === true){
    emp = "Просмотр работoдателя"
  }
  else{
    emp = "Просмотр команды"
  }
  return `
    <div class="card" style="width: 18rem;">
        <div class="card-cont">
          <img class="card-img-top" src="${team.banner}" alt="team banner">
        </div>
        
        <div class="card-body">
            <h5 class="card-title">${team.teamName}</h5>
            <p class="card-text">${getShortestString(0,70,team.description)}</p>
            <a href="${team.link}" class="btn btn-primary">${emp}</a>
        </div>
    </div>`;
}






function updateMember(memberID){
  const secNameMemberInput = document.getElementById(`secNameMemberInput${memberID}`)
  const firstNameMemberInput = document.getElementById(`firstNameMemberInput${memberID}`)
  const midNameMemberInput = document.getElementById(`midNameMemberInput${memberID}`)
  const gitMemberInput = document.getElementById(`gitMemberInput${memberID}`)
  const phoneMemberInput = document.getElementById(`phoneMemberInput${memberID}`)
  const emailMemberInput = document.getElementById(`emailMemberInput${memberID}`)
  const tgMemberInput = document.getElementById(`tgMemberInput${memberID}`)

  if (isEmpty(secNameMemberInput.value) === false){
    Member.members[memberID-1].secondname = secNameMemberInput.value
  }
  if (isEmpty(firstNameMemberInput.value) === false){
    Member.members[memberID-1].firstname = firstNameMemberInput.value
  }
  if (isEmpty(midNameMemberInput.value) === false){
    Member.members[memberID-1].middleName = midNameMemberInput.value
  }
  if (isEmpty(gitMemberInput.value) === false){
    Member.members[memberID-1].github = gitMemberInput.value
  }
  if (isEmpty(phoneMemberInput.value) === false){
    Member.members[memberID-1].phone = phoneMemberInput.value
  }
  if (isEmpty(emailMemberInput.value) === false){
    Member.members[memberID-1].email = emailMemberInput.value
  }
  if (isEmpty(tgMemberInput.value) === false){
    Member.members[memberID-1].telegram = tgMemberInput.value
  }

  const checkCapitan = document.getElementById(`checkCapitan${memberID}`)
  Member.members[memberID-1].capitan = checkCapitan.checked

  renderMembers()
}
let findCapitan

function getMemberTemplate(member) {
  //функция, использующаяся в render; Передается команда(member), из которой берутся значения экземпляра класса member
  
  let capitanState
  if(member.capitan === true){
    capitanState = `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="checkCapitan${member.memberID}" checked >
    <label class="form-check-label" for="checkCapitan${member.memberID}"></label>
  </div>`
    
  }
  else{
    capitanState = `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="checkCapitan${member.memberID}" >
    <label class="form-check-label" for="checkCapitan${member.memberID}"></label>
    </div>`
} 

  let mob
  if(isEmpty(member.phone)){
    mob = "-"
  }
  else{
    mob = member.phone
  }
  let tg
  if(isEmpty(member.telegram)){
    tg = "-"
  }
  else{
    tg = member.telegram
  }
  let git
  if(isEmpty(member.github)){
    git = "-"
  }
  else{
    git = member.github
  }
  let mail
  if(isEmpty(member.github)){
    mail = "-"
  }
  else{
    mail = member.email
  }



  console.log(mob) //шаблон всей карточки
  return `
    <div class="card membercard">    
        <div class="card-body">
        
        <ul class="list-group list-group-horizontal ">
  <li class="list-group-item list-group-item-head allli startleftli">Фамилия</li>
  <li class="list-group-item list-group-item-value allli startrightli">
  
              <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${member.secondname}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="secNameMemberInput${member.memberID}"
              />
            </div>
            </li>
</ul>
        <ul class="list-group list-group-horizontal ">
  <li class="list-group-item list-group-item-head allli ">Имя</li>
  <li class="list-group-item list-group-item-value allli">
    <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${member.firstname}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="firstNameMemberInput${member.memberID}"
              />
            </div>
  </li>
</ul>
        <ul class="list-group list-group-horizontal ">
  <li class="list-group-item list-group-item-head allli ">Отчество</li>
  <li class="list-group-item list-group-item-value allli ">
    <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${member.middleName}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="midNameMemberInput${member.memberID}"
              />
            </div>
  </li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item list-group-item-head allli" >Капитан</li>
  <li class="list-group-item list-group-item-value allli">${capitanState}
  </li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item list-group-item-head allli" >GitHub</li>
  <li class="list-group-item list-group-item-value allli">
      <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${git}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="gitMemberInput${member.memberID}"
              />
            </div></li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item list-group-item-head allli" >Телефон</li>
  <li class="list-group-item list-group-item-value allli">
  <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${mob}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="phoneMemberInput${member.memberID}"
              />
            </div></li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item list-group-item-head allli" >Почта</li>
  <li class="list-group-item list-group-item-value allli">
<div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${mail}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="emailMemberInput${member.memberID}"
              />
            </div>
            </li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item list-group-item-head allli endleftli" >Телеграм</li>
  <li class="list-group-item list-group-item-value allli endrightli">    <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${tg}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="tgMemberInput${member.memberID}"
              />
            </div></li>
</ul>
        </div>
        <button
          type="button"
          class="btn btn-primary mb-3 butdel"
          id="delMemberBut"
          onclick="updateMember(${member.memberID});"
        >
          Сохранить изменения
        </button>
        <button
          type="button"
          class="btn btn-primary mb-3 butdel"
          id="delMemberBut"
          onclick="delMember(${member.memberID});"
        >
          Удалить участника
        </button>
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
                     <li><a class="dropdown-item" href="index2.html">Главная</a></li>
                    <li><a class="dropdown-item" href="${linkOfAuthorised}">Профиль</a></li>
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
  isCurrentLocation("http://127.0.0.1:5500/") === false )  &&
  isCurrentLocation("http://127.0.0.1:5500/index8.html")===false&&
  isCurrentLocation("http://127.0.0.1:5500/EmpIndex9.html")===false &&
  isCurrentLocation("http://127.0.0.1:5500/index7.html")===false
)  {
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
function getZtemplate(){
  return`
  <p>Z</p>
  `
}
function getVacancyTemplate(vacancy) { //возвращает шаблон вакансий

  let distantState

  if(vacancy.canDistant === true)
    {
    distantState = `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="checkCapitan${vacancy.id}" checked >
    <label class="form-check-label" for="checkCapitan${vacancy.id}"></label>
  </div>`
  }
  else{
    distantState = `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="checkCapitan${vacancy.id}">
    <label class="form-check-label" for="checkCapitan${vacancy.id}"></label> 
    </div>`
}
  return `
    <div class="card membercard">    
        <div class="card-body">
        
        <ul class="list-group list-group-horizontal ">
  <li class="list-group-item list-group-item-head allli startleftli">Название</li>
  <li class="list-group-item list-group-item-value allli startrightli">
  
              <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${vacancy.name}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="secNameMemberInput${vacancy.id}"
              />
            </div>
            </li>
</ul>
        <ul class="list-group list-group-horizontal ">
  <li class="list-group-item list-group-item-head allli ">Описание</li>
  <li class="list-group-item list-group-item-value allli">
    <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${vacancy.description}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="firstNameMemberInput${vacancy.id}"
              />
            </div>
  </li>
</ul>
        <ul class="list-group list-group-horizontal ">
  <li class="list-group-item list-group-item-head allli ">Скиллы</li>
  <li class="list-group-item list-group-item-value allli ">
    <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${vacancy.keyskills}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="midNameMemberInput${vacancy.id}"
              />
            </div>
  </li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item list-group-item-head allli" >Город</li>
  <li class="list-group-item list-group-item-value allli">
      <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${vacancy.city}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="gitMemberInput${vacancy.id}"
              />
            </div></li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item list-group-item-head allli" >Адрес</li>
  <li class="list-group-item list-group-item-value allli">
  <div class="input-group">
              <!--<span class="input-group-text" id="basic-addon1">LogIn</span>-->
              <input
                type="text"
                class="form-control"
                placeholder="${vacancy.address}"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="phoneMemberInput${vacancy.id}"
              />
            </div></li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item list-group-item-head allli" >Дистанционно</li>
  <li class="list-group-item list-group-item-value allli">${distantState}
  </li>
</ul>
        </div>
        <button
          type="button"
          class="btn btn-primary mb-3 butdel"
          id="delMemberBut"
          onclick="updateVacancy(${vacancy.id});">
          Сохранить изменения
        </button>
        <button
          type="button"
          class="btn btn-primary mb-3 butdel"
          id="delMemberBut"
          onclick="delVacancy(${vacancy.id});">
          Удалить вакансию
        </button>
    </div>`;
}
function getVacancyProfileTemplate(vacancy) { //возвращает шаблон вакансий

  let distantState

  if(vacancy.canDistant === true)
    {
    distantState = `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="checkCapitan${vacancy.id}" checked disabled>
    <label class="form-check-label" for="checkCapitan${vacancy.id}"></label>
  </div>`
  }
  else{
    distantState = `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="checkCapitan${vacancy.id} disabled">
    <label class="form-check-label" for="checkCapitan${vacancy.id}"></label> 
    </div>`
}
  return `
    <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Название</div>
      ${vacancy.name}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Описание</div>
      ${vacancy.description}
    </div>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Скиллы</div>
        ${vacancy.keyskills}
    </div>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Город</div>
      ${vacancy.city}
    </div>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Адрес</div>
      ${vacancy.address}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Возможно дистанционно</div>
      ${distantState}
    </div>
  </li>
</ol>
`
}
// this.memberID = memberID
// this.capitan = capitan
// this.secondname = secondname
// this.firstname = firstname
// this.middleName = middleName
// this.github = github
// this.phone = phone
// this.email = email
// this.telegram = telegram
function getMemberProfileTemplate(member) { //возвращает шаблон вакансий

    //функция, использующаяся в render; Передается команда(member), из которой берутся значения экземпляра класса member
  
    let capitanState
    if(member.capitan === true){
      capitanState = `<div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="checkCapitan${member.memberID}" checked disabled >
      <label class="form-check-label" for="checkCapitan${member.memberID}"></label>
    </div>` 
    }
    else{
      capitanState = `<div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="checkCapitan${member.memberID} disabled" >
      <label class="form-check-label" for="checkCapitan${member.memberID}"></label>
      </div>`
  } 
    let mob
    if(isEmpty(member.phone)){
      mob = "-"
    }
    else{
      mob = member.phone
    }
    let tg
    if(isEmpty(member.telegram)){
      tg = "-"
    }
    else{
      tg = member.telegram
    }
    let git
    if(isEmpty(member.github)){
      git = "-"
    }
    else{
      git = member.github
    }
    let mail
    if(isEmpty(member.github)){
      mail = "-"
    }
    else{
      mail = member.email
    }
  
  
  return `
    <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">ФИО</div>
      ${member.secondname + " " + member.firstname + " " + member.middleName}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Капитан</div>
      ${capitanState}
    </div>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">GitHub</div>
      <a href="${git ==="-" ? "" : git} " target="_blank">${git}</a>
    </div>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Телефон</div>
     ${mob}
    </div>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Почта</div>
      ${mail}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Телеграмм</div>
      <a href="${tg ==="-" ? "" : ("https://t.me/"+deleteDog(tg))} " target="_blank">${tg}</a>
    </div>
  </li>
</ol>
`
}
function deleteDog(str){
  return str.replace("@", "")
}
if(isCurrentLocation("http://127.0.0.1:5500/EmpIndex9.html")===true){

const empNameInput = document.getElementById('empNameInput')
const empEmailInput = document.getElementById('empEmailInput')
const empPassInput = document.getElementById('empPassInput')
const addvacancy = document.getElementById('addvacancy')
const nameVacancy = document.getElementById('nameVacancy')
const skillsVacancy = document.getElementById('skillsVacancy')
const cityVacancy = document.getElementById('cityVacancy')
const addressVacancy = document.getElementById('addressVacancy')
const flexSwitchDistantVac = document.getElementById('flexSwitchDistantVac')
  
Vacancy.vacancies = []

const vacancy1 = new Vacancy(
  1,
  'Back-end разработчик',
  'чтоб крутой был пж',
  'GitHub, Golang, SQL',
  'Лос-Анджелес',
  'подворотня',
  true
)

Vacancy.vacancies.push(vacancy1) ///пуш добавить в массив!!!!!
renderVacancy()
addvacancy.onclick = function(){

if(isEmpty(nameVacancy.value) === false && isEmpty(skillsVacancy.value) === false && isEmpty(cityVacancy.value) === false && isEmpty(addressVacancy.value) === false)
{
  let canDistant

    if(flexSwitchDistantVac.checked === true){
      canDistant = true
    }
    else{
      canDistant = false
    }

    const lengthVacancy = Vacancy.vacancies.length+1 //сделали айди вакансии (+1 к размеру массива)
    
    alert('Вакансия добавлена')

    const newVacancy = new Vacancy( //новая вакансия, получает значения
      lengthVacancy,
      nameVacancy.value,
      "",
      skillsVacancy.value,
      cityVacancy.value,
      addressVacancy.value,
      canDistant
    )
    Vacancy.vacancies.push(newVacancy)
    renderVacancy()
  

}
else {
  //alert('Введите оставшиеся поля')
} 
}

function renderVacancy(){ //отрисовывает шаблон в просмотре вакансий

  bodyMembers.innerHTML = ""

  if(Vacancy.vacancies.length === 0){
    bodyMembers.innerHTML = "<p>Вакансий нет</p>"
  }
  else {
    for (let i = 0; i < Vacancy.vacancies.length; i++){
      bodyMembers.insertAdjacentHTML(
        "beforeend",
        getVacancyTemplate(Vacancy.vacancies[i]))
    }
  }
}




function updateVacancy(id){
  const secNameMemberInput = document.getElementById(`secNameMemberInput${id}`)
  const firstNameMemberInput = document.getElementById(`firstNameMemberInput${id}`)
  const midNameMemberInput = document.getElementById(`midNameMemberInput${id}`)
  const gitMemberInput = document.getElementById(`gitMemberInput${id}`)
  const phoneMemberInput = document.getElementById(`phoneMemberInput${id}`)

  if (isEmpty(secNameMemberInput.value) === false){
    Vacancy.vacancies[id-1].name = secNameMemberInput.value
  }
  if (isEmpty(firstNameMemberInput.value) === false){
    Vacancy.vacancies[id-1].description = firstNameMemberInput.value
  }
  if (isEmpty(midNameMemberInput.value) === false){
    Vacancy.vacancies[id-1].keyskills = midNameMemberInput.value
  }
  if (isEmpty(gitMemberInput.value) === false){
    Vacancy.vacancies[id-1].city = gitMemberInput.value
  }
  if (isEmpty(phoneMemberInput.value) === false){
    Vacancy.vacancies[id-1].address = phoneMemberInput.value
  }

  const checkCapitan = document.getElementById(`checkCapitan${id}`)
  Vacancy.vacancies[id-1].canDistant = checkCapitan.checked

  renderVacancy()
}

  function delVacancy(id){
    console.log("udalen", id)
    Vacancy.vacancies.splice(id-1,1) //сплайс - удаление по айди, второй аргумент - длина удаления 
    renderVacancy()
  }

  regisrtationBut.onclick = function(){

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (isEmpty(empNameInput.value) === false && isEmpty(empEmailInput.value) === false && isEmpty(empPassInput.value) === false) {
  
      if(emailPattern.test(empEmailInput.value)){
  
        let isComandName = checkComandName(empNameInput.value)
        if(isComandName === false){
          let isComandEmail = checkComandEmail(empEmailInput.value)
          if(isComandEmail === false){
          
            // this.id = id
            // this.isEmployer = isEmployer
            // this.teamName = name
            // this.email = email
            // this.password = password
            // this.description =description
            // this.banner = banner
            // this.link = link
            // this.rate =  rate
            // this.outsourcelink = outsourcelink
            // this.vacancies = vacancies

                  const comanda = new Employer(
                    Employer.companies.length + 1,
                    true,
                    empNameInput.value,
                    empEmailInput.value,
                    empPassInput.value,
                    '',
                    '/img/banners/dstu.jpg',
                    'index9',
                    0,
                    'yandex.ru',
                    Vacancy.vacancies,
                  )
                  Employer.companies.push(comanda)
                  window.location.href = 'index.html';

          }
          else{
            alert("Такая почта уже зарегистрирована")
          }
        }
        else{
          alert('Команда с таким названием уже существует')
        }
      }
      else{
        alert('Некорректный email-адрес')
      }
    }
  
    else{
      alert("Заполните пустые строки");
    }
  }
  
  const employer = new Employer(
    1,
    true,
    'Yandex',
    'yandex@yandex',
    'yandexsuper111'
  )

  Employer.companies = []
}
  //логика регистрации работодателя
  //324 строка пример
  //добавить константы кнопок и инпутов как в прошлый раз, дальше работать с ними. Функция валидации полей тоже есть, применяй
if(isCurrentLocation("http://127.0.0.1:5500/index7.html")){
  renderTeamName() 
  const unlogbut = document.getElementById("unlog");
  unlogbut.onclick = function () {
    //teamStorage.setItem("succesfulSign", "false");
    teamStorage.clear()
    //window.location.href = 'index.html'
    renderTeamName();
  };
  const profBody = document.getElementById("profBody")
  
  renderModal(teamStorage.getItem("isEmployee"))
  const bodyMembersProfile = document.getElementById("bodyMembersProfile")
   if(teamStorage.getItem("isEmployee")==="false"){
    renderTeamProfile()
    renderMembersInProf()
   }
   else{
      renderEmployerProfile()
      renderVacanciesInProf()
   }
 
}
function renderMembersInProf(){
  let team = getTeamorEmpById(teamStorage.getItem("authorizedTeam"), teamStorage.getItem("isEmployee")) //получаем команду или работодателя по id и состоянию teamStorage(лок хранилище)
  
  bodyMembersProfile.innerHTML = ""
  for(const member in team.members){
    console.log(team.members[member])
    bodyMembersProfile.insertAdjacentHTML("beforeend", 
      getMemberProfileTemplate(team.members[member])
    )
  }
}
function renderVacanciesInProf(){
  let employer = getTeamorEmpById(teamStorage.getItem("authorizedTeam"), teamStorage.getItem("isEmployee")) //получаем команду или работодателя по id и состоянию teamStorage(лок хранилище)
  
  bodyMembersProfile.innerHTML = ""
  for(const vacancy in employer.vacancies){
    console.log(employer.vacancies[vacancy])
    bodyMembersProfile.insertAdjacentHTML("beforeend", 
      getVacancyProfileTemplate(employer.vacancies[vacancy])
      //getZtemplate()
    )
  }
}
function renderEmployerProfile(){
  let employer = getTeamorEmpById(teamStorage.getItem("authorizedTeam"), teamStorage.getItem("isEmployee")) //получаем команду или работодателя по id и состоянию teamStorage(лок хранилище)
  profBody.innerHTML = ""
  profBody.insertAdjacentHTML("beforeend", getEmployerProfileTemplate(employer))
}

function renderTeamProfile(){
  let team = getTeamorEmpById(teamStorage.getItem("authorizedTeam"), teamStorage.getItem("isEmployee")) //получаем команду или работодателя по id и состоянию teamStorage(лок хранилище)
  profBody.innerHTML = ""
  profBody.insertAdjacentHTML("beforeend", getrenderTeamProfileTemplate(team))
}
function renderModal(isEmployer){
  modal.innerHTML = ""
  if(isEmployer == "false"){
    modal.insertAdjacentHTML("beforeend",getRenderModalTemplate()) 
  }
  else{
    modal.insertAdjacentHTML("beforeend",getRenderModalEmployerTemplate()) 
  }
}
function getRenderModalTemplate(){
 return`
     <div class="modal fade" tabindex="-1" id="checkMembers">
        <div class="modal-dialog modal-dialog-w100">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Участники</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="bodyMembersProfile">
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
              </div>
              </div>
              </div>
              </div>
 `
}
function getRenderModalEmployerTemplate(){
  return`
      <div class="modal fade" tabindex="-1" id="checkMembers">
         <div class="modal-dialog modal-dialog-w100">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title">Вакансии</h5>
               <button
                 type="button"
                 class="btn-close"
                 data-bs-dismiss="modal"
                 aria-label="Close"
               ></button>
             </div>
             <div class="modal-body" id="bodyMembersProfile">
               
             </div>
             <div class="modal-footer">
               <button
                 type="button"
                 class="btn btn-primary"
                 data-bs-dismiss="modal"
               >
                 Закрыть
               </button>
               </div>
               </div>
               </div>
            </div>
  `
 }
function getEmployerProfileTemplate(employer){
  return `
  <div class="AboutMyself border d-inline-flex ">
   <div class="card" style="width: 800px;">
     <div class="card-cont">
         <!--сюда фото-->
         <img class="card-img-top" src="${employer.banner}" alt="Profile_Photo">
     </div>
     <div class="card-body">
         <div class="card-text" id="Nazvaniekomandy">${employer.teamName}</div>
         <div class="card-text" id="NazvaniePochty">${employer.email}</div>
         
     </div>
 </div>
   <div class="InfoProfPonyal d-inline-flex p-5">
     <div class="container">
       <div class="row">
           <div class="col">
               <div class="card">
                   <div class="card-header">
                       <button class="btn btn-info" data-bs-toggle="collapse" data-bs-target="#info3" aria-expanded="false" aria-controls="info3">Описание</button>
                   </div>
                   <div class="collapse" id="info3">
                       <div class="card-body">
                           ${employer.description}
                       </div>
                   </div>
               </div>
           </div>
           <div class="col">
               <div class="card">
                   <div class="card-header">
                       <button class="btn btn-info" data-bs-toggle="collapse" data-bs-target="#info4" aria-expanded="false" aria-controls="info4">Внешний источник</button>
                   </div>
                   <div class="collapse" id="info4">
                       <div class="card-body">
                          <a href=" ${employer.outsourcelink}" target="_blank">${employer.outsourcelink} </a>
                       </div>
                   </div>
               </div>
           </div>
           <div class="col">
               <div class="card">
                   <div class="card-header">
                       <button class="btn btn-info" data-bs-toggle="modal"
                       data-bs-target="#checkMembers">Вакансии</button>
                   </div>
                   <div class="collapse" id="info5">
                       <div class="card-body" id="vacancyInProf">
 
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   </div>
  </div>
   `
}
function getrenderTeamProfileTemplate(team){
    return `
 <div class="AboutMyself border d-inline-flex ">
  <div class="card" style="width: 800px;">
    <div class="card-cont">
        <!--сюда фото-->
        <img class="card-img-top" src="${team.banner}" alt="Profile_Photo">
    </div>
    <div class="card-body">
        <div class="card-text" id="Nazvaniekomandy">${team.teamName}</div>
        <div class="card-text" id="NazvaniePochty">${team.teamEmail}</div>
        
    </div>
</div>
  <div class="InfoProfPonyal d-inline-flex p-5">
    <div class="container">
      <div class="row">
          <div class="col">
              <div class="card">
                  <div class="card-header">
                      <button class="btn btn-info" data-bs-toggle="collapse" data-bs-target="#info3" aria-expanded="false" aria-controls="info3">Описание</button>
                  </div>
                  <div class="collapse" id="info3">
                      <div class="card-body">
                          ${team.description}
                      </div>
                  </div>
              </div>
          </div>
          <div class="col">
              <div class="card">
                  <div class="card-header">
                      <button class="btn btn-info" data-bs-toggle="collapse" data-bs-target="#info4" aria-expanded="false" aria-controls="info4">Капитан</button>
                  </div>
                  <div class="collapse" id="info4">
                      <div class="card-body">
                          ${team.capitan.secondname + " " + team.capitan.firstname}
                      </div>
                  </div>
              </div>
          </div>
          <div class="col">
              <div class="card">
                  <div class="card-header">
                      <button class="btn btn-info" data-bs-toggle="modal"
                      data-bs-target="#checkMembers">Участники команды</button>
                  </div>
                  <div class="collapse" id="info5">
                      <div class="card-body" id="membersInProf">

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
 </div>
  `
}