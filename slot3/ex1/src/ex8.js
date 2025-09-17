const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const stats = ages.reduce((acc, age) => {
  // Tính tổng
  acc.total += age;

  // Tìm min, max
  acc.min = Math.min(acc.min, age);
  acc.max = Math.max(acc.max, age);

  // Đếm theo nhóm
  if (age >= 13 && age <= 19) {
    acc.buckets.teen += 1;
  } else if (age >= 20) {
    acc.buckets.adult += 1;
  }
  return acc;
}, {
  total: 0,
  min: Infinity,
  max: -Infinity,
  buckets: {
    teen: 0,
    adult: 0
  }
});

console.log(`Total: ${stats.total}, Min: ${stats.min}, Max: ${stats.max}`);
console.log(`Buckets: { teen: ${stats.buckets.teen}, adult: ${stats.buckets.adult} }`);