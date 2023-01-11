import { Divider, Chip, Box, Typography, LinearProgress, Badge } from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
    return (
        <>
            <Divider
                textAlign="left"
                sx={{
                    "&::before, &::after": {
                        borderColor: `${color}.main`,
                    },
                    mt: 1,
                }}
            >
                <Chip
                    icon={
                        <Box component="img" src={icon} sx={{ height: 30 }} />
                    }
                    color={color}
                    label={name}
                    sx={{ color: "#000", p: 2.5 }}
                />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        color={color}
                        sx={{
                            height: 7,
                            borderRadius: 2,
                        }}
                    />
                </Box>
                <Box sx={{ minWidth: 35, ml: 3 }}>
                    <Typography variant="body2" color="purple">
                        <Badge variant="standard" badgeContent={`${Math.round(value)}%`} color={color} />
                        
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Skill;
