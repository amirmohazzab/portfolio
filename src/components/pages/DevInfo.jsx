import { Typography } from "@mui/material";
import { KeyboardArrowRightRounded, OpenInNew } from "@mui/icons-material";

const Info = ({ children }) => {
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

const DevInfo = () => {
  return (
    <>
      <Info> Amir H. Mohazzab </Info>
      <Info>
        {" "}
        ahm.mohazzab@gmail.com{" "}
        <a href="mailto: ahm.mohazzab@gmail.com">
          {" "}
          <OpenInNew fontSize="small" color="secondary" />{" "}
        </a>{" "}
      </Info>
      <Info> +39 3801963404 </Info>
    </>
  );
};

export default DevInfo;
