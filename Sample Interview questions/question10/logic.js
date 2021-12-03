// Q. Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.


var obj1 = {
    name : 'Ram',
    age : '25',
    yoga : 'Treta'
  }
  
  var obj2 = {
    name : 'Krishna',
    age : '31',
    yoga : 'Dwapar'
  }
  
  if(obj1.age > obj2.age){
    console.log(obj1.name)
  }
  else{
    console.log(obj2.name)
  }  