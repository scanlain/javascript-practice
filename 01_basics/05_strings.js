let myStr = new String("Let's learn string methods in javascript")

//.length -> returns the length of the string
console.log(myStr.length)

//.charAt() -> takes an integer paramter and gives character present at that location. Doesn't take -ve integers.
console.log(myStr.charAt(9))

//.charCodeAt() -> returns the ASCII value of character present at defined index
console.log(myStr.charCodeAt(9))

//.at() -> takes an integer paramter and gives character present at that location. It accepts -ve values and starts from reverse
console.log(myStr.at(-1))

//.endsWith() -> takes a string parameter and checks wether the string ends with it or not
console.log(myStr.endsWith('script'))

//.endsWith() -> takes a string parameter and checks wether the string starts with it or not
console.log(myStr.startsWith('let'))

//.includes() -> takes a string parameter and checks wether the string is present or not
console.log(myStr.includes('learn'))

//.indexOf() -> takes a string parameter and returns the first occurence index of it if present else returns -1
console.log(myStr.indexOf('in'))

//.lastIndexOf() -> takes a string parameter and returns the last occurence index of it if present else returns -1
console.log(myStr.lastIndexOf('in'))

//.padEnd() -> pads the specified string at the end of the string until it reaches the specified length
console.log(myStr.padEnd(43, '*'))

//.padStart() -> pads the specified string at the end of the string until it reaches the specified length
console.log(myStr.padStart(45, '--'))

//.repeat() -> repeats the entire string and return a new String
console.log(myStr.repeat(2))

//.replace() -> replaces the 1st occurence of the  string with specified string
console.log(myStr.replace('in', 'of'))

//.replaceAll() -> replaces all the occurances of the string with specified string
console.log(myStr.replaceAll('in', 'of'))

//.slice() -> returns a new string between specified indexes without modifying original string
console.log(myStr.slice(-10, -6))

//.split() -> returns a array of words according to specified pattern, we can also give the limit upto much to split
console.log(myStr.split(' ', 3))

//.subString() -> returns an string between indexes
console.log(myStr.substring(4, 23))

//.toLowerCase() -> returns string in small case
console.log(myStr.toLowerCase())

//.toLocaleLowerCase() -> returns this string converted to lower case, according to any locale-specific case mappings
console.log(myStr.toLocaleLowerCase())

//.toUpperCase() -> returns string in upper case
console.log(myStr.toUpperCase())

//.toLocaleUpperCase() -> returns this string converted to upper case, according to any locale-specific case mappings
console.log(myStr.toLocaleUpperCase())

//.trim() -> removes leading and lagging whitespaces
//.trimEnd() ->  removes lagging whitespaces
//.trimStart() -> removes leading whitespaces
// valueOf() ->  values returns this string value.

