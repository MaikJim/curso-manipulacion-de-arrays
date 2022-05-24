const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
console.log('original', orders)
const rta = orders.map(item => item.total)
console.log('rta', rta);
//agregar un nuevo elemento a nuestro array
//const rta2 = orders.map(item => {
//    item.tax = .19;
//    return item;
//});
//console.log('rta2', rta2);
//Forma correcta no muta mi array original
const rta3 = orders.map(item => {
    item.tax = .19;
    return {
        ...item,
        tax: .19
    }
});
console.log('rta3', rta3)