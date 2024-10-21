import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

function askQuestion(yourQuestion, cb){
    rl.question(yourQuestion, answer=>{
        cb(answer)
    })
}

let name = ''
let age = ''

askQuestion("jak masz na imie ", answerName =>{
    name=answerName

    askQuestion("ile masz lat ", answerAge =>{
        age=answerAge
        console.log("twoje imie to ", name `masz ${age}`)

        rl.close()
    })
})