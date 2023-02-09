export const europeanCountries = [
    { name: "Albania", area: 28748 },
    { name: "Andora", area: 468 },
    { name: "Austria", area: 83879 },
    { name: "Belgia", area: 30528 },
    { name: "Bośnia i Hercegowina", area: 51197 },
    { name: "Bułgaria", area: 110994 },
    { name: "Chorwacja", area: 56594 },
    { name: "Cypr", area: 9251 },
    { name: "Czechy", area: 78865 },
    { name: "Dania", area: 43117 },
    { name: "Estonia", area: 45227 },
    { name: "Finlandia", area: 338424 },
    { name: "Francja", area: 640679 },
    { name: "Grecja", area: 131957 },
    { name: "Hiszpania", area: 505992 },
    { name: "Holandia", area: 41543 },
    { name: "Irlandia", area: 70273 },
    { name: "Islandia", area: 103000 },
    { name: "Kosowo", area: 10908 },
    { name: "Liechtenstein", area: 160 },
    { name: "Litwa", area: 65300 },
    { name: "Luksemburg", area: 2586 },
    { name: "Macedonia Północna", area: 25713 },
    { name: "Malta", area: 0.3 },
    { name: "Mołdawia", area: 33843 },
    { name: "Monako", area: 2 },
    { name: "Niemcy", area: 357022 },
    { name: "Norwegia", area: 385252 },
    { name: "Polska", area: 312696 },
    { name: "Portugalia", area: 92212 },
    { name: "Rumunia", area: 238391 },
    { name: "Rosja", area: 17100000 },
    { name: "San Marino", area: 61 },
    { name: "Serbia", area: 88361 },
    { name: "Słowacja", area: 49035 },
    { name: "Słowenia", area: 20273 },
    { name: "Szwajcaria", area: 41284 },
    { name: "Szwecja", area: 449964 },
    { name: "Ukraina", area: 603550 },
    { name: "Węgry", area: 93030 },
    { name: "Wielka Brytania", area: 244820 },
    { name: "Włochy", area: 301338 },
];
export const europeanCountriesAreas = (): number[] => {
    const values = [];
    for (let i = 0; i < europeanCountries.length; i++) {
        values[i] = europeanCountries[i].area;
    }
    return values;
}
export const dataLength = europeanCountries.length