const SPECS = require('./attr');

const NOVALUE = {
    color: "browm",
    door: "three",

get models(){
    const specs = []; 
    SPECS.forEach(spec => {
        const whatmodel  = spec.model;
        const numseats = spec.seats ;

        const seat = numseats[Math.floor(Math.random() * numseats.length)]

        specs.push({whatmodel, seat});

    });
    return specs;
   
}
}
class Car{

constructor({color, door, specs} ={}){
    this.color = color || NOVALUE.color;
    this.door = door || NOVALUE.door;
    this.specs = specs || NOVALUE.models

}


}



module.exports = Car;