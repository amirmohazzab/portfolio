import {useContext} from 'react';
import { Tab, Tabs} from "@mui/material";
import {grey} from '@mui/material/colors';
import MainContext from '../../context';
import {tabsData} from '../data/tabsData.sidebar';
import {useTheme} from '@mui/material/styles';

const SidebarTabs = () => {

    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);

    const theme = useTheme();
    const data = tabsData();
    

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            allowScrollableButtonMobile
            value={pageNumber}
            indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
            textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
            onChange={handlePageNumber}
        >
            {
                data.map((tab, index) => (
                    <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    sx= {{"&.MuiTab-root": {
                        backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[500],
                        color: "text.primary",
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        minHeight: 50,
                    },
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                    />

                ))
            }
      </Tabs>
    )
}

export default SidebarTabs;