solution = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
    
];

const tax = solution.map(item => {
    return {
        ...item,
        taxes: item.price * .19
    }
});
console.log('Original', solution);
console.log('Taxes', tax);