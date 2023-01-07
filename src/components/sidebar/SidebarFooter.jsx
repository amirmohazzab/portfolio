import {Box, Typography } from "@mui/material";
import {CopyrightRounded} from "@mui/icons-material";

const SidebarFooter = () => {
    return (
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            height: 100,
            }}
        >
            <Typography variant="subtitle2" color="text.primary">
            Designed by Amir H. Mohazzab
            </Typography>

            <Typography variant="caption" color="text.primary" sx={{ mt: 2 }}>
            Copyright 2022{" "}
            <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
            </Typography>
        </Box>
    )
}

export default SidebarFooter;