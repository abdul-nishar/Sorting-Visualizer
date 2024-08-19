function heapify(arr, n, index, steps) {
    let largest = index;
    const leftNode = 2 * index + 1;
    const rightNode = 2 * index + 2;

    if (leftNode < n && arr[leftNode] > arr[largest]) largest = leftNode;
    if (rightNode < n && arr[rightNode] > arr[largest]) largest = rightNode;

    if (largest !== index) {
        [arr[largest], arr[index]] = [arr[index], arr[largest]];
        steps.push({
            array: [...arr],
            blue: [largest],
            pivot: [],
            orange: [index],
        });
        heapify(arr, n, largest, steps);
    }
}

function buildMaxHeap(arr, n, steps) {
    for (let i = Math.floor((n - 2) / 2); i >= 0; i--) {
        heapify(arr, n, i, steps);
    }
}

function HeapSortWithSteps(arr) {
    const steps = [];
    const n = arr.length;
    
    buildMaxHeap(arr, n, steps);
    
    for (let i = n - 1; i >= 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        steps.push({
            array: [...arr],
            blue: [i],
            pivot: [],
            orange: [0],
        });
        heapify(arr, i, 0, steps);
    }
    
    return steps;
}

export default HeapSortWithSteps;
