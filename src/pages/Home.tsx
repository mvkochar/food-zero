import React, { useEffect } from 'react'

type HomeProps = {
  setPageNum: (pageNum: number) => void
}

const Home = ({ setPageNum }: HomeProps) => {
  useEffect(
    () => setPageNum(1), []
  )
  
  return (
    <div>Home</div>
  )
}

export default Home