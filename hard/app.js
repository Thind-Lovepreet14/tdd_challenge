/* HARD: An express app which has 3 api endpoints. One end point takes in two arrays, 
merges and sorts them in ascending order, and returns the result. A second end point 
takes in any string as a single argument, and returns the string in reverse order. 
The third api returns the current date and time */

const express = require('express');
const app = express();

//takes 2 arrays, merges, and sorts in ascending order
const arr1 = ['apple', 'banana','kiwi'];
const arr2 = ['carrot', 'potato', 'corn'];
const combineArray = arr1.concat(arr2).sort();

//reverses a string
let str = 'name';
const reversedstr = str.split('').reverse().join('');

//prints current time and date
const currentDate = new Date();
const date = `${currentDate.getFullYear()}/${(currentDate.getMonth()+ 1)}/${currentDate.getDate()}`;
const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
const dataTime = date + ' ' +time;

//Testing to see the server works
app.get('/', (req, res) => {
    res.send('Hello World!!!!!!');
});

//endpoint which combines array
app.get('/api/food', (req,res) => {
    res.send(combineArray);
})

//endpoint which reverses string
app.get('/api/string', (req,res) => {
    res.send(reversedstr);
})

//endpoint which prints current time and date
app.get('/api/time', (req,res) => {
    res.send(dataTime);
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

