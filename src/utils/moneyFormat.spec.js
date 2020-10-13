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
