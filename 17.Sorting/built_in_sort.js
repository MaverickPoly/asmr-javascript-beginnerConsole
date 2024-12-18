function sortArray(array) {
    return array.sort();
}

const array = [5, 4, 6, 7, 3, 2, 1, 8, 9];
const result = sortArray(array);
console.log(result);

for (let el of result) {
    console.log(el);
}
