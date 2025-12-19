// Modules
const {john, peter}= require('./4-name');
const sayHi = require('./5-utils');
const data= require('./6-alternative');

require('./7-mind-grenade');
console.log(typeof(module));
/*
sayHi(john)
sayHi(peter);

  hi(john);
  hi(peter);
  sayHi('mohsin');
  sayHi(john);
  sayHi(peter);
  */