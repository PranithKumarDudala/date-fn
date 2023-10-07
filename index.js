var addDays = require("date-fns/addDays");
var format = require("date-fns/format");

function addDaysFunc(days) {
  return format(addDays(new Date(2020, 6, 22), days), "dd-MM-yyyy");
}

//export default addDaysFunc;
module.exports = addDaysFunc;

console.log(addDaysFunc(5));
