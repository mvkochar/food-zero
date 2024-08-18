import React from 'react'
import Top from './components/Top/Top'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'



const App = () => {
  const [pageNum, setPageNum] = React.useState(1)
  
  return (
    <>
      <Top page={pageNum} />
      <Main setPageNum={setPageNum} />
      <Footer />
    </>
  )
}

export default App
