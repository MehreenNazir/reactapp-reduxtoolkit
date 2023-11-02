import React from 'react'
import Header from '../../Component/Header/Header'
import Banner from '../../Component/Banner/Banner'
import Card from '../../Component/Card/Card'

const Home = () => {
  return (
    <>
      <div className='items-center'>
        <Header />
        <Banner />
        <Card />
      </div>

    </>
  )
}

export default Home