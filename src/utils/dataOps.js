"use strict";
exports.__esModule = true;
exports.stepCounter = void 0;
var fs = require('fs');
var dir = '../components/organisms/FirstStepsModal';
var stepCounter = function () { return fs.readdirSync(dir).length; };
exports.stepCounter = stepCounter;
