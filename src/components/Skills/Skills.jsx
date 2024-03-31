import React from 'react'
import { Container, Wrapper, Title, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillsStyled.js';
import { skills } from '../../data/constants'
import '../../App.css'


const Skills = () => {
    return (
        <Container id="skills">
        <Wrapper>
            <Title>
                <span className='heading'>
                    02.&nbsp;&nbsp;
                </span>
                    Skills
            </Title>
            
            <SkillsContainer>
                {skills.map((skill) => (
                    <Skill>
                        <SkillTitle>
                            {skill.title}
                        </SkillTitle>
                        <SkillList>
                            {skill.skills.map((item) => (
                            <SkillItem>
                                <SkillImage src={item.image}/>
                                {item.name}
                            </SkillItem>
                            ))}
                        </SkillList>
                    </Skill>
                ))}

            </SkillsContainer>
        </Wrapper>
        </Container>
    )
}

export default Skills
