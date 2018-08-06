var exec = require('cordova/exec');

exports.checkTemperature = function(success, error) {
    exec(success, error, 'Temperature', 'checkTemperature');
};

exports.isDeviceCompatible = function(success, error) {
    exec(success, error, 'Temperature', 'isDeviceCompatible');
};