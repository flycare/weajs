#!/usr/bin/env node
var program = require('commander');
var appInfo = require('../package.json');
var color = require('colors-cli/toxic');
var city = require('../lib/city');
var now = require('../lib/now');
var suggestion = require('../lib/suggestion');
var log = console.log;
var config = require("../config/config");
var display = '';

function checkCity(val, display) {
    if (val == null)
        val = config.defaultCity;
    city.request(val, display);
    return;
}

function checkNow(val, display) {
    if (val == null)
        val = config.defaultCity;
    now.request(val, display);
    return;
}

function checkSuggestion(val, display) {
    if (val == null)
        val = config.defaultCity;
    suggestion.request(val, display);
    return;
}

program
    .version(appInfo.version)
    .usage('[options] <package>')
    .option("-c, --city [city]", "城市天气预报")
    .option("-n, --now [city]", "城市实时天气")
    .option("-s, --suggestion [city]", "生活指数")
    .option("-d, --display [display]", "显示样式: basic|color|gragh")
    .on('--help', function () {
        // 图片文字 http://ascii.mastervb.net/text_to_ascii.php
        log("__      _____      ___   _______  _  _    ___     ___".x226);
        log("\\ \\    / / __|    /   \\  |_   _| | || |  | __|   | _ \\".x226);
        log(" \\ \\/\\/ /| _|     | - |    | |   | __ |  | _|    |   /".x226);
        log("  \\_/\\_/ |___|    |_|_|   _|_|_  |_||_|  |___|   |_|_\\".x226);
        log('_|"""""| |"""""| |"""""| |"""""| |"""""| |"""""| |"""""|'.x226);
        log("\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'".x226);
    });
//默认不传参数输出help
if (!process.argv[2]) {
    program.help();
}
program.parse(process.argv);
// console.log(program);
// return;
if (program.display === true || program.display === undefined)
    display = 'basic';
else
    display = program.display;

if (program.city === true && program.city !== undefined)
    checkCity(null, display);
else if (program.city === undefined)
    0;
else
    checkCity(program.city, display);

if (program.now === true)
    checkNow(null, display);
else if (program.now === undefined)
    0;
else
    checkNow(program.now, display);

if (program.suggestion === true)
    checkSuggestion(null, display);
else if (program.suggestion === undefined)
    0;
else
    checkSuggestion(program.suggestion, display);