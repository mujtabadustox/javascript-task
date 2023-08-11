console.log("Hi mom");

//search through nested objects

const contains = (obj, value) => {
  keys = Object.keys(obj);

  console.log(keys);

  for (const key of keys) {
    console.log("aat", typeof obj[key]);
    if (typeof obj[key] !== "object") {
      if (value === obj[key]) {
        return true;
      }
    } else {
      if (contains(obj[key], value)) {
        return true;
      }
    }
  }

  //   for (i in Object.values(obj)) {
  //     console.log("das", i, typeof i);
  //   }

  return false;
};

const obj = {
  name: "Mujtaba",
  class: "BSCS",
  address: {
    street: "1st",
    road: "17 Mile",
  },
  university: {
    name: "FAST",
    city: "Islamabad",
  },
};

console.log(contains(obj, "FAST"));
