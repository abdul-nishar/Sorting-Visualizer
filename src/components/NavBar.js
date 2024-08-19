import { Button, Grid, ButtonGroup, Typography } from "@mui/material";

function NavBar({
  handleMergeSort,
  handleReset,
  handleBubbleSort,
  handleQuickSort,
  handleInsertionSort,
  handleSelectionSort,
  handleCycleSort,
  handleHeapSort,
  handleCountingSort,
  handleRadixSort,
  handleBucketSort
}) {
  const sortingAlgorithms = [
    { name: "Merge Sort", handler: handleMergeSort },
    { name: "Quick Sort", handler: handleQuickSort },
    { name: "Insertion Sort", handler: handleInsertionSort },
    { name: "Bubble Sort", handler: handleBubbleSort },
    { name: "Selection Sort", handler: handleSelectionSort },
    { name: "Cycle Sort", handler: handleCycleSort },
    { name: "Heap Sort", handler: handleHeapSort },
    { name: "Counting Sort", handler: handleCountingSort },
    { name: "Radix Sort", handler: handleRadixSort },
    { name: "Bucket Sort", handler: handleBucketSort }
  ];
  
  return (
    <Grid
      container
      alignItems="center"
      sx={{ backgroundColor: "black", paddingY: 3, minHeight: 54 }}
    >

      <Grid item xs={2} sx={{ paddingLeft: '4rem' }}>
        <Typography variant="h4" sx={{ color: "white", fontWeight: 'bold' }}>
          Sorting Visualiser
        </Typography>
      </Grid>

      <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup variant="contained" color="primary">
          {sortingAlgorithms.map((algorithm) => (
              <Button
                key={algorithm.name}
                variant="contained"
                color="success"
                sx={{ fontSize: '1.1rem' }}
                onClick={algorithm.handler}
              >
                {algorithm.name}
              </Button>
            ))}
        </ButtonGroup>
      </Grid>

      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '4rem' }}>
        <Button variant="outlined" color="error" onClick={handleReset} sx={{ fontSize: '1.2rem', fontWeight: 'bold', '&:hover': {
          boxShadow: '0.25rem 0.25rem red', 
          transform: 'translate(-0.25rem, -0.25rem)'
        }}}> Reset </Button>
      </Grid>
    </Grid>
  );
}

export default NavBar;