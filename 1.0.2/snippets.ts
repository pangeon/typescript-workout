function snippet (text: string, length: number) : string {
	if (text.length < length) {
		return text;
	}
	const ellipsis = "...";
	let result = text.slice(0, length - ellipsis.length);

	const lastSpace = result.lastIndexOf(" ");
	result = `${result.slice(0, lastSpace)}${ellipsis}`;

	return result;
}
const resultOne = snippet(
	`TypeScript jest jezykiem programowania, 
	ktory jest scislym systantycznym nadzbiorem JavaScriptu 
	i dodaje do niego opcjonalne statyczne typowanie`, 40);
console.log(resultOne);

// const resultTwo = snippet(`Matematyka jest fajna ale trudna.`);
// console.log(resultTwo);

// const resultThree = snippet(false, 40);
// console.log(resultThree);

// const resultFourt = snippet(`Matematyka jest fajna ale trudna.`, false);
// console.log(resultFourt);

// const resultFive = snippet(`Matematyka jest fajna ale trudna.`, 20);
// console.log(resultFive);