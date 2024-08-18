import React from 'react'
import Header from '../Header/Header'
import TopHome from './TopHome'

type TopProps = {
  page: number
}

const Top = ({ page }: TopProps) => {
 const bgColor = page=== 1 ? "#233000" : "#fff"
 
  return (
    <div className='top' style={{backgroundColor: bgColor}}>
      <Header />
      <>
        {
          page === 1 ?
            <TopHome />
            : null
        }
      </>
    </div>
  )
}

export default Top