var exec = require('cordova/exec');

exports.checkTemperature = function(arg0, success, error) {
    exec(success, error, 'TemperaturePlugin', 'checkTemperature', [arg0]);
};

exports.isDeviceCompatible = function(arg0, success, error) {
    exec(success, error, 'TemperaturePlugin', 'isDeviceCompatible', [arg0]);
};