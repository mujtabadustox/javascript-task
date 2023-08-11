console.log("Hi Mom");

//if all unique characters

const allUnique = (str) => {
  let obj = {};

  for (let i = 0; i <= str.length; i++) {
    console.log(str[i]);
    console.log("O", obj);
    if (obj.hasOwnProperty(str[i])) {
      if (obj[str[i]] < 1) {
        obj[str[i]]++;
      } else {
        return false;
      }
    } else {
      obj[str[i]] = 1;
    }
  }

  return true;
};

isUnique = allUnique("racec");
console.log("Result:", isUnique);
