import React from 'react'
import { useEffect } from 'react';
import avatar2 from '../images/avatar.jpg';
import aquarium from '../images/aquarium.jpg';
import Typical from 'react-typical';
import { BannerSub } from '../bannerSub/BannerSub';
import { Service } from '../service/Service';
import { Commendation } from '../commendation/Commendation';

export const About = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  return (
    <div className='side2' data-aos="fade-down-right">
            <div className='section1'>
                <div className='imgg' data-aos="fade-down-right">
                    <img src={avatar2} alt="" />
                </div>
                <div className='content-card' data-aos="fade-right">
                    <h1>Visit my portfolio & hire me (new updated 30/12/2024)</h1>
                    <h2>About Me</h2>
                    <div className='p-tag'>
<p>I am a fullstack & game developer, project manager with several years of experience. Thanks to my strong self-learning ability and passion for programming and design, I have the capability to create and develop cross-platform websites for both mobile and web applications.</p>
                    </div>
                    <div className='service'>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> Web Design Full Stack</label>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> Design System Data Architect</label>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> 24/7 support</label>
                    </div>
                    <a href={`${process.env.PUBLIC_URL}/NGUYENTHANHCONG_CV_DEVELOPER.pdf`} download>Download My CV <i className='bx bxs-download' style={{color:'#ff014f'}}></i></a>
                </div>
            </div>
            {/* ============================================================================================ */}
            <div className='section2'>               
                <div className='content-card' data-aos="fade-right">
                    <h1>Hi there! I'M</h1>
                    <h2>A Fullstack <br /> Developer <span>
                        <Typical
                          steps={['Kyos Nguyen', 1000, 'Nguyen Thanh Cong', 1000]}
                          loop={Infinity}
                          wrapper="span"
                        />
                      </span></h2>
                    <h3>based in Ho Chi Minh, Viet Nam</h3>
                    <div className='p-tag'>
<p> For a more comprehensive understanding of my qualifications and career achievements, please visit my <a className='link-linkedin' href="https://www.linkedin.com/in/cong-nguyen-kyos-a8a729289/">LinkedIn profile</a> .</p>
                    </div>
                    
                </div>
                <div className='imgg' data-aos="fade-right">
                    <div className='imgg1'>
                    <img src={aquarium} alt="" />
                    </div>
                </div>
            </div>
            <BannerSub/>
            <Service/>
            
                {/* <div className='horizone-line-athomepage'></div> */}
            
            <Commendation/>

        </div>
  )
}
