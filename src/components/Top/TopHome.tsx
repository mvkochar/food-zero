import React from 'react'
import './css/TopHome.css'

const TopHome = () => {
    return (
        <div className='top-home'>
            <div className="top-home-hero d-f">
                <div className='hero-info'>
                    <h1 className="page-title">
                        Healthy Eating <br />
                        is important <br />
                        part of lifestyle
                    </h1>
                    <p className="top-home-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                    <div className="top-home-scroll">
                        <h4 className="scroll-title">Scroll</h4>
                        <div className="scroll-line"></div>
                    </div>
                </div>
                <div className="hero-img">
                   <div><img src="/images/home-hero.png" alt="home-hero" /></div>
                    <div className="hero-spices d-f">
                        <div><img src="/images/spices1.png" alt="spices1" width={250} /></div>
                        <div><img src="/images/spices2.png" alt="spices2" width={250} /></div>
                        <div><img src="/images/spices3.png" alt="spices3" width={250} /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopHome