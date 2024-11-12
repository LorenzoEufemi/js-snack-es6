/**
 * dato un array e dato un min e max la funzione crea un nuovo array con gli elementi del vecchio array dall'indece min all'indice max
 *
 * @param {array} array
 * @param {number} min
 * @param {number} max
 * @returns {array}
 */
function filterArray (array ,min ,max ){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if ([i] >= [min] && [i] <= [max] ) {
            newArray.push(array[i])
        }
    }
    return newArray
}

// verifica

const numeri =[10,20,30,40,50,60]

const result = filterArray(numeri, 0, 2)

console.log(result)