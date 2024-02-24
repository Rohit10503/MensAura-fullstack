import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Shop = ()=>{
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




    return<>
    <section id="product1" class="section-p1">
                <h2>Get Awesome T-shirt Here. </h2>
                <h5 id="winter">In Affordable price</h5>
                <div class="pro-container">

                    {
                        state.map((item) => {
                            return (<>
                                <div class="pro" >
                                    <img src={item.img} alt="" />
                                    <div class="des">
                                        <span>{item.company}</span>
                                        <h5>{item.name}</h5>
                                        <h4>{item.price}</h4>
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




    </>
}

export default Shop;