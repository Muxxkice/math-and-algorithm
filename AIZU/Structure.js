//Structured Programming
const main = (input) => {
	const n = input;

	array = [];
	array.push(" ")
	for (let i = 3; i <= n; i++) {
		if (i % 3 == 0 || /3/.test(i)) {
			array.push(i)
		} else if (i % 10 == 3) {
			array.push(i)
		}
	}
	console.log(array.join(" "))

}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));

