import React from 'react'
import { Button, Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div>
       <Navbar expand="lg" className="w-100 position-sticky top-0" style={{background: "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 100%)",zIndex:'1'}}>
      <Container>
        <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none', fontSize:'30px', color:'white'}} ><i className="fa-solid fa-blog fa-flip me-1"></i>BlogApp</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className='ms-5'>
         <Link to={'/blogs'} style={{textDecoration:'none'}} className=' me-3 text-light fs-5'>ALL BLOGS</Link> 
         <Link to={'/myBlogs'} style={{textDecoration:'none'}} className='  text-light fs-5'>MY BLOGS</Link> 


         </Nav>

          <Nav className="ms-auto  ">

          <Link to={'/auth'} className='btn me-3  btn-warning rounded-pill text-light'>LOGIN</Link> 
          <Link to={'/auth'} className='btn me-3  btn-warning rounded-pill text-light'>SIGNUP</Link> 
          <Link to={'/auth'} className='btn   btn-warning rounded-pill text-light'>LOGOUT</Link> 


                  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header