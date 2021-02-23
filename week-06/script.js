const fruits = ['apples', 'mango', 'grapes', 'bananas'];
// zero - indexed

for(let i = 0; i < fruits.length; i++){
  let fruit = fruits[i];
}

var age = 40;
var height = 8;

if(age < 8){
  console.log("Check out the merry-go-round")
} else if(age >= 8 && age < 65 && height > 4.5){
  console.log("Check out the roller coaster")
} else {
  console.log("Check out the lazy river")
}

let noun = 'cat';
let verb = 'run';
let adjective = 'abundantly';

// concatenation
var sentence = 'My ' + noun + ' leaps ' + adjective + ' '

// string templating
// let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`
console.log(sentence)