import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container mt-5'>
    <div className="row justify-content-between align-items-center m-5">
    <div className="col-lg-4">
    <h3>Welcome to <span className='text-danger'>Media Player</span></h3>
    <p style={{textAlign:'justify'}}>Media Player App. will allow you to add and remove their uploaded videos , also helps to arrange them in different catrgories by providing drag and drop functionalities.</p>
    <Link to={'/home'} className='btn btn-danger mt-5 fw-bolder'>Get Started</Link>
    </div>
    <div className="col"></div>
    <div className="col-lg-6">
      <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif " alt="no image" />
    </div>
    </div>
    <div className="features">
      <h3 className='text-center'>Features</h3>
      <div className="cards mt-5 d-flex justify-content-between">
        {/* card 1 */}
        <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/f5/aa/d8/f5aad8e143b8d197c25d5e884bb315a2.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
         User can upload, view and remove the videos.
          </Card.Text>
         </Card.Body>
        </Card>
         {/* card 2 */}
         <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://phoneky.co.uk/thumbs/screensavers/down/music/music_x56os1rb.gif" />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
         User can categorise the videos according to their preferences using drag and drop features.
          </Card.Text>
         </Card.Body>
        </Card>
         {/* card 3 */}
         <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://slm-assets.secondlife.com/assets/25357967/original/musique016.gif?1578154515" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
         User are able to see the history of watched videos.
          </Card.Text>
         </Card.Body>
        </Card>
      </div>
    </div>
    <div className=" row mt-5 border rounded p-5 align-items-center">
    <div className="col-lg-5">
      <h3 className='text-warning'>Simple, Fast and Poweful</h3>
      <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde veritatis eligendi quasi corrupti, officiis aliquid dolore voluptatem et ipsa.</p>
      <p style={{textAlign:'justify'}}><span className='fs-5'>Catogorise Videos</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde veritatis eligendi quasi corrupti, officiis aliquid dolore voluptatem et ipsa.</p>
      <p style={{textAlign:'justify'}}><span className='fs-5'>Watch History</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde veritatis eligendi quasi corrupti, officiis aliquid dolore voluptatem et ipsa.</p>
    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-6">
    <iframe width="688" height="387" src="https://www.youtube.com/embed/gCGv_u_Uh8g" title="LEO- BADASS VIDEO SONG THALAPATHY VIJAY LOKESH KANAGARAJ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    </div>
    </div>
  )
}

export default LandingPage