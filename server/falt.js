const matriz = [
    [1,2,3],
    [4,5,6 ,[1,2]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const element = matriz[i];
    for (let j = 0; j < matriz.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
    
}
console.log('for', newArray);

const rta = matriz.flat(3);
console.log('flat', rta);