const moneyFormat = require("./moneyFormat");

//ctrl + .
const firstResult = moneyFormat(99.99);
assertEquals(firstResult, "$99.99");

const secondResult = moneyFormat(250);
assertEquals(secondResult, "$250.00");

const thirdResult = moneyFormat(9500.95);
assertEquals(thirdResult, "$9,500.95");

function assertEquals(result, expectedResult) {
  if (result !== expectedResult) {
    throw new Error(
      `first test if failing, Expected "${expectedResult}" but got: ${result}`,
    );
  }
}

describe("formatMoney", () => {
  it("formats integer numbers", () => {
    const result = moneyFormat(250);
    expect(result).toEqual("$250.00");
  });

  it("formats numbers with two decimals", () => {
    const result = moneyFormat(99.99);
    expect(result).toEqual("$99.99");
  });

  it("formats large numbers", () => {
    const result = moneyFormat(2250.95);
    expect(result).toEqual("$2,250.95");
  });
});
