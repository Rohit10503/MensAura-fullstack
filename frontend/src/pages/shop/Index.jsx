import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./shop.css"
import { Link } from "react-router-dom";
import { Base_URL } from "../../Services/Helper";
const Shop = () => {
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




    return <>
        <section id="product1" class="shop-section-p1">
            <h2>Get Awesome T-shirt Here. </h2>
            <h5 class="winter1" id="winter">In Affordable price</h5>
            <div class="pro-container">

                {
                    state.map((item) => {
                        return (<>
                        <div className="pro">
                            <Link to={"/visit/" + item._id}>
                                <div  >
                                    <img src={item.img} alt="" />
                                    <div class="des">
                                        <span>{item.company}</span>
                                        <h5>{item.name}</h5>
                                        <h4>{item.price}</h4>
                                    </div>
                                    <div class="cart">

                                    </div>
                                </div>
                            </Link>
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