import { Typography } from "@mui/material";
import { KeyboardArrowRightRounded } from "@mui/icons-material";

const DevInfo = ({ children }) => {
  return (
    <Typography
      variant="body1"
      color="black"
      textAlign="left"
      sx={{ display: "flex", alignItems: "center", mt: 2 }}
    >
      <KeyboardArrowRightRounded
        sx={{ verticalAlign: "top", color: "primary.main" }}
      />
      {children}
    </Typography>
  );
};

export default DevInfo;
