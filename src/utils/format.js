import Web3 from "web3";

const truncateNumber = (balance, dp) => {
  return Number(balance.toString()).toFixed(dp ?? 4) / 1;
};
function numberFromWei(balance, decimal) {
  decimal = decimal ?? "18";
  const pow = Math.pow(10, decimal);
  let map = Web3.utils.unitMap;
  let targetUnit;
  for (var unit in map) {
    if (map[unit] == pow.toString()) {
      targetUnit = unit;
      break;
    }
  }
  return Web3.utils.fromWei(balance.toString(), targetUnit);
}
var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
function abbreviateNumber(number) {
  if (number < 100) {
    return number;
  }
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}
export { truncateNumber, numberFromWei, abbreviateNumber };
