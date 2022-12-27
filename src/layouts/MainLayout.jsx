import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import { theme } from "./theme";



const MainLayout = ({ children }) => {
    return (
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title> Amir H. Mohazzab Personal Website </title>
                    </Helmet>
                    <Grid container sx={{ height: "100vh" }}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
    );
};

export default MainLayout;
