const Car =  require('./node');



const cons = new Car({
    color:"blue", 
    door: "four",
    specs: [{model: "toyota", seats: "four"}]
});

const test = new Car()
const noval = new Car({color: "yellow"})

console.log(cons);
console.log(test);
console.log( noval );


