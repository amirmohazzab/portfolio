import { useState } from "react";
import ContentContainer from "./components/ContentContainer";
import MainLayout from "./components/layouts/MainLayout";
import Sidebar from './components/Sidebar';
import TabPanel from "./components/tabs/TabPanel";
import { Typography } from "@mui/material";

function App() {

    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <MainLayout>
            <Sidebar value={value} handleChange={handleChange} />
            <ContentContainer>
            <TabPanel value={value} index={0}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                         Home
                    </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                        About
                    </Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                         Resume
                    </Typography>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                         Projects
                    </Typography>
                </TabPanel>
            </ContentContainer>  
        </MainLayout>
    )
}

export default App;
