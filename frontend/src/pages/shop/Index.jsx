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
                        let item_imgs=item.image_indices[0];        //object =>string
                        item_imgs=item_imgs.slice(1,-1).split(", ")[1].slice(1,-1)
                            
                        let imageUrl = `https://drive.google.com/thumbnail?id=${item_imgs}`; // Use the first image ID
                           
                        return (<>
                        <div className="pro">
                            <Link to={"/visit/" + item._id}>
                                <div  >
                                    <img src={`${imageUrl}`} alt="" />
                                    <div class="des">
                                        <span>{item.Brand}</span>
                                        <h5>{item.Title}</h5>
                                        <h4>{item.Price}</h4>
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