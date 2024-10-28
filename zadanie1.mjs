import fs from 'fs'
                

fs.watch("./", (eventType, filename)=>{
    if(filename){
        try{
        fs.appendFileSync(`wykryto zdazenie ${eventType} w pliku ${filename}\n`)
    } catch (error){
        console.error(`blad zapisu`)
    }
    }
})

console.log("nasluchwanie zmian")