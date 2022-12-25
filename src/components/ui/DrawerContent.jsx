import { Box, Typography, Avatar, Tab, Tabs, Divider } from "@mui/material";
import {
  HomeRounded,
  PersonOutlined,
  TextSnippetRounded,
  TerminalRounded,
  CopyrightRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const DrawerContent = ({ value, handleChange, setDrawerOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <Avatar
        src={require("../../assets/photo.jpg")}
        variant="rounded"
        sx={{
          height: 150,
          width: 150,
          margin: "0 auto",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        AM
      </Avatar>
      <Typography variant="h6" color="whitesmoke">
        Amir H. Mohazzab
      </Typography>

      <Typography variant="caption" color="whitesmoke">
        React Developer
      </Typography>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButton="auto"
        allowScrollableButtonMobile
        value={value}
        onChange={handleChange}
      >
        <Tab
          label="Home"
          icon={<HomeRounded />}
          iconPosition="start"
          sx= {{"&.MuiTab-root": {
            backgroundColor: grey[800],
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            minHeight: 50,
          },
        }}
        onClick={() => setDrawerOpen(false)}
          {...tabProps(0)}
        />
        <Tab
          label="About"
          icon={<PersonOutlined />}
          iconPosition="start"
          sx= {{"&.MuiTab-root": {
            backgroundColor: grey[800],
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            minHeight: 50,
          },
        }}
        onClick={() => setDrawerOpen(false)}
          {...tabProps(1)}
        />
        <Tab
          label="Resume"
          icon={<TextSnippetRounded />}
          iconPosition="start"
          sx= {{"&.MuiTab-root": {
            backgroundColor: grey[800],
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            minHeight: 50,
          },
        }}
        onClick={() => setDrawerOpen(false)}
          {...tabProps(2)}
        />
        <Tab
          label="Projects"
          icon={<TerminalRounded />}
          iconPosition="start"
          sx= {{"&.MuiTab-root": {
            backgroundColor: grey[800],
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            minHeight: 50,
          },
        }}
        onClick={() => setDrawerOpen(false)}
          {...tabProps(3)}
        />
      </Tabs>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 1 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          Designed by Amir H. Mohazzab
        </Typography>

        <Typography variant="caption" color="whitesmoke" sx={{ mt: 2 }}>
          Copyright 2022{" "}
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerContent;
