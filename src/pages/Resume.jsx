import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import EllipsisText from "react-ellipsis-text";
import {
  Typography,
  Card,
  CardContent,
  Slide,
  CardActionArea,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  TextSnippetRounded,
  SchoolRounded,
  OpenInNew,
  HomeRepairServiceRounded,
} from "@mui/icons-material";
import { CustomDivider } from "./../components/common";

const MyResume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);


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
        <CustomDivider
          bColor="error.main"
          cColor="error"
          icon={<TextSnippetRounded />}
          align="center"
          text="Resume"
        />

        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="Experience"
            />

            <Slide
              direction="up"
              in={loading}
              style={{
                transitionDelay: loading ? "400ms" : "0ms",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <Card
                  sx={{
                    maxWidth: 300,
                    maxHeight: 300,
                    backgroundColor: "warning.main",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="body1" textAlign="left" gutterBottom>
                        React Developer
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign="left"
                        gutterBottom
                      >
                        <EllipsisText
                          text={
                            "Support and development of the Website using React and NodeJS, 1/2021-present"
                          }
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
                      more <OpenInNew fontSize="small" color="primary" />
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Slide>
          </Grid>

          <Grid xs={6}>
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="Education"
            />

            <Slide
              direction="up"
              in={loading}
              style={{
                transitionDelay: loading ? "400ms" : "0ms",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <Card
                  sx={{
                    maxWidth: 300,
                    maxHeight: 300,
                    backgroundColor: "info.main",
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" textAlign="left" gutterBottom>
                      Ph.D. Mechanical engineering
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="left"
                      gutterBottom
                    >
                      <EllipsisText
                        text={"Politecnico di Milano, 1/2011-9/2014"}
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
                      more <OpenInNew fontSize="small" color="primary" />
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
