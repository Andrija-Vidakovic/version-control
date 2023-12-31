(function () {
  console.log("Zdravo svete!!");
})();

let regx = /".+?"/g; 
let regx1 = /"[^"]+"/g
let str = 'a "witch" and her "broom" is "test"one';
console.log(str.match(regx1));