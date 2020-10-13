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

describe("formatBytes", () => {
  it("formats in MBs", () => {
    const result = formatBytes(900);
    expect(result).toEqual("900MB");
  });

  it("formats in GBs", () => {
    const result = formatBytes(1600);
    expect(result).toEqual("1GB 600MB");
  });

  it("formats in TBs", () => {
    const result = formatBytes(1111111);
    expect(result).toEqual("1TB 111GB 111MB");
  });
});
