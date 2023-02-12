var person = {
    myName: "Alec",
    age: 30,
    height: "5ft 9in",
    location: "Philadelphia"

}

console.log(person);

console.log(person.age);

person.gender = "male";

person.likesCrabCakes = true;

console.log(person);

console.log(Object.keys(person));

//"cd turing_work/0mod" 
//"mkdir pairing3"
//cd pairing3
//"touch objectLiteralPractice.js"
//"github objectLiteralPractice" 
//"git init" 
//"git add objectLiteralPractice.js" 
//"git commit -m "Initial Commit"
//"git remote add origin"
//"git push -u origin main"

var person = {
    name: "Victor Sriqui",
    age: 37,
    language: "English",
    nflTeam: "Saints"
  }
  
  // print whole object
  console.log(person);
  //print key-age's value
  console.log(person.age);
  
  //git add objectLiteralPractice.js
  //git commit -m "Add object person"
  //git push
  
  //add key-value pair
  person.smellsBad = true;
  //add key-value pair
  person.likesPancakes = true;
  
  // print out all the keys in object
  console.log(Object.keys(person))
  
  //run in terminal node objectLiteralPractice.js
  
  //git add objectLiteralPractice.js
  //git commit -m "Add object person"
  //git push
  
  
  
  
  //"cd turing_work/0mod" 
  //"mkdir pairing3" 
  //cd pairing3
  //"touch friends.js"
  //"github objectLiteralPractice"
  //"git init" 
  //"git add objectLiteralPractice.js" 
  //"git commit -m "Initial Commit"
  //"git remote add origin"
  //"git push -u origin main
  
  var numbers = [2, 17, 25, 32, 45, 52, 69, 72];
  
  
  //Methods
  console.log(numbers.filter(number => number > 30));
  
  console.log(numbers.filter(number => number < 60));
  
  //"git add objectLiteralPractice.js" 
  //"git commit -m "Commit Methods"
  //"git push"
  
  //Functions
  
  function isBigEnough(value) {
    return value > 30;
  }
  
  var filtered1 = numbers.filter(isBigEnough);
  console.log(filtered1);