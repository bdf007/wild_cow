// import cowsay from "cowsay";
// import campusObject from "../information.js"
const cowsay = require('cowsay');
const { campusObject } = require('./information.js');


console.log(cowsay.say({ text: (`I'm ${campusObject.name} from ${campusObject.campus}`) }));