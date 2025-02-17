function extract(start, end) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numbers.slice(start, end + 1);
}

console.log(extract(2, 4)); // Output: [3, 4, 5]
console.log(extract(0, 2)); // Output: [1, 2, 3]
console.log(extract(3, 6)); // Output: [4, 5, 6, 7]