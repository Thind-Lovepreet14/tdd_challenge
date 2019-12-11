/* For each app described below, write the app and 3 unit tests to demonstrate that the app works 
as expected. Be sure each app is properly composed with a package.json. The unit tests should be 
developed using mocha and chai and should include both positive and negative tests

EASY: An app with a function which returns the number of characters in a string
 and returns the first character in the string */


//function which returns the number of characters in a string and returns the first character in the string
 const numChar = function(str) {
     if(typeof str !== 'string') {
        throw new Error('The parameter must be a string')
     }
     return {length: str.length,location: str.charAt(0)}
 }

 module.exports = numChar;