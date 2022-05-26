const array = [{age: 1}, {age:2}]; 
const rta = array.map(item => {   
    item.name = 'My name';
    return item; 
})
console.log(rta);
console.log(array);

const array1 = [1,1,1,1,1];
const rta1 = array1.reduce((total, item) => total + item, 0);
console.log(rta1);

const array2 = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta3 = array2.flat();
console.log(rta3);

const array3 = ['a', 'bb', 'ccc']; 
const rta4 = array3.map(item => item.length);
console.log(rta4);