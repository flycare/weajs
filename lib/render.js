function Render() {
}

Render.prototype.cityRender = function(data){
    console.log(JSON.stringify(data, null, 4));
    var location = data.results[0].location;
    var daily = data.results[0].daily;
    var lastUpdateTime = data.results[0].last_update;
    locationRender(location);
    dailyRender(daily);
    lastUpdateRender(lastUpdateTime);
};

Render.prototype.nowRender = function(data){
    console.log(JSON.stringify(data, null, 4));
    var location = data.results[0].location;
    var now = data.results[0].now;
    var lastUpdateTime = data.results[0].last_update;
    locationRender(location);
    nowRender(now);
    lastUpdateRender(lastUpdateTime);
};

Render.prototype.suggestionRender = function(data){
    console.log(JSON.stringify(data, null, 4));
    var location = data.results[0].location;
    var suggestion = data.results[0].suggestion;
    var lastUpdateTime = data.results[0].last_update;
    locationRender(location);
    suggestionRender(suggestion);
    lastUpdateRender(lastUpdateTime);
};

function locationRender(location){

}

function dailyRender(daily){

}

function lastUpdateRender(lastUpdateTime){

}

function nowRender(now){

}

function suggestionRender(suggestion){

}

module.exports = Render;


