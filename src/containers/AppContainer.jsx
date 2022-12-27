import { useState, useEffect } from "react";
import ContentContainer from "./ContentContainer";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from '../components/sidebar';
import TabPanel from "../components/TabPanel";
import { Typography, useMediaQuery } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from '../context';
import {useTheme} from '@mui/material/styles';

function AppContainer() {

    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp]);
    
    const handlePageNumber= (event, newValue) => {
        setPageNumber(newValue);
    }

    return (
        <MainContext.Provider value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen}}> 
            <MainLayout>
                <SidebarContainer> 
                    <Sidebar />
                </SidebarContainer>
                <ContentContainer>
                <TabPanel pageNumber={pageNumber} index={0}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            Home
                        </Typography>
                    </TabPanel>
                    <TabPanel pageNumber={pageNumber} index={1}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            About
                        </Typography>
                    </TabPanel>
                    <TabPanel pageNumber={pageNumber} index={2}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            Resume
                        </Typography>
                    </TabPanel>
                    <TabPanel pageNumber={pageNumber} index={3}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            Projects
                        </Typography>
                    </TabPanel>
                </ContentContainer>  
            </MainLayout>
        </MainContext.Provider>
    )
}

export default AppContainer;
