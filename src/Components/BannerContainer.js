import React from 'react'
import Container from 'react-bootstrap/Container';


const BannerContainer = () => {
  return (
    <div>
        <Container className='bg-info d-flex flex-column justify-content-center align-items-center' style={{backgroundImage: `url(/images/Banner_image.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              height: "500px"
          }}>
            <div className='opacity-secondary-background d-flex flex-column justify-content-center align-items-center'>
                  <h2 className='text-light'>Creating amazing memories through artworks !</h2>
                  <quote className='fs-3 text-light'>Our Job isn't complete until, You are satisfied.</quote>
                  <blockquote className='text-light text-end w-100'>- Vidhya Raj</blockquote>
            </div>
            
        </Container>
    </div>
  )
}

export default BannerContainer
