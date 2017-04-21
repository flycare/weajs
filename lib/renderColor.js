var color = require("colors-cli/safe");
var colorT = require("colors-cli/toxic");

function Render() {

}

Render.prototype.cityRender = function(data){
    var location = data.results[0].location;
    var daily = data.results[0].daily;
    var lastUpdateTime = data.results[0].last_update;
    locationRender(location);
    dailyRender(daily);
    lastUpdateRender(lastUpdateTime);
    _divider();
};

Render.prototype.nowRender = function(data){
    var location = data.results[0].location;
    var now = data.results[0].now;
    var lastUpdateTime = data.results[0].last_update;
    locationRender(location);
    nowRender(now);
    lastUpdateRender(lastUpdateTime);
    _divider();
};

Render.prototype.suggestionRender = function(data){
    var location = data.results[0].location;
    var suggestion = data.results[0].suggestion;
    var lastUpdateTime = data.results[0].last_update;
    locationRender(location);
    suggestionRender(suggestion);
    lastUpdateRender(lastUpdateTime);
    _divider();
};

function locationRender(location){
    _divider();
    console.log(color.x161('■ ')+"地区：%s".x85,location.path);
    console.log(color.x161('■ ')+"时区：%s %s".x85,location.timezone,location.timezone_offset);
}

function dailyRender(daily){
    daily.forEach(function(value,index,array){
        _divider();
        console.log(color.x161('■ ')+"日期：%s".x85,value.date);
        console.log(color.x161('■ ')+"白天天气：%s".x85,value.text_day);
        console.log(color.x161('■ ')+"夜间天气：%s".x85,value.text_night);
        console.log(color.x161('■ ')+"最高气温：%s".x85,value.high);
        console.log(color.x161('■ ')+"最低气温：%s".x85,value.low);
        console.log(color.x161('■ ')+"风向：%s".x85,value.wind_direction);
        console.log(color.x161('■ ')+"风速：%s km/h".x85,value.wind_speed);
        console.log(color.x161('■ ')+"风力：%s".x85,value.wind_scale);
    })
}

function lastUpdateRender(lastUpdateTime){
    _divider();
    console.log(color.x161('■ ')+"信息更新时间：%s".x85,lastUpdateTime);
}

function nowRender(now){
    _divider();
    console.log(color.x161('■ ')+"天气：%s".x85,now.text);
    console.log(color.x161('■ ')+"气温：%s".x85,now.code);
}

function suggestionRender(suggestion){
    _divider();
    console.log(color.x161('■ ')+"洗车：%s".x85,suggestion.car_washing.brief);
    console.log(color.x161('■ ')+"穿衣：%s".x85,suggestion.dressing.brief);
    console.log(color.x161('■ ')+"流感：%s".x85,suggestion.flu.brief);
    console.log(color.x161('■ ')+"运动：%s".x85,suggestion.sport.brief);
    console.log(color.x161('■ ')+"旅行：%s".x85,suggestion.travel.brief);
    console.log(color.x161('■ ')+"紫外线：%s".x85,suggestion.uv.brief);
}

function _divider(){
    console.log("-----------------------------------------".x51);
}

module.exports = Render;