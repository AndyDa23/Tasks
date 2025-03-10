const originalArray = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, "word", 7, 8, false, 9, 100];

function filterNumbers(arr) {
    return arr.filter(function (item) {
        return typeof item === "number" && item >= 1 && item <= 9;
    });
}

const filteredArray = filterNumbers(originalArray);
console.log("Filtered Array:", filteredArray);
