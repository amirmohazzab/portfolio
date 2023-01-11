import { useState, useEffect } from "react";
import {devSkills} from '../../constants/skills';
import {Skill} from '.';

const Skills = () => {

    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {

            setJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 60);
            });

            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 85);
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });

            setReactJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 65);
            });

            setNodeJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 50);
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 30);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } = devSkills; 

    return (
        <> 
        <Skill
                            name={htmlSkill.name}
                            icon={htmlSkill.icon}
                            color={htmlSkill.color}
                            value={html}
                        />
                        <Skill
                            name={cssSkill.name}
                            icon={cssSkill.icon}
                            color={cssSkill.color}
                            value={css}
                        />
                        <Skill
                            name={jsSkill.name}
                            icon={jsSkill.icon}
                            color={jsSkill.color}
                            value={javascript}
                        />
                        <Skill
                            name={reactSkill.name}
                            icon={reactSkill.icon}
                            color={reactSkill.color}
                            value={reactJs}
                        />
                        <Skill
                            name={nodeSkill.name}
                            icon={nodeSkill.icon}
                            color={nodeSkill.color}
                            value={nodeJs}
                        />
                        <Skill
                            name={gitSkill.name}
                            icon={gitSkill.icon}
                            color={gitSkill.color}
                            value={git}
                        />
                        </>
    )
};

export default Skills;