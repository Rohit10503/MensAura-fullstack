import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "./navbar.js"
import Location from "../location/index.jsx";




const Navbar = () => {


  const bar = document.getElementById('bar');
  const nav = document.getElementById('navbar');
  const close = document.getElementById('close');

  // const active = document.querySelector("#navbar li a");

  // if (active) {
  //     active.addEventListener("click", () => {
  //         active.classList.add('active');
  //     });
  // }

  if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    });
  }

  if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  }






  const auth = localStorage.getItem("user")
  const check_location = localStorage.getItem("location");
  const navigate = useNavigate()





  const logout = () => {
    localStorage.clear();
    navigate("/login");
  }




  return <>

    {
      check_location ? <></> : <Location />
    }

    <div>
      {
        auth ? <section id="header">
          <Link to="/"><img src="\img\Men_s Aura-logos_transparent.png" class="logo" alt="logo" /></Link>

          <div>

            <ul id="navbar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>

              <li><Link >


                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {JSON.parse(auth).name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item > <Link to="/profile"> Profile</Link></Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                    <Dropdown.Item>< Link class="pay" to="/order">My Orders</Link></Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>

              </Link></li>


              <li><Link id="shp-bag" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
              </svg></Link></li>
              <i id="close" class="bi bi-x-circle"></i>
            </ul>
          </div>

          <div id="mobile">
            <Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
            </svg></Link>

            <i id="bar" class="bi bi-list"></i>
          </div>
        </section>


          :

          <section id="header">
            <Link to="/"><img src="\img\Men_s Aura-logos_transparent.png" class="logo" alt="logo" /></Link>

            <div>

              <ul id="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>

                <li><Link to="/signin">Sign In</Link></li>



                {/* <li><Link id="shp-bag" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                </svg></Link></li> */}
                <i id="close" class="bi bi-x-circle"></i>
              </ul>
            </div>

            <div id="mobile">
              <Link id="shp-bag" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
              </svg></Link>

              <i id="bar" class="bi bi-list"></i>

            </div>


          </section>
      }

    </div>



  </>








}
export default Navbar;









