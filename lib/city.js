var Api = require('./api.js')
var api = new Api();
var Render = require('./render.js');
var render = new Render();

exports.request = function(city){
    api.getWeatherDaily(city).then(function(data){
        render.cityRender(data);
    }).catch(function(err) {
        console.log(err.error.status)
    });
};
