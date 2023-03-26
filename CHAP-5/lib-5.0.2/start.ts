import {DayReport} from "./DayReport";
import {Commit} from "./Commit";
import {WeekReport} from "./WeekReport";
import {StatisticUnitUsed} from "./StatisticUnitUsed";

const waka_2022_02_13 = new DayReport(
    167,
    ['typescript-workout'],
    20220213,
    1,
    [
        new Commit(0x3eecb40, 'ex. 3.0.5, 3.0.6, 3.0.7, 3.0.8')
    ]
);

const waka_2022_02_14 = new DayReport(
    115,
    ['typescript-workout'],
    20220214,
    1,
    [
        new Commit(0x27a2e1a, 'lib-3.0.1 - get flight by destination')
    ]
);

const waka_2022_02_15 = new DayReport(
    247,
    ['typescript-workout'],
    20220215,
    2,
    [
        new Commit(0x1ba9431, 'lib-3.0.1 - add more logic: booking flights and slice code'),
        new Commit(0xe6fdda7, 'lib-3.0.1 - fix reservations')
    ]
);

const waka_2022_02_16 = new DayReport(
    173,
    ['typescript-workout'],
    20220216,
    2,
    [
        new Commit(0x125b835, 'solution to lib-3.0.1'),
        new Commit(0x2d4741d, 'introduction to tests')
    ]
);

const waka_2022_02_17 = new DayReport(
    163,
    ['typescript-workout'],
    20220217,
    2,
    [
        new Commit(0xbd2480d, 'config jest'),
        new Commit(0x39d09c8, 'sol-lib-3.0.1 - add full tests')
    ]
);

const waka_2022_02_20 = new DayReport(
    194,
    ['typescript-workout'],
    20220220,
    1,
    [
        new Commit(0x78dc47b, 'ex. 4.0.1-4.0.6 - OOP')
    ]
);

const waka_w_0213021723 = new WeekReport(
    886,
    ['typescript-workout'],
    '0213172023',
    [
        new StatisticUnitUsed('TypeScript', 786),
        new StatisticUnitUsed('HTML', 29),
        new StatisticUnitUsed('JSON', 23),
        new StatisticUnitUsed('JavaScript', 8),
        new StatisticUnitUsed('Markdown', 6),
        new StatisticUnitUsed('other', 14)
    ],
    [
        new StatisticUnitUsed('WebStorm', 816),
        new StatisticUnitUsed('VS Code', 52),
    ],
    [
        new StatisticUnitUsed('WSL', 868)
    ],
    [
        new StatisticUnitUsed('i5-10400F', 868)
    ]);

console.log(waka_2022_02_13);
console.log(waka_2022_02_14);
console.log(waka_2022_02_15);
console.log(waka_2022_02_16);
console.log(waka_2022_02_17);
console.log(waka_2022_02_20);

console.log(waka_w_0213021723);

