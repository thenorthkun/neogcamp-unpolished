// Q. Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more power.


var obj1 = {
    name : 'Ram',
    power : '2500',
    yoga : 'Treta'
  }
  
  var obj2 = {
    name : 'Krishna',
    power : '2325',
    yoga : 'Dwapar'
  }
  
  function compare(obj1,obj2){
    if(obj1.power > obj2.power){
      console.log(obj1.name)
    }
    else{
      console.log(obj2.name)
    }
  }
  
  compare(obj1,obj2)