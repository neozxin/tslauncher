import jsonData from './json-data.json';
import es6Module from './es6-module';

const info = `info: ${es6Module}` + 'I`m good';
const doubleMe = (a) => `doubled: ${a} ${a}`;
const testObj = {
  'onetwothree': 123,
  'one-two-three': 1 - 2 - 3,
};
debugger;
console.log(jsonData, es6Module, doubleMe('abc'), testObj, info);
