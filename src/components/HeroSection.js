import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src="/img/hospital-reception.jpg" alt=''/>
            <p>LET'S MAKE YOUR LIFE HAPPIER</p>
            <h1>Healthy Living</h1>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'
                    buttonSize='btn--medium'>Let's Consult</Button>
                <Button className="btns" buttonStyle='btn--primary'
                    buttonSize='btn--large'>Let's Consult</Button>
            </div>
        </div>
    )
}

export default HeroSection;