import React from 'react'
import './css/Contact.css'

type ContactProps = {
    setPageNum: (pageNum: number) => void
}

const Contact = ({ setPageNum }: ContactProps) => {
    React.useEffect(
        () => setPageNum(3), []
    )

    return (
        <>
            <section className='contact-about d-f jc-sb '>
                <div><img src="/images/contact/1.png" alt="contact1" /></div>
                <h5 className="contact-about-title">
                    We can be contacted via <br /> email <span>info@foodzero.com</span> <br />
                    or telephone on <span>+86 852 346 000</span>
                </h5>
            </section>
            <section className='contact-location d-f jc-sb align-center'>
                <div>
                    <h5 className="contact-location-title">
                        We are located in 1959 Sepulveda Blvd. Culver <br /> City, CA, 90230
                    </h5>
                    <a href="https://maps.app.goo.gl/uysiXgLrNKHwnLic7" target='__blank' className="contact-location-link">
                        View in maps
                    </a>
                </div>
                <div><img src="/images/contact/2.png" alt="contact2" /></div>
            </section>
            <section className='contact-reservation'>
                <h2 className="contact-reservation-title">Make a Reservation</h2>
                <h4 className="contact-reservation-subtitle">Get in touch with restaurant</h4>
                <form action="" className='contact-reservation-fm'>
                    <div className="input-box d-f">
                        <div className="input-block d-f">
                            <input type="text" name='fName' className='input-half' placeholder='First Name' />
                            <input type="text" name='lName' className='input-half' placeholder='Last Name' />
                        </div>
                        <input type="email" name="email" placeholder='Email' />
                        <input type="tel" name="phone" placeholder='Phone' />
                        <div className="input-block d-f">
                            <input type="text" name='date' className='input-half' placeholder='16/22/2021' />
                            <div className="select-bl">
                                <select name="time">
                                    <option value="0">6:00 pm</option>
                                </select>
                            </div>
                        </div>
                        <div className="select-bl select-bl-full">
                            <select name="person">
                                <option value="0">2 person</option>
                            </select>
                        </div>
                    </div>
                    <button type="button">Book Now</button>
                </form>
            </section>
        </>
    )
}

export default Contact