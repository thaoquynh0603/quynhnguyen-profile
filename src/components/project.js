import React, { useState } from 'react';
import './style/App.css';
import './style/about.css';
import './style/project.css';
import { IoCode, IoExpandOutline, IoContract } from "react-icons/io5";
import { IoIosPeople, IoIosBookmark, IoMdEye } from "react-icons/io";
import {  AiOutlineStar, AiFillStar,  } from 'react-icons/ai';
import Data from './dataresume.json'

function Project() {
    const projects = Data.project;
      // State to track whether the style should be changed
    const [clickedDiv, setClickedDiv] = useState(null);

    // Click event handler to toggle the style
    const handleDivClick = (id) => {
        setClickedDiv(id === clickedDiv ? null : id);
    }

    return (
        <div class="grid" id='project'>
            <div class="whole">               
                <div class="body">
                    <div class='project'>
                        <h1 class='project-title title'> Project </h1>
                        <div class='project-grid grid_row project-wrap'>
                        {
                            projects.map(item => {
                                const renderDifficultyStars = () => {
                                    let stars = [];
                                
                                    for (let i = 0; i < item.difficult; i++) {
                                        stars.push(<AiFillStar key={i} className="starIcon"/>);
                                        }
                                    
                                        for (let i = item.difficult; i < 3; i++) {
                                        stars.push(<AiOutlineStar key={i} className="starIcon"/>);
                                        }
                                    
                                        return stars;
                                    };

                                return(
                                    <div class={clickedDiv === item ? 'project_section section_changed' : 'project_section'}>
                                        <div class={clickedDiv === item ? 'project_expand icon_changed' : 'project_expand'} onClick={() => handleDivClick(item)}> <IoExpandOutline id='expand'/> <IoContract id='contract' /> </div>
                                        <p class='project_title'> {item.name} <span class='project_year'> ({item.date}) </span> </p>
                                        
                                        <div class="projectItemInfo">
                                            <p class='projectItem_Item'> <IoIosBookmark /> Type: <span> {item.projectype} </span></p>
                                            <p class='projectItem_Item'> <IoIosPeople /> Difficulty Level: <span class='project_diff'> {renderDifficultyStars()} </span></p>
                                        </div>
                                        

                                        <div class={clickedDiv === item ? 'projectDetail detail_changed' : 'projectDetail'}>
                                            <div class='projectDescription'>
                                                {
                                                    item.description.map( item => {
                                                        return(
                                                            <li class='projectDescription_item'> {item} </li>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div class='projectSkilltags'>
                                            {
                                                    item.skill_tag.map( item => {
                                                        return(
                                                            <p class='projectSkilltags_item'> {item} </p>
                                                        )
                                                    })
                                            }
                                            </div>
                                            <div class='projectLinkWrap'>
                                            {item.viewLink && (
                                                <a href={item.viewLink} target='_blank'  rel="noreferrer" class='projectLink'>  <IoMdEye /> View  </a>
                                            )}
                                            {item.sourceCode && (
                                                <a href={item.sourceCode} target='_blank'  rel="noreferrer" class='projectLink'>  <IoCode /> Source Code  </a>
                                            )}
                                            </div>
                                        </div>
                                        
                                    </div>
                            )})
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;