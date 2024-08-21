import React from 'react'

const Reservation = () => {
    return (
        <section className='home-reservation'>
            <h2 className="home-reservation-title">Make a Reservation</h2>
            <h4 className="home-reservation-subtitle">Get in touch with restaurant</h4>
            <form action="" className='home-reservation-fm'>
                <div className="fm-box d-f jc-sb">
                    <input type="text" name='reservationDate' placeholder='16/22/2021' />
                    <div className="select-bl">
                        <select name="reservationTime">
                            <option value="0">6:00 pm</option>
                        </select>
                    </div>
                    <div className="select-bl">
                        <select name="reservationPersov">
                            <option value="0">2 Person</option>
                        </select>
                    </div>
                </div>
                <button>Book Now</button>
            </form>
        </section>
    )
}

export default Reservation