
// 1. Get the element with an ID of 'first' using querySelector
let first = document.querySelector('#first');
console.log(first)

// 2. Get the elements with a class of 'second' with querySelector
let second = document.querySelector('.second')
console.log(second)

// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?
let third = document.querySelectorAll('.second')
console.log(third)

// 4. Get the span element using querySelector
let span = document.querySelector('span')
console.log(span)

// 5. Get multiple span elements using querySelectorAll
let multiple = document.querySelectorAll('span')
console.log(multiple)

// 6. Select only "a" tags *directly inside* of a div (no grandchildren).
let no_grandchildren = document.querySelector('div > a')
console.log(no_grandchildren)

//--------

// 2. Print just the text of `first`.
console.log(first.innerText);
// 3. Print the HTML of `first`.
console.log(first.innerHTML)
// 4. Get the section tag from the page and save it to a variable.
let section = document.querySelector('section')
console.log(section)
// 5. Print the text content of the section tag
console.log(section.innerText)

// 6. Print the HTML content of the section tag
console.log(section.innerHTML)