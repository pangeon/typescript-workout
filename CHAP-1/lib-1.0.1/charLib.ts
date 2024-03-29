/* 1 */
    function toTitleCase(text: string, joinChar: string = ""): string {
        const words: string[] = text.split(" ");
        let joinedText: string = "";
        words.forEach((value) => {
            const firstLetterOfWord: string = value.slice(0, 1);
            const restLettersOfWord: string = value.slice(1, value.length);

            joinedText += joinChar;
            joinedText += firstLetterOfWord.toUpperCase() + restLettersOfWord.toLowerCase();
        });
        return joinedText.trim();

    }
    console.log("Task -- nr. 1:");
    console.log(toTitleCase("rozryWka gumIsiÓw A takŻe chartów pląSających po ziemi"));
    console.log(toTitleCase("rozryWka gumIsiÓw A takŻe chartów pląSających po ziemi", " "));
/* 1 */

/* 2 */
    function countWords(text: string): number {
        const words: string[] = text.split(/(-)|(_)|( )/);
        let counter: number = 0;

        words.forEach((value) => {
            // TODO: Condition with "undefined" is not optimal sulution. Change it.
            if(value !== undefined && value !== " " && value !== "-" && value !== "_")
            counter++  
        });
        return counter

    }
    console.log("Task -- nr. 2:");
    console.log(countWords("Miasto-największej_biedy na świecie-gdzie-krolują dziady_Kalwaryjskie"));
/* 2 */

/* 3 */
    function toWords(text: string): string[] {
        const words: string[] = text.split(/(-)|(_)|( )/);
        const wordsAsArray: string[] = [];

        words.forEach((value, index) => {
            // TODO: Condition with "undefined" is not optimal sulution. Change it.
            if(value !== undefined && value !== " " && value !== "-" && value !== "_") {
                wordsAsArray.push(value);
            }
              
        });
        return wordsAsArray;
    }
    console.log("Task -- nr. 3:");
    console.log(toWords("Miasto-największej_biedy na świecie-gdzie-krolują dziady_Kalwaryjskie"));
/* 3 */

/* 4 */
    function repeat(text: string, mult: number): string {
        const multText: string[] = new Array(mult);
        multText.fill(text);
        return multText.join("");
    }
    console.log("Task -- nr. 4:");
    console.log(repeat("Error... ", 10));
/* 4 */

/* 5 */
    function isAlpha(text: string): boolean {
        const regex = new RegExp("^[a-zA-Z]+$");
        return regex.test(text);
    }
    console.log("Task -- nr. 5:");
    console.log(isAlpha("Wojna i Pokój"));
    console.log(isAlpha("Pokuta"));
    console.log(isAlpha("1Q84"));
/* 5 */

/* 6 */
    function isBlank(text: string): boolean {

        while(text[0] === " ") {
            text = text.slice(1);
        }
        const result = text === "";
        return result;

    }
    console.log("Task -- nr. 6:");
    console.log(isBlank("Wojna i Pokój")); // false
    console.log(isBlank("             ")); // true
    console.log(isBlank(""));              // true 
/* 6 */







