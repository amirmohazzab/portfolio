import { Box, Divider } from "@mui/material";
import {SidebarHeader, SidebarFooter, SidebarTabs} from ".";

const SidebarContent = () => {
  

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <SidebarHeader />

      <Divider variant="middle" />

      <SidebarTabs />

      <Divider variant="middle"  />

      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
