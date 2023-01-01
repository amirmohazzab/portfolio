import { useState, useEffect } from "react";
import PagesContainer from "./PagesContainer";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from '../components/sidebar';
import Page from "../pages/components/Page";
import { Typography, useMediaQuery} from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from '../context';
import {useTheme} from '@mui/material/styles';   
import DrawerActionButton from './../components/drawer/DrawerActionButton';
import SwipeableViews from 'react-swipeable-views';
import {Home, About} from '../pages';

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

    const handlePageChange = (index) => {
        setPageNumber(index);
    } 

    return (
        <MainContext.Provider value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen}}> 
            <MainLayout>
                <SidebarContainer> 
                    <Sidebar />
                </SidebarContainer>
                <DrawerActionButton />
                <PagesContainer>
                    <SwipeableViews
                        index={pageNumber}
                        onChangeIndex={handlePageChange}
                    >  
                    <Page pageNumber={pageNumber} index={0}>
                        <Home />
                    </Page>
                    <Page pageNumber={pageNumber} index={1}>
                        <About />
                    </Page>
                    <Page pageNumber={pageNumber} index={2}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            Resume
                        </Typography>
                    </Page>
                    <Page pageNumber={pageNumber} index={3}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            Projects
                        </Typography>
                    </Page>
                    </SwipeableViews>
                </PagesContainer>  
            </MainLayout>
        </MainContext.Provider>
    )
}

export default AppContainer;
