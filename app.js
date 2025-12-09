const sum = (a,b) => {
    return a+b
}
console.log(sum(7,3))

const oneEuroIs = {
  "JPY": 156.5,
  "USD": 1.07,
  "GBP": 0.87
};

const fromEuroToDollar = function(valueInEuro) {
  return valueInEuro * oneEuroIs["USD"];
};

const fromDollarToYen = function(valueInDollar) {
  const euros = valueInDollar / oneEuroIs["USD"];
  return euros * oneEuroIs["JPY"];
};

const fromYenToPound = function(valueInYen) {
  const euros = valueInYen / oneEuroIs["JPY"];
  return euros * oneEuroIs["GBP"];
};

module.exports = {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
  oneEuroIs
};