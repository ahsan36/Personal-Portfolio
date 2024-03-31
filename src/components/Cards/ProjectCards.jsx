import React from 'react'
import { ButtonGroup, Button, Card, Image, Tags, Title, Tag, Details, Description } from './ProjectCardStyled';
import Modal from '@mui/material/Modal';
import GitHub from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';


const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>

            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>

            {/* Project Title and Description */}
            <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
            </Details>

            {/* Button */}
            <ButtonGroup>
            <a href={project?.github} target='_blank'><Button><GitHub /></Button></a>
            <a href={project?.webapp} target='_blank'><Button><VisibilityIcon /></Button></a>
            </ButtonGroup>
            
        </Card>
    )
}

export default ProjectCards