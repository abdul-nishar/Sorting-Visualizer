function BucketSortWithSteps(arr) {
    const steps = [];
    const n = arr.length;
    const k = 10; // Number of buckets

    // Find the maximum value to determine the range of values
    const maxValue = Math.max(...arr);
    
    // Create k empty buckets
    const buckets = Array.from({ length: k }, () => []);

    // Place elements into their corresponding buckets
    for (let i = 0; i < n; i++) {
        const bucketIdx = Math.floor((k * arr[i]) / (maxValue + 1));
        buckets[bucketIdx].push(arr[i]);

        // Capture the state after placing the element in the bucket
        steps.push({
            array: [...arr],
            blue: [],
            pivot: [bucketIdx],
            orange: [],
        });
    }

    // Sort individual buckets and combine the elements back into the array
    let index = 0;
    for (let i = 0; i < k; i++) {
        buckets[i].sort((a, b) => a - b);

        // Capture the state after sorting the bucket
        steps.push({
            array: [...arr],
            blue: [i],
            pivot: [],
            orange: [],
        });

        // Place sorted elements back into the original array
        for (let j = 0; j < buckets[i].length; j++) {
            arr[index++] = buckets[i][j];

            // Capture the state after placing the element back into the array
            steps.push({
                array: [...arr],
                blue: [index - 1],
                pivot: [],
                orange: [],
            });
        }
    }

    return steps;
}

export default BucketSortWithSteps;
