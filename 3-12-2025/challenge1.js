const dataset = [
  [65,74,12,30,25],
  [20,44,10,40,55],
  [40,55,14,35,75],
];

const sum = dataset.flat().reduce((sum, curr) => sum + curr, 0)