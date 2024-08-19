function CountingSortForRadix(arr, n, exp) {
    const output = new Array(n);
    const count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Update count[i] to be the position of the digit in the output array
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copy the output array back to the original array
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function RadixSortWithSteps(arr) {
    const steps = [];
    const n = arr.length;

    // Find the maximum number to determine the number of digits
    const maxValue = Math.max(...arr);
    let exp = 1;

    // Perform counting sort for every digit (exp)
    while (Math.floor(maxValue / exp) > 0) {
        // Capture the state of the array before the sorting
        steps.push({
            array: [...arr],
            blue: [],
            pivot: [],
            orange: [],
        });

        CountingSortForRadix(arr, n, exp);
        exp *= 10;

        // Capture the state of the array after the sorting
        steps.push({
            array: [...arr],
            blue: [],
            pivot: [exp],
            orange: [],
        });
    }

    return steps;
}

export default RadixSortWithSteps;

