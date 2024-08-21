import React, { useEffect } from 'react'
import './css/Menu.css'
import Reservation from '../components/Reservation/Reservation'

type MenuProps = {
    setPageNum: (pageNum: number) => void
}

const Menu = ({ setPageNum }: MenuProps) => {
    useEffect(
        () => setPageNum(2), []
    )

    return (
        <>
            <main className='menu-content d-f'>
                <div className="menu-content-bl">
                    <h2 className="content-bl-title">Starters</h2>
                    <h4 className="content-bl-subtitle">This is a section of your menu. Give your section a brief description</h4>
                    <div className="content-bl-info d-f jc-sb align-center">
                        <div><img src="/images/menu/starters.png" alt="starters" /></div>
                        <div className="info-content d-f">
                            <div>
                                <h4 className="elem-price">$20</h4>
                                <h3 className="elem-title">Grilled Okra and <br /> Tomatoes</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <h4 className="elem-price">$18</h4>
                                <h3 className="elem-title">Cucumber Salad</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <h4 className="elem-price">$12</h4>
                                <h3 className="elem-title">Basil Pancakes</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-content-bl">
                    <h2 className="content-bl-title">Mains</h2>
                    <h4 className="content-bl-subtitle">This is a section of your menu. Give your section a brief description</h4>
                    <div className="content-bl-info d-f jc-sb align-center">
                        <div className="info-content d-f">
                            <div>
                                <h4 className="elem-price">$20</h4>
                                <h3 className="elem-title">Deep Sea Snow White <br /> Cod Fillet</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <h4 className="elem-price">$22</h4>
                                <h3 className="elem-title">Steak With Rosemary <br /> Butter</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <h4 className="elem-price">$20</h4>
                                <h3 className="elem-title">Steaks with Grilled <br /> Kimchi</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div><img src="/images/menu/mains.png" alt="mains" /></div>
                    </div>
                </div>
                <div className="menu-content-bl">
                    <h2 className="content-bl-title">Pastries & Drinks</h2>
                    <h4 className="content-bl-subtitle">This is a section of your menu. Give your section a brief description</h4>
                    <div className="content-bl-info d-f jc-sb align-center">
                        <div><img src="/images/menu/pastries-drinks.png" alt="pastries-drinks" /></div>
                        <div className="info-content d-f">
                            <div>
                                <h4 className="elem-price">$158</h4>
                                <h3 className="elem-title">Wine Pairing</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <h4 className="elem-price">$168</h4>
                                <h3 className="elem-title">Natural Wine Pairing</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <h4 className="elem-price">$90</h4>
                                <h3 className="elem-title">Whisky Flyer</h3>
                                <p className="elem-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Reservation/>
        </>
    )
}

export default Menu