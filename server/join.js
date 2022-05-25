const elements = ["Fire", "Air", "Water"];

let rtafinal = ''
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtafinal = rtafinal + element + separator;
}
console.log(rtafinal);

const rta =elements.join('--');
console.log('join', rta);

const title = 'Curso de manipulacion de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);