
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
                succesful = true
            }
            
        }
        if(succesful === true){
            console.log("succesful")
        }
        else{
            console.log("Неверный логин или пароль в итерации")
        }
    }
}

function isEmpty(str) {
    if (str === '') 
      return true      
    else return false
  }