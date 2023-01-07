import { useState, useEffect } from "react";
import PagesContainer from "./PagesContainer";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from '../components/sidebar';
import Page from "../pages/components/Page";
import { useMediaQuery} from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from '../context';
import {useTheme} from '@mui/material/styles';   
import DrawerActionButton from './../components/drawer/DrawerActionButton';
import SwipeableViews from 'react-swipeable-views';
import {Home, About, Resume, Projects, Contact} from '../pages';

function AppContainer() {

    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mode, setMode] = useState();

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light");
    }, []);

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

    const handleThemeChange = () => {
        setMode(prevMode => prevMode==="light" ? "dark" : "light");
    }

    return (
        <MainContext.Provider value={{pageNumber, handlePageNumber, handleThemeChange, drawerOpen, setDrawerOpen}}> 
            <MainLayout mode={mode}>
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
                        <Home helmetTitle="Amir H. Mohazzab Website | Main" />
                    </Page>
                    <Page pageNumber={pageNumber} index={1}>
                        <About helmetTitle="Amir H. Mohazzab Website | About" />
                    </Page>
                    <Page pageNumber={pageNumber} index={2}>
                        <Resume helmetTitle="Amir H. Mohazzab Website | Resume" />
                    </Page>
                    <Page pageNumber={pageNumber} index={3}>
                       <Projects helmetTitle="Amir H. Mohazzab Website | Projects" />
                    </Page>
                    <Page pageNumber={pageNumber} index={4}>
                       <Contact helmetTitle="Amir H. Mohazzab Website | Contact" />
                    </Page>
                    </SwipeableViews>
                </PagesContainer>  
            </MainLayout>
        </MainContext.Provider>
    )
}

export default AppContainer;
