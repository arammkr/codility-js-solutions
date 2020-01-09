const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

module.exports = {
  gcd,
}
