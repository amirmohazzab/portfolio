import { useState, useEffect } from "react";
import EllipsisText from 'react-ellipsis-text'; 
import { Helmet } from "react-helmet-async";   
import { OpenInNew} from "@mui/icons-material";
import {useTheme} from '@mui/material/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Divider,
  Chip,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TerminalRounded } from "@mui/icons-material";
import { projects } from "../constants/projects";

const Projects = ({helmetTitle}) => {
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
                            icon={<TerminalRounded />}
                            color={theme.palette.mode === "dark" ? "secondary" : "primary"}
                            label={
                                <Typography
                                    variant="body1"
                                    color={theme.palette.mode === "dark" ? "white" : "black"}
                                    sx={{ textAlign: "center" }}
                                >
                                      My projects
                                </Typography>
                            }
                            sx={{ p: 3 }}
                        />
                    </Divider>
        </Slide>
        <Grid container sx={{ mx: 3 }}>
                    {projects.map((project, index) => (
                        <Grid
                            key={index}
                            xs={12}
                            sm={6}
                            md={6}
                            lg={4}
                            sx={{ px: 2, mb: 2 }}
                        >
                            <Slide
                                 direction="up"
                                 in={loading}
                                 style={{
                                     transitionDelay: loading  ? `${index + 3}99ms`: "0ms"
                                 }}
                            >
                                <Card
                                    sx={{
                                        maxWidth: 300,
                                        maxHeight: 300,
                                        backgroundColor: "steelblue",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="150"
                                            image={project.image}
                                            alt={project.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                textAlign="left"
                                                gutterBottom
                                            >
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                textAlign="left"
                                                gutterBottom
                                            >
                                            <EllipsisText 
                                            text={project.info} 
                                            length={100}
                                            />
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button
                                            href={project.link}
                                            size="small"
                                            color="primary"
                                            target="_blank"
                                        >
                                             more <OpenInNew fontSize="small" color="primary"/>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Slide>
                        </Grid>
                    ))}
                </Grid>
      </CardContent>
    </Card>
  );
};

export default Projects;
