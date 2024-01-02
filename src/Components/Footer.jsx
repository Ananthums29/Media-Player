import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container w-100 mt-5'>
    <div className='footer-content d-flex justify-content-between flex-wrap'>
    <div style={{width:'400px'}} className="title">
    <h3 className='d-flex text-warning'>
    <i className="fa-solid fa-cloud-arrow-up me-2" style={{height:'41px'}}></i>
    Media Player</h3>
    <span>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</span><br />
    <span>Code licensed MIT, docs CC BY 3.0</span><br />
    <span>Currently v5.3.2</span>
    </div>
    <div className="links d-flex flex-column">
      <h3 className='text-warning'>Links</h3>
    <Link to={'/'} className='text-decoration-none'style={{color:'white'}} >Landing Page</Link>
    <Link to={'/home'} className='text-decoration-none' style={{color:'white'}}>Home</Link>
    <Link to={'/history'} className='text-decoration-none'style={{color:'white'}}  >Watch History</Link>
    </div>
    <div className="guides d-flex flex-column">
    <h3 className='text-warning'>Guides</h3>
    <a style={{color:'white'}} className='text-decoration-none' href="https://react.dev/" target='_blank'>React</a>
    <a style={{color:'white'}} className='text-decoration-none' href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
    <a style={{color:'white'}} className='text-decoration-none' href="https://www.w3schools.com/react/react_router.asp" target='_blank'> React Routing</a>
    </div>
    <div className="contact">
      <h3 className='text-warning'>Contact Us</h3>
      <div className="d-flex">
      <input placeholder='Enter your mail id' type="text" className='form-control'/>
      <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <div style={{color:'white'}} className="icons mt-3 d-flex justify-content-between">
      <i style={{height:'50px'}} class="fa-solid fa-envelope fa-2x"></i>
      <i style={{height:'50px'}} class="fa-brands fa-twitter fa-2x"></i>
      <i style={{height:'50px'}} class="fa-brands fa-linkedin fa-2x"></i>
      <i style={{height:'50px'}} class="fa-brands fa-instagram fa-2x"></i>
      <i style={{height:'50px'}} class="fa-brands fa-facebook fa-2x"></i>
      <i style={{height:'50px'}} class="fa-brands fa-github fa-2x"></i>
      </div>
     </div>
    </div>
    <p className='text-center text-white mt-4'>Copyright &copy; 2023 Media Player. Built with React.</p>
    </div>

  )
}

export default Footer