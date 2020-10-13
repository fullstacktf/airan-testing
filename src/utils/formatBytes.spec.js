const formatBytes = require("./formatBytes");
assertEquals(formatBytes(900), "900MB");
assertEquals(formatBytes(1600), "1GB 600MB");
assertEquals(formatBytes(568200), "568GB 200MB");
assertEquals(formatBytes(1234567), "1TB 234GB 567MB");

console.log(formatBytes(900));
console.log(formatBytes(1600));
console.log(formatBytes(568200));
console.log(formatBytes(1234567));

function assertEquals(result, expectedResult) {
  if (result !== expectedResult) {
    throw new Error(
      `This test is failing: Expected "${expectedResult}", got "${result}"`,
    );
  }
}
