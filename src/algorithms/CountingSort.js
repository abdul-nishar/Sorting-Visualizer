function CountingSortWithSteps(arr) {
    const steps = [];
    const n = arr.length;
    
    let low = Math.min(...arr);
    let high = Math.max(...arr);
    
    const k = high - low + 1;
    const count = new Array(k).fill(0);
    const output = new Array(n);
    
    // Store the count of each element
    for (let i = 0; i < n; i++) {
        count[arr[i] - low]++;
        steps.push({
            array: [...arr],
            blue: [i],
            pivot: [],
            orange: [],
        });
    }
    
    // Update count[i] to store the position of this element in the output array
    for (let i = 1; i < k; i++) {
        count[i] += count[i - 1];
    }
    
    // Build the output array using the count array
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i] - low] - 1] = arr[i];
        count[arr[i] - low]--;
        steps.push({
            array: [...output],
            blue: [],
            pivot: [],
            orange: [count[arr[i] - low]], // Mark the position in the output array
        });
    }
    
    // Copy the sorted elements back into the original array
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
        steps.push({
            array: [...arr],
            blue: [i],
            pivot: [],
            orange: [],
        });
    }
    
    return steps;
}

export default CountingSortWithSteps;
