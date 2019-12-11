/* MEDIUM: An app which validates a user Id against an in-memory db of users authorized to access the application.
 This function should be written asynchronously (it returns a Promise). If the userID is present in the 
 database, the function returns the boolean true, otherwise it parses the userID string to determine if the string is 
valid. A valid string for a userID is a minimum of 8 characters, at least 1 special character and at least 1 capital letter. 
If the userID passes the parsing test, the function returns a message stating that the userID was not found, but asking the user 
if they would like to register for the site. If the userID fals the parsing test, a message is returned notifying the user that they
 are not authorized to access the site */

 //db of userID
 let coolPeople = [
    {userID: 'Chowtime#'},
    {userID: 'unkindGizmo!'}, 
    {userID: '$HeliumHopper'}
    ];


const userIDChecker = function(user) {
    return new Promise((resolve, reject) => { // represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
        const check = coolPeople.find(u => u.userID === user) //check to see if userID matches the one in db
        if(check) { //if user is found in the db
            resolve(true) //meaning that the operation completed successfully.
        }
        else if(!check) { //if user is not found in the db
            if(/[A-Z]/.test(user) && /[!@#\$%\^\&*\)\(+=._-]/.test(user) && user.length >= 8){ //regex to confirm userID matches requirements
            resolve('UserID was not found. Would you like to register for the site?')
        }
        else {
            reject('User not authorized to access the site.') //meaning that the operation failed.
            }
        }
    })
}

module.exports = userIDChecker;

