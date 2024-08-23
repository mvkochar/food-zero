import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Menu, Portfolio } from '../../pages'

type MainProps = {
  setPageNum: (pageNum: number) => void
}

const Main = ({ setPageNum }: MainProps) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home setPageNum={setPageNum} />}
      />
      <Route
        path='menu'
        element={<Menu setPageNum={setPageNum} />}
      />
      <Route
        path='contact'
        element={<Contact setPageNum={setPageNum} />}
      />
      <Route
        path='about'
        element={<About setPageNum={setPageNum} />}
      />
      <Route
        path='portfolio'
        element={<Portfolio setPageNum={setPageNum} />}
      />
    </Routes>
  )
}

export default Main