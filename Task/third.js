// Group an array of objects by a specific property.
//    Example: group employees by department

const employees = [
  { name: 'Alice', dept: 'Engineering' },
  { name: 'Bob', dept: 'Design' },
  { name: 'Charlie', dept: 'Engineering' },
  { name: 'David', dept: 'HR' }
];

function groupBy(array, property) {
  return array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedByDept = groupBy(employees, 'dept');
console.log(groupedByDept);