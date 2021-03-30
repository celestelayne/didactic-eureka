let nouns = ['heart', 'rainbow', 'ocean'];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

// pick random element
let randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
let randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
let randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)]


// string templating

console.log(randomNoun, randomVerb, randomAdj)

console.log('My ' + randomNoun + ' leaps' + randomAdj + 'when I')

console.log(
  `My ${randomNoun} leaps ${randomAdj} when I ${randomVerb} a rainbow in the sky:`
);