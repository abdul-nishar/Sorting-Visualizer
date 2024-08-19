// src/algorithms/CycleSort.js

function CycleSortWithSteps(arr) {
    const steps = [];
    const n = arr.length;
    let writes = 0;
  
    for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
      let item = arr[cycleStart];
      let pos = cycleStart;
  
      // Find the position where we put the item
      for (let i = cycleStart + 1; i < n; i++) {
        if (arr[i] < item) pos++;
      }
  
      // If the item is already in the correct position, skip it
      if (pos === cycleStart) continue;
  
      // Ignore duplicates
      while (item === arr[pos]) pos++;
  
      // Swap the item to the correct position
      if (pos !== cycleStart) {
        [arr[pos], item] = [item, arr[pos]];
        writes++;
        steps.push({
          array: [...arr],
          blue: [pos],
          pivot: [],
          orange: [cycleStart],
        });
      }
  
      // Rotate the rest of the cycle
      while (pos !== cycleStart) {
        pos = cycleStart;
        for (let i = cycleStart + 1; i < n; i++) {
          if (arr[i] < item) pos++;
        }
  
        while (item === arr[pos]) pos++;
  
        if (item !== arr[pos]) {
          [arr[pos], item] = [item, arr[pos]];
          writes++;
          steps.push({
            array: [...arr],
            blue: [pos],
            pivot: [],
            orange: [cycleStart],
          });
        }
      }
    }
  
    return steps;
  }

  export default CycleSortWithSteps;
  