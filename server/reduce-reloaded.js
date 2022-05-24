/*const total = [1,2,3,4];

let sum = 0;
for (let index = 0; index < total.length; index++) {
    const element = total[index];
    sum = sum + element;
}
console.log(sum);

const rta = total.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);*/

const items = [1,3,2,3];

const rta =items.reduce((obj, item)=> {
    //code
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta);

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
    {
        name: "Zulema",
        level: "hight",
    },
];

const rta1 = data.map(item => item.level).reduce((obj, item)=> {
    //code
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta1);