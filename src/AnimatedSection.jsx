import React, { useEffect } from 'react';
import './App.css';

const AnimatedSection = ({ children, className }) => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(`.${className}`);
            const triggerPoint = window.innerHeight / 5 * 4;

            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < triggerPoint) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [className]);

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default AnimatedSection;
