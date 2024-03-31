import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyled.js'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { Modal } from '@mui/material';
import '../../App.css'

const Projects = () => {
    const [toggle, setToggle] = useState('all');
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    
    return (
        <Container id="projects" >
            <Wrapper>
                <Title>
                    <span className='heading'>
                        03.&nbsp;&nbsp;
                    </span>
                    Projects
                </Title>

                {/* Description */}
                <Desc>
                    I have worked on a wide range of projects. Here are some of my projects.
                </Desc>

                <ToggleButtonGroup >
                    {toggle === 'all' ?
                        <ToggleButton 
                            active 
                            value="all" 
                            onClick={() => setToggle('all')}
                        >
                            All
                        </ToggleButton>
                        :
                        <ToggleButton 
                            value="all" 
                            onClick={() => setToggle('all')}
                        >
                            All
                        </ToggleButton>
                    }
                <Divider />

                {toggle === 'frontend' ?
                    <ToggleButton 
                        active 
                        value="frontend" 
                        onClick={() => setToggle('frontend')}
                    >
                        Frontend APP'S
                    </ToggleButton>
                    :
                    <ToggleButton 
                        value="frontend" 
                        onClick={() => setToggle('frontend')}
                    >
                        Frontend APP'S
                    </ToggleButton>
                }
                <Divider />

                {toggle === 'full stack' ?
                    <ToggleButton 
                        active 
                        value="full stack" 
                        onClick={() => setToggle('full stack')}
                    >
                        Full Stack APP'S
                    </ToggleButton>
                    :
                    <ToggleButton 
                        value="full stack" 
                        onClick={() => setToggle('full stack')}
                    >
                        Full Stack APP'S
                    </ToggleButton>
                }
                </ToggleButtonGroup>

                <CardContainer>
                {toggle === 'all' && projects
                    .map((project) => (
                    <ProjectCard 
                        project={project} 
                        openModal={openModal} 
                        setOpenModal={setOpenModal}
                    />
                    ))
                }
                {projects
                    .filter((item) => item.category == toggle)
                    .map((project) => (
                    <ProjectCard 
                        project={project} 
                        openModal={openModal} 
                        setOpenModal={setOpenModal}
                    />
                    ))
                }
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects
