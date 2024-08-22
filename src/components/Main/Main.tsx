import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact, Home, Menu } from '../../pages'

type MainProps = {
  setPageNum: (pageNum: number) => void
}

const Main = ({setPageNum}:MainProps) => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home setPageNum={setPageNum} />}
        />
        <Route
          path='menu'
          element={<Menu setPageNum={setPageNum}/>}
        />
        <Route
          path='contact'
          element={<Contact setPageNum={setPageNum}/>}
        />
    </Routes>
  )
}

export default Main