import './style/App.css';
import './style/experience.css';
import Data from './dataresume.json'
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import React, { useState } from 'react';

function Experience() {
    const experiences = Data.experience;

    const experiencesToShowInitially = 2;
    const [showAllExperiences, setShowAllExperiences] = useState(false);

    const toggleExperienceView = () => {
        setShowAllExperiences(prevState => !prevState);
      };

    const limitedExperiences = showAllExperiences
      ? experiences
      : experiences.slice(0, experiencesToShowInitially);

    return (
        <div class="grid" id='experience'>
            <div class="whole grid_row">               
                <div class="body">
                    <div class='experience'>
                        <h1 class='experience title'> Experience </h1>
                        <div class='experience-section'>
                            {
                                limitedExperiences.map(item => {
                                    
                                    return (
                                        <div>
                                            <div class='experience-postion'> {item.experience} </div>
                                            <div class='experience-place'>
                                                <div class='experience-company'> {item.company} </div>
                                                <div class='experience-location separator'> <span class='experience-info'> {item.company_location}  </span></div>
                                                <div class='experience-duration separator'> From <span> {item.work_begin} </span> to <span> {item.work_end} </span> </div>
                                            </div>
                                            <div class='experience-task'>
                                                
                                                <ul class='experience-tasklist'>
                                                    {
                                                        item.task.map( item => {
                                                            return(
                                                                <li class='experience-taskitem'> {item} </li>
                                                            )
                                                        })
                                                    }                  
                                                </ul>
                                            </div>
                                            <div class='experience-skill'>
                                                    {
                                                        item.skill.map( item => {
                                                            return(
                                                                <span class='experience-skillitem'> {item} </span>
                                                            )
                                                        })
                                                    }
                                                    
                                            </div>
                                        </div>
                                    )                               
                                })
                            }

                {experiences.length > experiencesToShowInitially && (
                        <div className='experience_toggle' onClick={toggleExperienceView}>
                        {showAllExperiences ? (
                            <>
                            <MdExpandLess className='experience_toggle_icon' /> Collapse
                            </>
                        ) : (
                            <>
                            <MdExpandMore className='experience_toggle_icon' /> View {experiences.length - 2} More 
                            </>
                        )}
                        </div>
                    )}
                                        
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Experience;


