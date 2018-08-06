
# CordovaTemperaturePlugin
An ionic cordova android plugin to detect temperature in surroundings 

# Requirements
An Ionic cordova project more info here https://ionicframework.com/docs/pro/basics/getting-started/

# Compatibility
Android ONLY

# Installation
ionic cordova plugin add https://github.com/droidada/cordovatemperatureplugin

# Usage

    // declare the cordova variable at the top of your class, right after your imports
    declare var cordova;

    // call the checkTemperature function to get temperature
    const temp = cordova.plugins.Temperature;
    temp.checkTemperature((val) => {
        console.log(val);
    },
    (err) => {
        console.log(err);
    })

    // call the isDeviceCompatible function to check if  your device has a temperature sensor
    temp.isDeviceCompatible((val) => {
      console.log(val);
    },
    (err) => {
      console.log(err);
    })

    // HAPPY HUNTING...
