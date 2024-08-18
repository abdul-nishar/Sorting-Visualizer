import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import SortingVisualizer from "./components/SortingVisualizer";
import NavBar from "./components/NavBar";
import { mergeSortWithSteps } from "./algorithms/MergeSort";
import BubbleSort from "./algorithms/BubbleSort";
import QuickSort from "./algorithms/QuickSort";
import InsertionSortWithSteps from "./algorithms/InsertionSort";
import SelectionSortWithSteps from "./algorithms/SelectionSort";
import "./app.css";

function createRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 350));
  }
  return arr;
}

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const [Sortarr, setSortarr] = useState({
    array: createRandomArray(70),
    blue: [],
    pivot: [],
    orange: [],
  });

  // Use a ref to store active timeouts
  const timeoutsRef = useRef([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutsRef.current = [];
  };

  const startAlgorithm = (steps, interval) => {
    clearAllTimeouts();
    for (let i = 0; i < steps.length; i++) {
      const timeout = setTimeout(() => {
        setSortarr(steps[i]);
      }, i * interval);
      timeoutsRef.current.push(timeout);
    }
  };

  const handleReset = () => {
    clearAllTimeouts();
    setSortarr({
      array: createRandomArray(70),
      blue: [],
      pivot: [],
      orange: [],
    });
  };

  const handleMergeSort = () => {
    const steps = mergeSortWithSteps(
      Sortarr.array,
      0,
      Sortarr.array.length - 1
    );
    startAlgorithm(steps, 45);
  };

  const handleQuickSort = () => {
    const steps = QuickSort(Sortarr.array, 0, Sortarr.array.length - 1);
    startAlgorithm(steps, 60);
  };

  const handleInsertionSort = () => {
    const steps = InsertionSortWithSteps(Sortarr.array);
    startAlgorithm(steps, 10);
  };

  const handleSelectionSort = () => {
    const steps = SelectionSortWithSteps(Sortarr.array);
    startAlgorithm(steps, 50);
  };

  const handleBubbleSort = () => {
    const { steps } = BubbleSort(Sortarr.array);
    startAlgorithm(steps, 80);
  };

  return (
    <Box minHeight={"103vh"} sx={{ background: "#212121" }}>
      <NavBar
        handleMergeSort={handleMergeSort}
        handleBubbleSort={handleBubbleSort}
        handleReset={handleReset}
        handleQuickSort={handleQuickSort}
        handleInsertionSort={handleInsertionSort}
        handleSelectionSort={handleSelectionSort}
      />
      <SortingVisualizer Sortarr={Sortarr} />
    </Box>
  );
}

export default App;
