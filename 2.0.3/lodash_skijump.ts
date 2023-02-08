import _ = require("lodash");

const skiJumpersNames = [
    "Granerud",
    "Stoch",
    "Kraft",
    "Johansson",
    "Kobayashi",
    "Żyła",
    "Prevc",
    "Geiger",
    "Kranjec"
];

const startNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(_.zip(startNum, skiJumpersNames));
