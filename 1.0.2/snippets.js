function snippet(text, length) {
    if (text.length < length) {
        return text;
    }
    var ellipsis = "...";
    var result = text.slice(0, length - ellipsis.length);
    var lastSpace = result.lastIndexOf(" ");
    result = "" + result.slice(0, lastSpace) + ellipsis;
    return result;
}
var resultOne = snippet("TypeScript jest jezykiem programowania, \n\tktory jest scislym systantycznym nadzbiorem JavaScriptu \n\ti dodaje do niego opcjonalne statyczne typowanie", 80);
console.log(resultOne);
// const resultTwo = snippet(`Matematyka jest fajna ale trudna.`);
// console.log(resultTwo);
// const resultThree = snippet(false, 40);
// console.log(resultThree);
// const resultFourt = snippet(`Matematyka jest fajna ale trudna.`, false);
// console.log(resultFourt);
// const resultFive = snippet(`Matematyka jest fajna ale trudna.`, 20);
// console.log(resultFive);
