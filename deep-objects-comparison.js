function isObject(obj) {
    // If passed obj is not null and typeof is of type object
    return obj != null && typeof obj === 'object'
}

function deepObjCheck(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if(keys1.length !== keys2.length) {
    return false;
  }
  
  for(let i = 0; i < keys1.length; i++) {
    const currentObjKey = keys1[i];

    if(!obj2.hasOwnProperty(currentObjKey)) {
      return false
    }
    
    const areBothValueObject = isObject(obj1) && isObject(obj2);
    
    if(
      (areBothValueObject && !deepObjCheck(obj1[currentObjKey], obj2[currentObjKey])) ||
      (!areBothValueObject && obj1[currentObjKey] !== obj1[currentObjKey])
    ) {
      return false
    }
  }
  
  return true;
}

let object1 = {
  name: "Parvez",
  phone: "123456789",
  details: {
    job: "FE Engg"
  }
};

let object2 = {
  name: "Parvez",
  phone: "123456789",
  details: {
    job: "FE Engg"
  }
};

console.log(deepObjCheck(object1, object2));

// Reference: https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#:~:text=3.-,Shallow%20equality,the%20properties'%20values%20for%20equality.&text=Inside%20the%20function%2C%20keys1%20and,names%20of%20object1%20and%20object2%20.
