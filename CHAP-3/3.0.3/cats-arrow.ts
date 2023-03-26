export const arrToObjSegment = (words: string[]): string => {
    if (words.length < 1) return '';
    if (words.length === 1) return `${words[0]}`;
    let segment = '';

    for (let i = 0; i < words.length; i++)
        (i === words.length - 1) ? (segment += ` and ${words[i]}`) : (segment += ` ${words[i]},`);

    return segment;
}
export const capitalize = (sentence: string): string =>
    `${sentence.charAt(0).toUpperCase()}${sentence.slice(1).toLowerCase()}`

export const sentence = (subject: string, verb: string, ...objects: string[]): string =>
    capitalize(`${subject} ${verb} ${arrToObjSegment(objects)}`);


console.log(sentence('cat', 'eat', 'sandwich', 'salad', 'fish'));
console.log(sentence('cat', 'sleep', 'all day'));
console.log(sentence('cat', 'jump'));
