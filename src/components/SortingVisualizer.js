import { Tooltip, Box } from "@mui/material";
import { useMemo } from "react";

function SortingVisualizer({ Sortarr: { array: arr, blue, pivot, orange } }) {
  const maxValue = useMemo(() => Math.max(...arr), [arr]);

  return (
    <Box
      pt={10}
      display={"flex"}
      sx={{
        justifyContent: "center",
        alignItems: "flex-end",
        height: "90%",
        padding: "10rem",
        overflow: "hidden",
        margin: "0 auto", 
      }}
    >
      {arr.map((h, idx) => (
        <Tooltip title={`Value: ${h}`} key={idx}>
          <Box
            width={10}
            mx={0.5}
            height={`${(h / maxValue) * 100}%`}
            sx={{
              background: orange?.includes(idx) || pivot?.includes(idx)
                ? "linear-gradient(135deg, #F05454, #D04F4F)"
                : blue?.includes(idx)
                ? "linear-gradient(135deg, #554994, #3e3b7e)"
                : "linear-gradient(135deg, #A7D2CB, #7ba8a0)",
              boxShadow: `0 4px 8px rgba(0, 0, 0, 0.3)`,
              transition: "background 0.5s ease-in-out, height 0.5s ease-in-out",
              borderRadius: "5px",
            }}
          />
        </Tooltip>
      ))}
    </Box>
  );
}

export default SortingVisualizer;
