import React from 'react'
import { Container, Wrapper, Title, Desc, TimelineSection } from './EducationStyled.js';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';


const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: '2px' }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education
