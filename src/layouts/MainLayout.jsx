import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider} from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import { lightTheme, darkTheme } from "./theme";



const MainLayout = ({ children, mode }) => {

    const theme = mode === "dark" ? darkTheme : lightTheme;
    
    return (
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Grid container sx={{ height: "100vh" }}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
    );
};

export default MainLayout;
