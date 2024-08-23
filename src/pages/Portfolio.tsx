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
            
        </>
    )
}

export default Portfolio