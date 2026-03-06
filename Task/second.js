//Count total keys in a deeply nested object (all levels included)

function countTotalKeys(obj) {
  let count = 0;

  for (let key in obj) {
    count++; 
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      count += countTotalKeys(obj[key]); 
    }
  }
  return count;
}

const user = {
  id: 1,
  profile: {
    username: "Vipra",
    details: {
      firstName: "Vipra",
      lastName: "Thakkar"
    }
  },
  settings: {
    theme: "dark"
  }
};

console.log(countTotalKeys(user)); 