import React, { useState, useEffect,useRef } from 'react';
import '../section2/Section2.css';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

export const Section2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('');
    const outletRef = useRef(null);

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        setActiveButton(path === '' || path === 'KyosNguyen' ? 'about' : path);
    }, [location.pathname]);

    const handleNavigate = (path, buttonName) => {
        setActiveButton(buttonName);
        navigate(path);
    };
    useEffect(() => {
        if (outletRef.current && activeButton !== 'about') {
            outletRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.pathname, activeButton]);
    return (
        <div className='section2-container'>
            <div className='side1' >
                <ul>
                    <li
                        onClick={() => handleNavigate('/KyosNguyen', 'about')}
                        className={activeButton === 'about' ? 'active' : ''}
                    >
                        <a>About</a>
                    </li>
                    <li
                        onClick={() => handleNavigate('/KyosNguyen/resume', 'resume')}
                        className={activeButton === 'resume' ? 'active' : ''}
                    >
                        <a>Resume</a>
                    </li>
                    <li
                        onClick={() => handleNavigate('/KyosNguyen/work', 'work')}
                        className={activeButton === 'work' ? 'active' : ''}
                    >
                        <a>Work</a>
                    </li>
                    <li
                        onClick={() => handleNavigate('/KyosNguyen/blog', 'blog')}
                        className={activeButton === 'blog' ? 'active' : ''}
                    >
                        <a>Blog</a>
                    </li>
                    <li
                        onClick={() => handleNavigate('/KyosNguyen/contact', 'contact')}
                        className={activeButton === 'contact' ? 'active' : ''}
                    >
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div ref={outletRef}>
                <Outlet />
            </div>
        </div>
    );
};
