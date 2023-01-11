import {
    Tooltip,
    Box,
    Typography,
    Chip,
} from "@mui/material";
import CountUp from "react-countup";
import { devWorkInfo } from "../../constants/details";
import {useTheme} from '@mui/material/styles';

const DevWorkCount = () => {

    const theme = useTheme();

    return (
        <>
         {devWorkInfo.map((item, index) => (
                                    <Box
                                        key={index}
                                        component="div"
                                        sx={{ width: 1, mb: 1 }}
                                    >
                                        <Tooltip
                                            title={item.tooltipTitle}
                                            placement="left"
                                            arrow
                                        >
                                            <Chip
                                                icon={item.icon}
                                                label={
                                                    <Typography
                                                        variant="body1"
                                                        color={theme.palette.mode === "dark" ? "white" : "black"}
                                                    >
                                                        <CountUp
                                                            start={0}
                                                            end={item.total}
                                                            duration={2}
                                                        />
                                                    </Typography>
                                                }
                                                sx={{
                                                    p: 2,
                                                    backgroundColor: item.color,
                                                    width: 1,
                                                }}
                                            />
                                        </Tooltip>
                                    </Box>
                                ))}

        </>
    )
};

export default DevWorkCount;
 