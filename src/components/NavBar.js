import { Button, Grid, ButtonGroup } from "@mui/material";

function NavBar({
  handleMergeSort,
  handleReset,
  handleBubbleSort,
  handleQuickSort,
  handleInsertionSort,
  handleSelectionSort,
}) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "black", paddingY: 2, minHeight: 54 }}
    >
      <Grid item marginRight={10}>
        <Button sx={{ color: "red" }} onClick={handleReset}>
          Reset
        </Button>
      </Grid>
      <Grid item>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={handleMergeSort}>Merge Sort</Button>
          <Button onClick={handleQuickSort}>Quick Sort</Button>
          <Button onClick={handleInsertionSort}>Insertion Sort</Button>
          <Button onClick={handleBubbleSort}>Bubble Sort</Button>
          <Button onClick={handleSelectionSort}>Selection Sort</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default NavBar;
