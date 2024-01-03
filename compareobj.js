let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

function ObjectsEqual(obj1, obj2) {
    // Convert objects to strings and sort 
    let str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    let str2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  if(str1 === str2)
  {
    return true;
  }
  else{
    return false;
  }
}

console.log(ObjectsEqual(obj1, obj2));  