import React from 'react'
import './css/Portfolio.css'

type PortfolioProps = {
    setPageNum: (pageNum: number) => void
}

const Portfolio = ({ setPageNum }: PortfolioProps) => {

    React.useEffect(
        () => setPageNum(5), []
    )

    return (
        <>
            <section className='portfolio-filters d-f'>
                <button className='portfolio-filters-btn'>All</button>
                <button className='portfolio-filters-btn'>Starter</button>
                <button className='portfolio-filters-btn filters-btn__active'>Launch</button>
                <button className='portfolio-filters-btn'>Dinner</button>
                <button className='portfolio-filters-btn'>Drinks</button>
                <button className='portfolio-filters-btn'>Sweets</button>
                <button className='portfolio-filters-btn'>Fruits</button>
            </section>
            <main className='portfolio-main d-f jc-sb'>
                <div className="portfolio-item portfolio-item__huge">
                    <div className="portfolio-item-content d-f jc-sb">
                        <div>
                            <h4 className="portfolio-item-title">Premium Deep Sea Snow <br /> White Cod Fillet</h4>
                            <div className="portfolio-item-info d-f align-center">
                                <div>Launch</div>
                                <div className='info-divider'></div>
                                <div>Dinner</div>
                            </div>
                        </div>
                        <div className='portfolio-item-arrow'><img src="/images/arrow-right-white.png" alt="arrow-right-white" /></div>
                    </div>
                </div>
                <div className="portfolio-item portfolio-item__tiny">
                    <div className="portfolio-item-content">
                        <h4 className="portfolio-item-title">Option of natural <br /> wine available</h4>
                        <div className="portfolio-item-info d-f align-center">
                            <div>Drinks</div>
                            <div className='info-divider'></div>
                            <div>Fruits</div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item portfolio-item__tiny">
                    <div className="portfolio-item-content">
                        <h4 className="portfolio-item-title">Best pumpkin for <br /> pumpkin soup</h4>
                        <div className="portfolio-item-info d-f align-center">
                            <div>Launch</div>
                            <div className='info-divider'></div>
                            <div>Starters</div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item portfolio-item__huge">
                    <div className="portfolio-item-content">
                        <h4 className="portfolio-item-title">Strip Steak With Rosemary <br /> Butter</h4>
                        <div className="portfolio-item-info d-f align-center">
                            <div>Dinner</div>
                            <div className='info-divider'></div>
                            <div>Launch</div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item portfolio-item__middle">
                    <div className="portfolio-item-content">
                        <h4 className="portfolio-item-title">Braised Sliced Abalone, Fish <br /> Maw with Premium Seafood</h4>
                        <div className="portfolio-item-info d-f align-center">
                            <div>Cold Dishes</div>
                            <div className='info-divider'></div>
                            <div>Starters</div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item portfolio-item__middle">
                    <div className="portfolio-item-content">
                        <h4 className="portfolio-item-title">Pan Fried Live Prawn with <br /> Superior Soy Sauce</h4>
                        <div className="portfolio-item-info d-f align-center">
                            <div>Starter</div>
                            <div className='info-divider'></div>
                            <div>Dinner</div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="portfolio-more">
                <button className="portfolio-more-btn">Loading...</button>
            </div>
        </>
    )
}

export default Portfolio