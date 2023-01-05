const truncateAddress = (address) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

const truncateName = (name) => {
  return name.length > 15 ? name.slice(0, 14) + "..." : name;
};
const truncateNumber = (name) => {
  return name.length > 5 ? name.slice(0, 5) + "..." : name;
};
var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

function abbreviateNumber(number) {
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

const getETHToUSD = (amount, dicimal = 2) => {
  return (parseFloat(amount) * 2800).toFixed(dicimal);
};
function getTimeRemaining(endtime) {
  var now = new Date().getTime();
  const total = Math.abs(endtime - now);

  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  var hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((total % (1000 * 60)) / 1000);
  var months = days % 30;
  var years = months % 12;
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    months,
    years,
  };
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatFromDate(dates) {
  const date = new Date(dates);
  const year = date.getFullYear();
  const day = date.getDate();
  const dayName = days[date.getDay()];
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];
  const monthInNumber = ("0" + (monthIndex + 1)).slice(-2);

  const hourIn24 = ("0" + date.getHours()).slice(-2);

  const minute = ("0" + date.getMinutes()).slice(-2);
  const second = ("0" + date.getSeconds()).slice(-2);

  const amPm = date.getHours() + 1 >= 12 ? "pm" : "am";
  const hourIn12 = ("0" + (date.getHours() - 12)).slice(-2);

  return {
    year,
    monthName,
    monthInNumber,
    day,
    dayName,
    hourIn24,
    minute,
    second,
    amPm,
    hourIn12,
  };
}
function formatToFullDateIn24(timeStamp) {
  const time = formatFromDate(timeStamp);
  return `${time.day}/${time.monthInNumber}/${time.year}, ${time.hourIn24}:${time.minute}`;
}

function formatToMonthYear(timeStamp) {
  const time = formatFromDate(timeStamp);
  return `${time.monthName} ${time.year}`;
}

function timeDiffString(timeStamp) {
  const diff = timeStamp - new Date();
  const time = getTimeRemaining(timeStamp);
  let isAgo = false;
  if (diff >= 0) {
    isAgo = false;
  } else {
    isAgo = true;
  }
  const prefix = isAgo ? "" : "in ";
  const suffix = isAgo ? " ago" : "";
  let amount = 0;
  let unit = "";
  if (time.years !== 0) {
    amount = time.years;
    unit = "year";
  } else if (time.months !== 0) {
    amount = time.months;
    unit = "month";
  } else if (time.days !== 0) {
    amount = time.days;
    unit = "day";
  } else if (time.hours !== 0) {
    amount = time.hours;
    unit = "hour";
  } else if (time.minutes !== 0) {
    amount = time.minutes;
    unit = "minute";
  } else {
    amount = null;
  }
  const isMoreThanOne = amount ?? 0 > 1;
  const multiString = isMoreThanOne ? "s " : "";
  const result = prefix + amount + " " + unit + multiString + suffix;
  return amount === null ? "a moment ago" : result;
}
function paddingNumber(n) {
  return (parseInt(n) < 10 ? "0" : "") + n;
}
export {
  truncateAddress,
  truncateName,
  truncateNumber,
  abbreviateNumber,
  getETHToUSD,
  getTimeRemaining,
  formatFromDate,
  formatToFullDateIn24,
  formatToMonthYear,
  timeDiffString,
  paddingNumber,
};
