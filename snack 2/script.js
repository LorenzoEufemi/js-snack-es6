// dati
const squadre = [
    { nome: "Squadra 1", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Squadra 2", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Squadra 3", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Squadra 4", puntiFatti: 0, falliSubiti: 0 }
]
// esecuzione
const newArray = [];

for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor(Math.random() * 100);
    squadre[i].falliSubiti = Math.floor(Math.random() * 80);
    newArray.push(squadre[i].nome + " " + squadre[i].falliSubiti)
}
// output
console.log(newArray)