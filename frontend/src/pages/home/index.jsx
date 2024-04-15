import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Features from "../../components/features";
import { Base_URL } from "../../Services/Helper";
const Home = () => {
    const navigate = useNavigate();



    const [state, setState] = useState([]);

    const getProduct = async () => {
        let fetch_products = await fetch(`${Base_URL}/`)
        let actual_products = await fetch_products.json();
        if (actual_products.result === "None") {
            setState(false)
        }
        else {
            setState(actual_products);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    // const goToVisit=()=>{
    //     navigate("/visit/"+item.id)
    // }



    return <>
        <div>
            <section id="hero">
                <div id="show">
                    <h4>End of season sale</h4>
                    <h2>Super value deals</h2>
                    <h1>On all products</h1>
                    <p>save more with coupons<p> & up to 70% off!</p></p>
                    <button ><Link id="shop-now" to="/shop">Shop Now</Link></button>
                </div>
            </section>

            <Features />

            <section id="product1" class="product-display">
                <h2>Featured Products</h2>
                <h5 id="winter">Special Winter Collection</h5>
                <div class="pro-container">

                    {
                        state.slice(0, 8).map((item, index) => {
                            let item_imgs=item.image_indices[0];        //object =>string
                            item_imgs=item_imgs.slice(1,-1).split(", ")[1].slice(1,-1)
                            
                            let imageUrl = `https://drive.google.com/thumbnail?id=${item_imgs}`; // Use the first image ID
                           
                            
                            
                            return (<>
                                
                                <div class="pro">
                                    <Link to={"/visit/" + item._id} > <div key={index}  >

                                      
                                       
                                        <img src={`${imageUrl}`} alt="" className="item-img" />

                                        <div class="des">
                                            <span>{item.Brand}</span>
                                            <h5>{item.Title}</h5>
                                            <h4>₹ {item.Price}</h4>
                                        </div>
                                        <div class="cart">


                                        </div>
                                    </div></Link>
                                </div>
                            </>
                            )
                        })
                    }
                </div>
            </section>

            <section id="banner" class="section-m1" >
                <h4>Offer Zone</h4>
                <h2>Up to <span>70%  off</span> on selected products</h2>
                <button class="normal">Explore More</button>
            </section>
        </div>
    </>
}
export default Home;