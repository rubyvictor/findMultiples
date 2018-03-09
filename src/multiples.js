var result = [];

function multiples(a, b) {
  for (let i = a; i <= b; i = i + a) {
    result.push(i);
  }
  return result;
}
module.exports = multiples;
