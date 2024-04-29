const reloadButton = document.getElementById('reload');
class Team{
    constructor(email, capitan, password, members){
        this.teamEmail = email
        this.capitan = capitan
        this.password = password
        this.members = members
    }
    getLog(){
        return this.teamEmail
    }
    getPass(){
        return this.password
    }
}
Team.instanes = []

teamMembers = ["Vera Kostenko", "Andrey Hutornoy", "Nikita Eliseev"]
let habsyTeam = new Team("hutornoyaa@gmail.com",  "Siderea", "Habsy2024", teamMembers )
Team.instanes.push(habsyTeam)
console.log(Team.instanes)
const loginBut = document.getElementById('loginBut')

let succesful = false

loginBut.onclick = function() {
    let email = document.getElementById('emailInput').value
    let password = document.getElementById('passInput').value
    if(isEmpty(email) === false && isEmpty(password) === false) {
        
        for(const team in Team.instanes){
            let emailTeam = Team.instanes[team].getLog()
            let passwordTeam = Team.instanes[team].getPass()
            console.log(emailTeam, passwordTeam)
            if(email === emailTeam && passwordTeam === password){
                window.location.href = 'index2.html';
                return succesful = true

            }
        }
        if(succesful === true){
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

function isEmpty(str) {
    if (str === '') 
      return true      
    else return false
  }



function render() {
    listElement.innerHTML = ''
    if(notes.length === 0){
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++){

        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))

    }

}
render()




reloadButton.onclick = function () {
    if(inputElement.value.length === 0){
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }

    notes.push(newNote)
    render()
    inputElement.value = ''
}
function getNoteTemplate(note, index){
    return  `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
        >
        <span class = "${note.completed ? 'text-decoration-line-through':''}">${note.title}</span>
        <span>

         <span class="btn btn-small btn-${note.completed ? 'warning': 'success'}" data-index = "${index}" data-type = "toggle">&check;</span>

          <span class="btn btn-small btn-danger" data-index = "${index}" data-type = "remove">&times;</span>

        </span>

      </li>`
}
