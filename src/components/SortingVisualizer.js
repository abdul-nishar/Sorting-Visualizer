import Box from "@mui/material/Box";

function SortingVisualizer({ Sortarr: { array: arr, blue, pivot, orange } }) {
  return (
    <Box
      pt={25}
      display={"flex"}
      sx={{ justifyContent: "center", alignItems: "flex-end" }}
    >
      {arr.map((h, idx) => (
        <Box
          key={idx}
          width={7}
          mx={0.15}
          height={h}
          sx={{
            background: orange?.includes(idx) || pivot?.includes(idx)
              ? "#F05454"
              : blue?.includes(idx)
              ? "#554994"
              : "#A7D2CB",
          }}
        />
      ))}
    </Box>
  );
}

export default SortingVisualizer;
