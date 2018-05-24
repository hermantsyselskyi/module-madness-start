const num = require('./random-number.class');
const str = require('./dollar-converter.class');
function wholeThing(){
   let whole = num(10,10000);
   return 'Random dollar amount:' + str(whole);
}
module.exports = wholeThing;
