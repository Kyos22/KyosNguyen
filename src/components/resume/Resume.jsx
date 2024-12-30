import React, { useEffect } from 'react'
import '../resume/Resume.css';
import csharp from '../images/csharp.png';
import aspnet from '../images/logo/asp.net-removebg-preview.png';
import php from '../images/logo/php-removebg-preview.png';
import laravel from '../images/logo/laravel-removebg-preview.png';
import html from '../images/logo/html-removebg-preview.png';
import css from '../images/logo/css-removebg-preview.png';
import react from '../images/logo/react-removebg-preview.png';
import vue from '../images/logo/vuejs-removebg-preview.png';
import mysql from '../images/logo/mysql-removebg-preview.png';
import sqlserver from '../images/logo/sqlserver.png';
import tailwind from '../images/logo/tailwindcss-removebg-preview.png';
import lua from '../images/logo/lua.png';

import vsc from '../images/logo/vsc.png';
import vs from '../images/logo/vs22.png';
import eclipse from '../images/logo/eclipse.png';
import git from '../images/logo/git.png';
import figma from '../images/logo/figma.png';
import notion from '../images/logo/notion.png';
import docker from '../images/logo/docker.png';
import fx from '../images/logo/javafx.png';
import heidi from '../images/logo/heidi.png';
import roblox from '../images/logo/roblox-logo.png';

export const Resume = () => {
    
    const skills = [
        {id:1,imageLogo: csharp},
        {id:2,imageLogo: aspnet},
        {id:3,imageLogo: php},
        {id:4,imageLogo: laravel},
        {id:5,imageLogo: html},
        {id:6,imageLogo: css},
        {id:7,imageLogo: react},
        {id:8,imageLogo: vue},
        {id:9,imageLogo: tailwind},
        {id:10,imageLogo: sqlserver},
        {id:11,imageLogo: mysql},   
        {id:12,imageLogo: lua} 
    ];
    const skill1s = [
        {id:1,imageLogo: vsc},
        {id:2,imageLogo: vs},
        {id:3,imageLogo: eclipse},
        {id:4,imageLogo: git},
        {id:5,imageLogo: figma},
        {id:6,imageLogo: notion},
        {id:7,imageLogo: heidi},
        {id:8,imageLogo: docker},
        {id:9,imageLogo: fx},
        {id:10,imageLogo:roblox},
           
    ];
  return (
    
    <div className='side2' data-aos="fade-down-right">
        <div className="container-resume">
            <div className="left-resume">
                <h1 data-aos="fade-down-right">2020 - 2024</h1>
                <h2 data-aos="fade-down-right">Working Experience</h2>
                <div class="timeline" data-aos="fade-right">
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2022 - 2024</span>
                        <span class="rating">Stopped</span>
                        <h3>Website Freelancer </h3>
                        
                        <p class="institution">Freelancer (2022 - 2024)</p>
                        
                        <p class="description">
                        Accepting frontend and backend web development projects for individuals in need.                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2022 - 2024</span>
                        <span class="rating">Running</span>
                        <h3>Game Developer & PM </h3>
                        
                        
                        <p class="institution">LevelUpStudio (2023 - Now)</p>
                        
                        <p class="description">
                        Game development on the Roblox platform, including idea development and project management using Lua .                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                    {/* <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2020 - 2022</span>
                        <span class="rating">Stopped</span>
                        <h3>Marine Industry </h3>
                        
                        <p class="institution">Ho Chi Minh City University of Transport - UTH (2020 - 2022)</p>
                        
                        <p class="description">
                        Training in fundamental technical skills and critical thinking..
                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div> */}
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2024 - 2028</span>
                        <span class="rating">Running</span>
                        <h3>MindX Teacher </h3>
                        
                        <p class="institution">MindX (2024 - now)</p>
                        
                        <p class="description">
                        Teaching game and web programming at MindX programming training center, utilizing various programming languages and working in a startup environment.                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                </div>

            </div>  
            <div className="right-resume">
            <h1 data-aos="fade-down-right">2020-2024</h1>
                <h2 data-aos="fade-down-right">Education & Certifications</h2>
                <div class="timeline" data-aos="fade-up">
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>April 2023</span>
                       
                        <h3>Education</h3>
                        
                        <p class="institution">- TOEIC 715</p>
                        <p class="institution">- CPISM Degree For Website Development -APTECH (2021-2023)</p>
                        <p class="description">
                        Certificate in proficiency in information systems management

                        </p>
                        <p class="institution">- National Economics University - NEU (2024 - 2028 running)</p>
                        
                        <p class="description">
                        I want to learn how to manage and operate people and businesses through this field of study, thereby expanding my leadership abilities. That's why I chose it."                        </p>
                        
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                    
                   
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2020 - 2022</span>
                        <h3>Award</h3>
                        
                        <p class="institution">Techwiz global I.T Competition</p>
                        
                        <p class="description">
                        Achieving 3rd prize with my team in the Techwiz 2023 competition for web design and development!
                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        
        <div className='horizon-line'></div>
        <div className="container2-resume">
            <div className="box-resume" data-aos="fade-down">
                <h1>Technologys & Skills</h1>
                <div className="card-box-resume">
                    {skills.map((skill,index)=>(
                        <div className="logo-resume" key={index}>
                            <img src={skill.imageLogo} alt="" />
                        </div>
                    ))}
                    
                    
                    
                </div>
            </div>  
            <div className="box-resume" data-aos="fade-up">
                <h1>Tools & IDE</h1>
                <div className="card-box-resume">
                    {skill1s.map((skill,index)=>(
                        <div className="logo-resume" key={index}>
                            <img src={skill.imageLogo} alt="" />
                        </div>
                    ))}
                    
                    
                    
                </div>
            </div>  
             
        </div> 
          
    </div>
  )
}
