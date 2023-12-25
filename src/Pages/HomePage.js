import React from 'react'
import NavBar from '../Components/NavBar'
import ArtGrid from '../Components/ArtGrid'
import BannerContainer from '../Components/BannerContainer'

const HomePage = () => {
  return (
    <div>
          <NavBar />
          <BannerContainer/>
          <ArtGrid/>
    </div>
  )
}

export default HomePage
