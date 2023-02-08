/// <reference path = "./types/HeatMapTypes.d.ts" />
import heatMapTypes = require("HeatMapTypes");
import _ = require("lodash");


let data: heatMapTypes.Pitcher = {
    batterHotZones: [[12.2], [10.2, -5], [3, 2]],
    pitcherHotZones: [[3, 2], [-12.2, 3], [10.2, -5]],
}

function findMatch(batterHotZones: _.List<any> | null | undefined, pitcherHotZones: _.List<any>): any[] {
    return _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual);
}

data.coordinateMap = findMatch(data.batterHotZones, data.pitcherHotZones);
console.log(data.coordinateMap);
