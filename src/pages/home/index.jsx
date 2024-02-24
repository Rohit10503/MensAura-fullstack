import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Features from "../../components/features";
const Home = () => {
    const navigate = useNavigate();



    const [state, setState] = useState([]);

    const getProduct = async () => {
        let fetch_products = await fetch("http://localhost:5000/")
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

    const [count,setcount]=useState(0)

    // const goToVisit=()=>{
    //     navigate("/visit/"+item.id)
    // }



    return <>
        <div>
            <section id="hero">
                <h4>End of season sale</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>save more with coupons & up to 70% off!</p>
                <button ><Link id="shop-now" to="/shop">Shop Now</Link></button>
            </section>

            <Features />

            <section id="product1" class="section-p1">
                <h2>Featured Products</h2>
                <h5 id="winter">Special Winter Collection</h5>
                <div class="pro-container">

                    {
                        state.slice(0, 8).map((item,index) => {
                                
                                
                            return (<>
                                <div key={index} class="pro" >
                                    <img src={item.img} alt="" />
                                    <div class="des">
                                        <span>{item.company}</span>
                                        <h5>{item.name}</h5>
                                        <h4>₹ {item.price}</h4>
                                    </div>
                                    <div class="cart">
                                    
                                        <Link to={"/visit/" + item._id}><Button variant="primary" >visit</Button></Link>
                                    </div>
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