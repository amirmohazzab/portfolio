import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";   
import {useTheme} from '@mui/material/styles';
import EllipsisText from 'react-ellipsis-text'; 
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Slide,
  CardActionArea,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TextSnippetRounded, HomeRepairServiceRounded, SchoolRounded, OpenInNew} from "@mui/icons-material";

const MyResume = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title> {helmetTitle} </title>
      </Helmet>
      <CardContent>
            <Slide
                    direction="down"
                    in={loading}
                    style={{
                        transitionDelay: loading ? "100ms" : "0ms",
                    }}
                >
                    <Divider
                        textAlign="center"
                        sx={{
                            "&::before, &::after": {
                                borderColor: "primary.main",
                            },
                            mb: 3,   
                        }}
                    >
                        <Chip
                            icon={<TextSnippetRounded />}
                            color={theme.palette.mode === "dark" ? "secondary" : "primary"}
                            label={
                                <Typography
                                    variant="body1"
                                    color={theme.palette.mode === "dark" ? "white" : "black"}
                                    sx={{ textAlign: "center" }}
                                >
                                      My Resume
                                </Typography>
                            }
                            sx={{ p: 3 }}
                        />
                    </Divider>
            </Slide>
            <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>
                        <Slide
                            direction="down"
                            in={loading}
                            style={{
                                transitionDelay: loading ? "200ms" : "0ms",
                            }}
                        >
                            <Divider
                                textAlign="center"
                                sx={{
                                    "&::before, &::after": {
                                        borderColor: "warning.main",
                                    },
                                }}
                            >
                                <Chip
                                    icon={<HomeRepairServiceRounded />}
                                    color="warning"
                                    label={
                                        <Typography
                                            variant="body1"
                                            color={theme.palette.mode === "dark" ? "white" : "black"}
                                            sx={{ textAlign: "center" }}
                                        >
                                            Experience
                                        </Typography>
                                    }
                                    sx={{ p: 3 }}
                                />
                            </Divider>
                        </Slide>
                        
                        <Slide
                            direction="up"
                            in={loading}
                            style={{
                                transitionDelay: loading ? "400ms" : "0ms",
                            }}
                        >
                             <Box sx={{display: "flex", justifyContent: "center", mt: 10}}>  
                            <Card sx={{
                                        maxWidth: 300,
                                        maxHeight: 300,
                                        backgroundColor: "steelblue"
                                    }}
                            >
                                <CardActionArea> 
                                    <CardContent>
                                                <Typography
                                                    variant="body1"
                                                    textAlign="left"
                                                    gutterBottom
                                                >
                                                    React Developer
                                                </Typography>
                                                <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                textAlign="left"
                                                gutterBottom
                                                >
                                                <EllipsisText 
                                                text={"Support and development of the Website using React and NodeJS, 2021-2023"} 
                                                length={100}
                                                />
                                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                        <Button
                                            href="https://www.linkedin.com/in/ahmohazzab"
                                            size="small"
                                            color="primary"
                                            target="_blank"
                                        >
                                             more <OpenInNew fontSize="small" color="primary"/>
                                        </Button>
                                </CardActions>
                            </Card>
                            </Box>
                        </Slide>
                    </Grid>
                    
                    <Grid xs={6}>
                        <Slide
                            direction="down"
                            in={loading}
                            style={{
                                transitionDelay: loading ? "200ms" : "0ms",
                            }}
                        >
                            <Divider
                                textAlign="center"
                                sx={{
                                    "&::before, &::after": {
                                        borderColor: "info.main",
                                    },
                                }}
                            >
                                <Chip
                                    icon={<SchoolRounded />}
                                    color="info"
                                    label={
                                        <Typography
                                            variant="body1"
                                            color={theme.palette.mode === "dark" ? "white" : "black"}
                                            sx={{ textAlign: "center" }}
                                        >
                                            Education
                                        </Typography>
                                    }
                                    sx={{ p: 3 }}
                                />
                            </Divider>
                        </Slide>
                        <Slide
                            direction="up"
                            in={loading}
                            style={{
                                transitionDelay: loading ? "400ms" : "0ms",
                            }}
                        >
                            <Box sx={{display:"flex", justifyContent: "center", mt: 10}}> 
                            <Card  sx={{
                                        maxWidth: 300,
                                        maxHeight: 300,
                                        backgroundColor: "steelblue",
                                    }}>
                                <CardContent>
                                            <Typography
                                                variant="body1"
                                                textAlign="left"
                                                gutterBottom
                                            >
                                                Ph.D. Mechanical engineering
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                textAlign="left"
                                                gutterBottom
                                            >
                                            <EllipsisText 
                                            text={"Politecnico di Milano, 2011-2014"} 
                                            length={100}
                                            />
                                            </Typography>
                                </CardContent>
                                <CardActions>
                                        <Button
                                            href="https://www.linkedin.com/in/ahmohazzab"
                                            size="small"
                                            color="primary"
                                            target="_blank"
                                        >
                                             more <OpenInNew fontSize="small" color="primary"/>
                                        </Button>
                                </CardActions>
                            </Card>
                            </Box>
                        </Slide>
                    </Grid>
                </Grid>
        </CardContent>
    </Card>
  );
};

export default MyResume;