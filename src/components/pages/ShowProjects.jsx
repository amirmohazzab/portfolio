import {
    Typography,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    CardActions,
    Button,
    Slide,
  } from "@mui/material";
  import EllipsisText from 'react-ellipsis-text'; 
  import { OpenInNew} from "@mui/icons-material";
  import { projects } from "../../constants/projects";
  import Grid from "@mui/material/Unstable_Grid2";

const ShowProjects = ({loading}) => {
    return (
        <> 
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
        </>
    )
};

export default ShowProjects;