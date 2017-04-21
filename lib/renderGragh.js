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
        console.log("                         ┌────────────┐");
        console.log("┌────────────────────────┤ %s ├────────────────────────┐",value.date);
        console.log("│             白天       └─────┬──────┘    夜间                │");
        console.log("├──────────────────────────────┼───────────────────────────────┤");
        console.log("│    "+"\\  /".x226+"        %s            │               %s              │",value.text_day,value.text_night);
        console.log("│  "+"_ /\"\"".x226+".-.     %s °C          │      .--.     6 °C            │",value.high);
        console.log("│    "+"\\_".x226+"(   ).   ↖ 5 km/h       │   .-(    ).   → 4 km/h        │");
        console.log("│    "+"/".x226+"(___(__)                 │  (___.__)__)                  │");
        console.log("│               0.0 mm/h | 2   │               0.0 mm/h | 3    │");
        console.log("└──────────────────────────────┴───────────────────────────────┘");

        // console.log("日期：%s",value.date);
        // console.log("白天天气：%s",value.text_day);
        // console.log("夜间天气：%s",value.text_night);
        // console.log("最高气温：%s",value.high);
        // console.log("最低气温：%s",value.low);
        // console.log("风向：%s",value.wind_direction);
        // console.log("风速：%s km/h",value.wind_speed);
        // console.log("风力：%s",value.wind_scale);
    })
}

function lastUpdateRender(lastUpdateTime){
    _divider();
    console.log(color.x161('■ ')+"信息更新时间：%s".x85,lastUpdateTime);
}

function nowRender(now){
    _divider();
    console.log(color.x161('■ ')+"天气：%s",now.text);
    console.log(color.x161('■ ')+"气温：%s",now.code);
}

function suggestionRender(suggestion){
    _divider();
    console.log(color.x161('■ ')+"洗车：%s",suggestion.car_washing.brief);
    console.log(color.x161('■ ')+"穿衣：%s",suggestion.dressing.brief);
    console.log(color.x161('■ ')+"流感：%s",suggestion.flu.brief);
    console.log(color.x161('■ ')+"运动：%s",suggestion.sport.brief);
    console.log(color.x161('■ ')+"旅行：%s",suggestion.travel.brief);
    console.log(color.x161('■ ')+"紫外线：%s",suggestion.uv.brief);
}

function _divider(){
    console.log("----------------------------------------------------------------".x51);
}

module.exports = Render;