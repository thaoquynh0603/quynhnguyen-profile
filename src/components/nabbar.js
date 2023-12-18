import './style/App.css';
import Data from './dataresume.json'
import { FaGithub , FaLinkedin, FaAlignJustify } from "react-icons/fa";

function Nabbar() {
    return (
        <div class="grid grid_nav">
                <div class="whole grid_row">
                        <div class="navigation">
                            <div class="navigation_container">
                                <div class='profile-img'>
                                    <img src={Data.img_source} id='profile-img' alt='profile-image'></img>
                                </div>

                                <div class="intro">
                                    <div class="intro-name">
                                        {Data.name}
                                    </div>
                                    <div class="intro-title">
                                            {Data.title}
                                    </div>
                                </div>
                        
        
                                <nav class="category">
                                    <ul class="category_list">
                                        <li class="category_item"><a href='#' class="category_item_a"> About </a> </li>
                                        <li class="category_item"><a href='#education' class="category_item_a"> Education  </a> </li>
                                        <li class="category_item"><a href='#skills' class="category_item_a"> Skills  </a> </li>
                                        <li class="category_item"><a href='#experience' class="category_item_a"> Experience </a></li>
                                        <li class="category_item"><a href='#project' class="category_item_a"> Project </a> </li>
                                        <li class="category_item"><a href='#qualification' class="category_item_a"> Qualification </a> </li>
                                        <li class="category_item"><a href='#contact' class="category_item_a"> Contact </a> </li>
                                    </ul>
                                </nav>

                                <div class='social-media'>
                                    <div class='social-media-item'><a href={Data.linkedin_link} > <FaLinkedin /> </a></div>
                                    <div class='social-media-item'><a href={Data.github}> <FaGithub /> </a></div>
                                </div>
                            </div>

                            <div class="navigation_responsive">                
                                <div class="intro">
                                    <div class="intro-name" >
                                        <a href="#">{Data.name}</a>
                                    </div>
                                </div>

                                <div class='res_open'>  <FaAlignJustify /> </div>
        
                                <nav class="category_responsive">
                                    <ul class="category_list">
                                        <li class="category_item" id="category_item_about"><a href='#' class="category_item_a"> About </a> </li>
                                        <li class="category_item"><a href='#education' class="category_item_a"> Education  </a> </li>
                                        <li class="category_item"><a href='#skills' class="category_item_a"> Skills  </a> </li>
                                        <li class="category_item"><a href='#experience' class="category_item_a"> Experience </a></li>
                                        <li class="category_item"><a href='#project' class="category_item_a"> Project </a> </li>
                                        <li class="category_item"><a href='#qualification' class="category_item_a"> Qualification </a> </li>
                                        <li class="category_item"><a href='#contact' class="category_item_a"> Contact </a> </li>
                                    </ul>
                                </nav>

                                <div class='social-media'>
                                    <div class='social-media-item'><a href={Data.linkedin_link} > <FaLinkedin /> </a></div>
                                    <div class='social-media-item'><a href={Data.github}> <FaGithub /> </a></div>
                                </div>
                            </div>  
                        </div>


                        
                </div>
                </div>
    );
  }
  
export default Nabbar;