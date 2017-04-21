var Api = require('./api.js')
var api = new Api();
var RenderBasic = require('./renderBasic.js');
var RenderColor = require('./renderColor.js');
var RenderGragh = require('./renderGragh.js');


exports.request = function(city,display){
    api.getWeatherDaily(city).then(function(data){
        if(display == 'color')
            var render = new RenderColor();
        else if(display == 'graph')
            var render = new RenderGragh();
        else
            var render = new RenderBasic();
        render.cityRender(data);
    }).catch(function(err) {
        console.log(err)
    });
};
