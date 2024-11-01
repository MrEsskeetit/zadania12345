import readline from 'readline';
import { promises as fs } from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

async function main() {
    try {
        const name = await askQuestion("Jak masz na imię? ");
        const surname = await askQuestion("Jakie masz nazwisko? ");
        const age = await askQuestion("Ile masz lat? ");

        const userData = {
            name,
            surname,
            age,
        };

        await fs.writeFile('zadanie2.json', JSON.stringify(userData, null, 2));
        console.log('Dane zostały zapisane do pliku userData.json');

        const data = await fs.readFile('zadanie2.json', 'utf-8');
        const parsedData = JSON.parse(data);
        console.log('Odczytane dane:', parsedData);
    } catch (err) {
        console.log('Wystąpił błąd:', err);
    } finally {
        rl.close();
    }
}

main();
