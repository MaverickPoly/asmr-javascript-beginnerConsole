function bubble_sort(array) {
    let len = array.length - 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const array = [6, 4, 3, 8, 9, 7, 5, 2, 1];
const result = bubble_sort(array);
console.log(result);

for (let el of result)
    console.log(el)

