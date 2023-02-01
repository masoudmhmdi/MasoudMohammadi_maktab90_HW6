let salaries = {
  John: 100,
  Pete: 300,
  mmd:1000,
  Hii: 700,
  Mary: 250,
  topSalary() {
    const arryOfSaleries = [];
    for (const [key, value] of Object.entries(this)) {
      arryOfSaleries.push([key, value]);
    }
    arryOfSaleries.sort((a, b) => b[1] - a[1]);
    return arryOfSaleries[0];
  },
};

console.log(salaries.topSalary());
