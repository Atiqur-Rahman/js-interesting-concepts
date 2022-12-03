/* 
1. variable value not assigned
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter that is't passsed
5. property that doesn't exists in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
 */
let first;
// console.log(first);

function second(x, y) {
    const sum = x + y;
}
// console.log(second(2, 4));

function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return;
    }

    return sum;
}

const third = add(2, 3);
// console.log(third);

function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(32);

const fifth = { name: 'atik', age: 25, location: 'bandarbon' };
// console.log(fifth.phone);

const sixth = [32, 53, 534];
// console.log(sixth[3]);

delete sixth[1];
// console.log(sixth[1]);

const seventh = undefined;
console.log(seventh);
