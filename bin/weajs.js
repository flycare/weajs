#!/usr/bin/env node
var program = require('commander');
var appInfo = require('../package.json');
var color = require('colors-cli/toxic');
var city = require('../lib/city');
var now = require('../lib/now');
var suggestion = require('../lib/suggestion');
var log = console.log;
var config = require("../config/config");

function checkCity(val) {
    if (val == null)
        val = config.defaultCity;
    city.request(val);
    return;
}

function checkNow(val) {
    if (val == null)
        val = config.defaultCity;
    now.request(val);
    return;
}

function checkSuggestion(val) {
    if (val == null)
        val = config.defaultCity;
    suggestion.request(val);
    return;
}
program
    .version(appInfo.version)
    .usage('[options] <package>')
    .option("-c, --city [city]", "weather of city", checkCity)
    .option("-n, --now [city]", "weather for now", checkNow)
    .option("-s, --suggestion [city]", "suggestion", checkSuggestion)
    .on('--help', function () {
        // 图片文字 http://ascii.mastervb.net/text_to_ascii.php
        log("__      _____      ___   _______  _  _    ___     ___".x226);
        log("\\ \\    / / __|    /   \\  |_   _| | || |  | __|   | _ \\".x226);
        log(" \\ \\/\\/ /| _|     | - |    | |   | __ |  | _|    |   /".x226);
        log("  \\_/\\_/ |___|    |_|_|   _|_|_  |_||_|  |___|   |_|_\\".x226);
        log('_|"""""| |"""""| |"""""| |"""""| |"""""| |"""""| |"""""|'.x226);
        log("\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'".x226);
    })
//默认不传参数输出help
if (!process.argv[2]) {
    program.help();
}
program.parse(process.argv);

if (program.city === true && program.rawArgs[3] == undefined) {
    checkCity(null);
}
if (program.now === true && program.rawArgs[3] == undefined) {
    checkNow(null);
}
if (program.suggestion === true && program.rawArgs[3] == undefined) {
    checkSuggestion(null);
}