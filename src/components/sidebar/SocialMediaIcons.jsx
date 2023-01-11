import {Box, IconButton } from '@mui/material';
import {GitHub, LinkedIn, Telegram} from '@mui/icons-material';

const SocialMediaIcons = () => {
    return (
        <Box component="div" sx={{ m: "0 auto", textAlign: "center"}}>
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
    )
};

export default SocialMediaIcons;