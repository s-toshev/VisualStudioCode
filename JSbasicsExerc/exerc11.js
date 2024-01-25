function speed(speed, area) {
    'use strict';

    let speedLimit = 0;

    if (area == 'motorway') {
        speedLimit = 130;

    } else if (area == 'interstate') {
        speedLimit = 90;

    } else if (area == 'city') {
        speedLimit = 50;

    } else if (area == 'residential') {
        speedLimit = 20;

    }

    const speedLimitDiff = speed - speedLimit;

    if (speedLimitDiff <= 0) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (speedLimitDiff > 0 && speedLimitDiff <= 20) {
console.log(`The speed is ${speedLimitDiff} km/h faster than the allowed speed of ${speedLimit} - speeding`)
    } else if (speedLimitDiff > 20 && speedLimitDiff <= 40) {
        console.log(`The speed is ${speedLimitDiff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)

    } else {
        console.log(`The speed is ${speedLimitDiff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)

    }


}

speed(200, "motorway");