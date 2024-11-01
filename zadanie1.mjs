import fs from 'fs'
                
fs.watch("./", (eventType, filename)=>{
    if(filename){
        try{
        fs.appendFileSync('./zapis',`wykryto zdazenie ${eventType} w pliku ${filename}\n`)
    }catch(error){
        console.error(`blad zapisu`)
    }

    }else{
        try{
            fs.appendFileSync('./zapis',`zdazenia ${eventType}\n`)
            console.log(`zapisano`)
        }catch(error){
            console.error(`blad zapisu`)
        }
    }
})

console.log("nasluchwanie zmian")