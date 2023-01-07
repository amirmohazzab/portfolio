import {useState} from 'react';
import {Typography, Avatar, Box, IconButton } from "@mui/material";
import {RandomReveal} from 'react-random-reveal';
import {GitHub, LinkedIn, Telegram} from '@mui/icons-material';
import photo from '../../assets/photo.jpg';
import ThemeActionButton from '../ThemeActionButton';

const SidebarHeader = () => {

    const [start, setStart] = useState(false);
    return (
        <>  
        <ThemeActionButton />
        <Avatar
        src={photo}
        variant="rounded"
        sx={{
          height: 150,
          width: 150,
          margin: "0 auto",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
        >
        AM
      </Avatar>
      
      <Typography variant="h6" color="#F93C92">
                <Typography variant="caption" color="tomato">
                    {" {{ "}
                </Typography>
                <RandomReveal
                    isPlaying
                    duration={4}
                    characters="Amir H. Mohazzab"
                    onComplete={() => setStart(true)}
                />

                <Typography variant="caption" color="tomato">
                    {" }} "}
                </Typography>
            </Typography>
            {start && (
                <Typography variant="caption" color="gray">
                    <Typography variant="caption" color="tomato">
                        [[{" "}
                    </Typography>
                    <RandomReveal
                        isPlaying
                        duration={4}
                        characters="React Developer"
                    />
                    <Typography variant="caption" color="tomato">
                        {" "}
                        ]]
                    </Typography>
                </Typography>
            )}

            <Box sx={{ m: "0 auto", textAlign: "center", 
                      display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block"}
                    }}
            >
                <IconButton aria-label="Github">
                    <a
                        href="https://github.com/amirmohazzab"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub sx={{ color: "gray" }} />
                    </a>
                </IconButton>
                <IconButton aria-label="LinkedIn">
                    <a
                        href="https://www.linkedin.com/in/ahmohazzab"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn sx={{ color: "gray" }} />
                    </a>
                </IconButton>
                
                <IconButton aria-label="Telegram">
                    <a
                        href="https://t.me/ahmohazzab"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Telegram sx={{ color: "gray" }} />
                    </a>
                </IconButton>
            </Box>
      
      </>
    )
}

export default SidebarHeader;