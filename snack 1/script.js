// dati
const bikes = [
    { nome: "bici1", peso: 15 },
    { nome: "bici2", peso: 8 },
    { nome: "bici3", peso: 22 },
    { nome: "bici4", peso: 6 },
    { nome: "bici5", peso: 10 }
]
// escuzione
let bikeLight = bikes[0];
for (let i = 0; i < bikes.length; i++) {
    const curBikes = bikes[i];
    if (bikeLight.peso > bikes[i].peso) {
        bikeLight = bikes[i]
    }

}
// output
console.log("La "+ bikeLight.nome + " è la bici più leggera con "+ bikeLight.peso+"kg")