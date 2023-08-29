import React from 'react'
import '../Nav.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Signup from './Signup'
import CartList from './CartList'

import {BsCart4} from 'react-icons/bs'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {ImWarning} from 'react-icons/im'
import Notice from './Notice'



const Navbar = (props) => {

  

    return (
        <BrowserRouter basename='/Food_Delivery_App'>
        <div className='btns'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a onClick={() => props.handleShow(false)} ><img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5KDCQqIPJuRSLEnqLZN_Y3V9DBCWzGdEmA&usqp=CAU" alt="logo" />  </a>
                <a className="navbar-brand text-primary font-weight-bold" href="/"> Hungry Zone</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon my-toggler"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                       

                    <li className="nav-item">
                            
                            <a onClick={() => props.handleShow(false)} className="btn btn-outline-dark" href="/"><i className="fa-sharp fa-solid fa-circle-user"></i><AiFillHome/> Home</a></li>

                        <li className="nav-item">
                            
                            <a className="btn btn-outline-dark" href="/Signup"><i className="fa-sharp fa-solid fa-circle-user"></i><AiOutlineUserAdd/> Signup</a></li>
                        <li className="nav-item">
                            
                            <a className="btn btn-outline-dark" href="/Notice"><i className="fa-sharp fa-solid fa-circle-user"></i><ImWarning/> Notice</a></li>

                       

                    </ul>
                  
                    <button className="btn btn-outline-dark " onClick={() => props.handleShow(true)} ><BsCart4/> Cart
                            <sup style={{color:"blue"}}> {props.count} </sup>
                        </button>
                </div>
            </nav>
        </div>
        <Routes>
            <Route exact path='/cart' element={<CartList/>}/>
            <Route exact path='/notice' element={<Notice/>}/>
            <Route exact path='/signup' element= {<Signup/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Navbar