
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

/********** DESTRUCTIVE METHODS (Arrays) **********
 *  .splice() method:   destructively remove, add, or replace element(s); returns NEW array of removed elements
 */

function destructivelyAppendCat(name) {
    // appends a cat to the end of the cats array (using .push() method {AT LEAST 1 argument; returns length of modified array})
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    // prepends a cat to the beginning of the cats array (using .unshift() method {with AT LEAST 1 argument; returns length of modified array})
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    // removes the last cat from the cats array (using .pop() method {returns removed element})
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    // removes the first cat from the cats array (using .shift() method {returns removed element})
    cats.shift();
    return cats;
}


/******** NON-DESTRUCTIVE METHODS (Arrays) ********
 * Spread <code>...</code> operator: nondestructively add elements; returns new array
 * .slice() method: nondestructively removes 0 or more elements given 0-2 arguments; returns NEW array of removed elements
 */

function appendCat(name) {
    // appends a cat to the cats array and returns a new array, leaving the cats array unchanged (using spread operator)
    return [...cats, name];
}

function prependCat(name) {
    // prepends a cat to the cats array and returns a new array, leaving the cats array unchanged (using spread)
    return [name, ...cats];
}

function removeLastCat(name) {
    // removes the last cat in the cats array and returns a new array, leaving the cats array unchanged (using .slice(start, end) method)
    return cats.slice(0, -1);
}

function removeFirstCat(name) {
    // removes the first cat from the cats array and returns a new array, leaving the cats array unchanged (using .slice(start) method)
    return cats.slice(1);
}
