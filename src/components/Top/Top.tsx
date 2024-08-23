import React from 'react'
import Header from '../Header/Header'
import TopHome from './TopHome'
import TopMenu from './TopMenu'
import TopContact from './TopContact'
import TopAbout from './TopAbout'
import TopPortfolio from './TopPortfolio'

type TopProps = {
  page: number
}

const Top = ({ page }: TopProps) => {
  const bg = page === 1 ? "#233000"
    : page === 2 ? "url('/images/top-menu-bg.png') no-repeat"
      : page === 3 ? "url('/images/top-contact-bg.png') no-repeat"
        : page === 4 ? "url('/images/top-about-bg.png') no-repeat"
          : page === 5 ? "url('/images/top-portfolio-bg.png') no-repeat"
            : "#fff"

  return (
    <div className='top' style={{ background: bg }}>
      <Header />
      <>
        {
          page === 1 ? <TopHome />
            : page === 2 ? <TopMenu />
              : page === 3 ? <TopContact />
                : page === 4 ? <TopAbout />
                  : page === 5 ? <TopPortfolio />
                    : null
        }
      </>
    </div>
  )
}

export default Top