const sum = (...nums) => {
  return nums.reduce((total, num) => {
    const validNum = Number(num);
    if (isNaN(validNum)) {
      return total;
    }
    return total + validNum;
  }, 0);
};

const avg = (...nums) => {
  if (nums.length === 0) return 0;
  const total = sum(...nums); // Dùng lại hàm sum
  return parseFloat((total / nums.length).toFixed(2));
};

console.log(`sum(1, 2, 3): ${sum(1, 2, 3)}`);
console.log(`sum(1, 'x', 4): ${sum(1, 'x', 4)}`);
console.log(`avg(1, 2, 3, 4): ${avg(1, 2, 3, 4)}`);
console.log(`avg(): ${avg()}`);