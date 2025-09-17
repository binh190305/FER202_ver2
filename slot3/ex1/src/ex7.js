const companies = [
  { name: 'Google', category: 'Tech', start: 1998, end: 2024 }
];

// Tạo bản sao bất biến bằng spread syntax
const company0New = { ...companies[0], start: companies[0].start + 1 };

console.log("companies[0]:", companies[0]);
console.log("company0New:", company0New);

const concatAll = (...arrays) => {
  let result = [];
  for (const arr of arrays) {
    result.push(...arr); // Dùng spread syntax để mở rộng mảng
  }
  return result;
};

console.log("Kết quả concatAll([1, 2], [3], [4, 5]):", concatAll([1, 2], [3], [4, 5]));