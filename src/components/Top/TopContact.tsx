import React from 'react'
import './css/TopContact.css'

const TopContact = () => {
    return (
        <div className='top-contact'>
            <div className="top-contact-hero">
                <h1 className="page-title">Get in Touch</h1>
                <h5 className="page-subtitle">The freshest ingredients for you every day</h5>
            </div>
            <div className="top-contact-schedule">
                <div className="top-contact-open d-f jc-sb">
                    <h5 className="contact-open-title">Open Time</h5>
                    <div className="contact-open-desc">Sunday - Friday</div>
                </div>
                <div className="top-contact-hours d-f jc-sb">
                    <div>
                        Brunch <br />
                        11:00-12:00
                    </div>
                    <div>
                        Lunch <br />
                        13:00-17:00
                    </div>
                    <div>
                        Dinner <br />
                        18:00-20:00
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopContact