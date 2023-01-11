import {useState} from 'react';
import {Typography} from "@mui/material";
import {RandomReveal} from 'react-random-reveal';
import photo from '../../assets/photo.jpg';
import ThemeActionButton from '../ThemeActionButton';
import {CustomAvatar} from '../common';
import SocialMediaIcons from './SocialMediaIcons';

const SidebarHeader = () => {

    const [start, setStart] = useState(false);
    return (
        <>  
        <ThemeActionButton />
        <CustomAvatar 
            avatar={photo}
            size={150}
            fallback="AM"
        />
      
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

            <SocialMediaIcons />
      </>
    )
}

export default SidebarHeader;