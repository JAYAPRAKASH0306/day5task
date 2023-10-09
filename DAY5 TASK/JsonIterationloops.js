var player=[{
    "name":"jp",
    "age":24,
    "qulification":"MBA",
    "yearOfpasing" : 2023
 }];
 for(i=0;i<player.length;i++){
    console.log(player[i]);
 }

// For in loop JSON :
var person = {
    "fname": "dinesh",
    "lname": "Kumar",
    "age": 24
 }; 
 for (let x in person) {
    console.log(x + " : "+ person[x])
 }

// for of loop JSON :

let JSON=[{
    "name":"jp",
    "age":24,
    "qulification":"MBA",
    "yearOfpasing" : 2023
}];
for(let element of JSON){
   console.log(element)
}
// forEach loop JSON :
let Each=[{
    "name":"jp",
    "age":24,
    "qulification":"MBA",
    "yearOfpasing" : 2023,
   "skills":["  Full Stack developmenr","MERN stack developer"]
}];
Each.forEach(X => {
   console.log(X)
});