import './style/App.css';
import './style/skills.css';
import React from 'react';
import {Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import Data from './dataresume.json'


function skills() {
  ChartJS.register(
    RadialLinearScale,
    PointElement, 
    LineElement,
    Filler,
    Tooltip,
  );

  let computer_languages = {};
  let software_tools = {};
  let softskills = {}
  let knowledge = {}

  const computer_languages_labels = Data.skills.computer_languages.label;
  const computer_languages_points = Data.skills.computer_languages.point;
  const software_tools_labels = Data.skills.software_tools.label;
  const software_tools_points = Data.skills.software_tools.point;
  const softskills_labels = Data.skills.softskills.label;
  const softskills_points = Data.skills.softskills.point;
  const knowledge_labels = Data.skills.knowledge.label;
  const knowledge_points = Data.skills.knowledge.point;


  computer_languages= {
    labels: computer_languages_labels,
    points: computer_languages_points
  };
  software_tools={
    labels: software_tools_labels,
    points: software_tools_points
  }
  softskills={
    labels: softskills_labels,
    points: softskills_points
  }
  knowledge={
    labels: knowledge_labels,
    points: knowledge_points
  }

  const dataComputerLanguage = {
    labels: computer_languages.labels,
    datasets: [
      {
        label: '# of Votes',
        data: computer_languages.points,
        fill: true,
        backgroundColor: '#fdb5002d',
        borderColor: '#FDB600',
        borderWidth: 3,
      },
    ],
  };

  const dataSoftware_tools = {
    labels: software_tools.labels,
    datasets: [
      {
        label: '# of Votes',
        data: software_tools.points,
        backgroundColor: '#fdb5002d',
        borderColor: '#FDB600',
        borderWidth: 3,
      },
    ],
  };

  const dataSoftskills = {
    labels: softskills.labels,
    datasets: [
      {
        label: '# of Votes',
        data: softskills.points,
        backgroundColor: '#fdb5002d',
        borderColor: '#FDB600',
        borderWidth: 3,
      },
    ],
  };

  const dataKnowledge = {
    labels: knowledge.labels,
    datasets: [
      {
        label: '# of Votes',
        data: knowledge.points,
        backgroundColor: '#fdb5002d',
        borderColor: '#FDB600',
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
        beginAtZero: true,
        ticks: {
          callback: function() {return ""},
          backdropColor: "rgba(0, 0, 0, 0)",
          
        },
        pointLabels: {
          font: {
            size: 12
          }
        }
      }
    }
    };
  
  return (
    <div class="grid" id='skills'>
        <div class="whole">    
            <div class="body">
                <div class='skills'>
                      <h1 class='skills-title title'> Skills </h1>
                      <div clas='qualification-grid'>
                          <div class='grid_row skill-section_container'>
                            <div class='skill-section'>
                                <h4 class='skill-type'> Computer Languages</h4>
                                <div id='ComputerLanguage_chart' class='skills_item_chart'>                        
                                  <Radar data={dataComputerLanguage} options={options} />  
                                </div>                                  
                            </div>
                            <div class='skill-section'>
                                <h4 class='skill-type'> Tools and Softwares </h4>
                                <div id='Software_tools_chart' class='skills_item_chart'>
                                   <Radar data={dataSoftware_tools} options={options} /> 
                                </div> 
                            </div>
                            <div class='skill-section'>
                                <h4 class='skill-type'> Soft Skills</h4>
                                <div id='Softskills_chart' class='skills_item_chart'>
                                  <Radar data={dataSoftskills} options={options} />  
                                </div>
                            </div>
                            <div class='skill-section'>
                                <h4 class='skill-type'> Knowledge/Concepts</h4>
                                <div id='Knowledge_chart' class='skills_item_chart'>
                                <Radar data={dataKnowledge} options={options} />  
                                </div>
                            </div>
                          </div>
                       </div>
                 </div>
             </div>
         </div>
    </div>
  );
}



export default skills;

