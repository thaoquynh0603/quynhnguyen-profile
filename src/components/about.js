import './style/App.css';
import './style/about.css';
import Data from './dataresume.json'
import { IoNotifications } from "react-icons/io5";
import React, { useEffect, useState } from 'react'

function About() {
    const data = Data.description;
    const [showChatBox, setShowChatBox] = useState(false);

    useEffect(() => {
      setShowChatBox(true);
    }, []);

    return (
        <div class="grid"  id='welcome'>
                <div class="whole">         
                    <div> </div> 
                    <div class="body">
                        <div class="welcome">    
                            <div class="welcome_greeting"> {Data.greeting} </div>           
                            <div class="welcome_intro">               
                                <div class="welcome_statement">
                                {data.map(item => {
                                    return(
                                        <p class="welcome_des"> {item}  </p>
                                )})}
                                </div>
                            </div>

                           

                                {/* <div class="welcome_image">
                                    <img class="welcome_image_me" src={Data.img_source} alt="my image"></img>
                                </div> */}
                        </div>
                        <div class={`welcome_highlight ${showChatBox ? 'show' : ''}`}> 
                            <div class='welcome_highlighted_icon'>
                                <IoNotifications />
                            </div>
                            <div class='welcome_highlighted_message'>
                                {Data.highlight} 
                            </div>
                        </div>
                    </div>
                </div>
                </div>
  );
}

export default About;
