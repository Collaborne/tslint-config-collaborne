interface MyInterface {
	foo: string;
}

const foo = 'foo';
const object: MyInterface = {
	foo: foo,
};

// A function with an unused first argument: `_` is used to tell the compiler that TS6133 "unused parameter"
// is not relevant.
function withUnusedParameter(_unusedParam: string, usedParam: string) {
	// tslint:disable-next-line no-console
	console.log(usedParam);
}
