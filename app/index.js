const express =  require('express')
const test = require('./new')


const app = express()


app.get('/', (req, res) => {
    res.json(test)
});

//const Car = require('./node')


// const test = new Car()
// const noval = new Car({color: "yellow"})


// console.log(test);
// console.log(noval);






module.exports = app

