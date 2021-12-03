// Q. Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

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

function namePower(obj1,obj2){
  let power1 = obj1.name.length * 35;
  let power2 = obj2.name.length * 35;
  if(power1 > power2){
    console.log(obj1.name)
  }
  else{
    console.log(obj2.name)
  }
}

namePower(obj1,obj2)


function totalPower(obj1,obj2){
  let totalPower1 = obj1.power + obj1.name.length * 35;
  let totalPower2 = obj2.power + obj2.name.length * 35;
  if(totalPower1 > totalPower2){
    console.log(obj1.name)
  }
  else{
    console.log(obj2.name)
  }
}

// totalPower(obj1,obj2)