import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import NewCollection from '../Components/NewCollection/NewCollections'
import Footer1 from '../Components/Footer/Footer1';

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewCollection/>
     <Footer1/>
    </div>
  )
}

export default Shop