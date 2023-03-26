type PI = Math["PI"];
type ZERO = 0 | undefined;

function f(arg: PI): ZERO {
    let value: ZERO;
    value = 0;
    if (arg - Math.PI === value) {
        return 0;
    }
    return undefined;


}
console.log(f(Math.PI));
