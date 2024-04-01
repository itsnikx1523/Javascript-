const name = "Nikhil"
const repoCount = 50 

// console.log(name + repoCount + " Value");

console.log(` Hello my name is  ${name} and my repo count is ${repoCount}`);

const gameName = new String( ' Nikx_the_bug')

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.substring(2 , 10));
console.log(gameName.split(4,10));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString =  gameName.substring(2,6);
console.log(newString); 

const anotherString = gameName.slice(4,7);
console.log(anotherString);

const newStringOne = "   nikhil  "
console.log(newStringOne.trim());

const url = "https://nikx_the_bug/nikx%20thebug";

console.log(url.replace('%20', '-'));
console.log(url.includes( 'thebug'));

console.log(gameName.split(' ' , 3)); //[ '', 'Nikx_the_bug' ]

















































/* All String Functions to try hand on
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
" Nikx_the_bug" */