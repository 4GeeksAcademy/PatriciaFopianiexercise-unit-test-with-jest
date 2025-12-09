const {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
  oneEuroIs
} = require('./app.js');

test ('adds 14 + 9 to equal 23',()=>{
    let total = sum (14,9);
    expect(total).toBe(23);
});

test('one euro should be 1.07 dollars', () => {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * oneEuroIs["USD"];
  expect(dollars).toBeCloseTo(expected, 5);
});

test('fromDollarToYen: convert 1 USD to JPY correctly', () => {
  const jpy = fromDollarToYen(1);
  const euros = 1 / oneEuroIs["USD"];
  const expected = euros * oneEuroIs["JPY"];
  expect(jpy).toBeCloseTo(expected, 5);
});

test('fromYenToPound: convert 156.5 JPY (== 1 EUR) to GBP', () => {
  const gbp = fromYenToPound(156.5);
  const expected = 1 * oneEuroIs["GBP"];
  expect(gbp).toBeCloseTo(expected, 5);
});
