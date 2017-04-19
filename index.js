
const UID = "U0B682651D"; // 测试用 用户ID，请更换成您自己的用户ID
const KEY = "ygundz1tbxcfw71u"; // 测试用 key，请更换成您自己的 Key
var LOCATION = "Beijing"; // 除拼音外，还可以使用 v3 id、汉语等形式

var Api = require('./lib/api.js')
var argv = require('optimist').default('l', LOCATION).argv;


var api = new Api(UID, KEY);
api.getWeatherDaily(argv.l).then(function(data){
  console.log(JSON.stringify(data, null, 4))
}).catch(function(err) {
  console.log(err.error.status)
});
