import React, { useEffect, useState } from "react";
import "./visit.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { Base_URL } from "../../Services/Helper";
const Visit = () => {

    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        img: "",
        price: "",
        company: ""
    });

    const [quantity, setQuantity] = useState([1]);


    const params = useParams();

    const getProductDetail = async () => {
        let result = await fetch(`${Base_URL}/visit/${params.id}`);
        result = await result.json();
        setProduct({
            name: result.name,
            img: result.img,
            price: result.price,
            company: result.company
        })

    }

    useEffect(() => {
        getProductDetail();
    }, [])


    const addTocart = async () => {
        if (!auth) {
            navigate("/login")
        }
        else {
            let userId = JSON.parse(auth)._id;
            let productId = params.id;
            let result = await fetch(`${Base_URL}/cart-push`, {
                method: "POST",
                body: JSON.stringify({ userId, productId }),
                headers: {
                    'Content-Type': 'application/json'
                },

            });
            result = await result.json();
            if (result.result === "success") {
                alert("your Product is Successfully added to cart")
            }
        }

    }





    return <>

        {/* <nav aria-label="breadcrumb" >
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/" >Home</Link></li>
                <li class="breadcrumb-item"><Link to="/shop" >visit</Link></li>
                <li class="breadcrumb-item active" aria-current="page">visit</li>

            </ol>
        </nav> */}
        <div>
            <section id="prodetails" class="section-p1">
                <div class="single-pro-image">
                    <img src={product.img} width="100%" id="MainImg" alt="" />

                    <div class="small-img-group">
                        <div class="small-img-col">
                            <img src="/img/products/n1.webp" width="100%" class="small-img" alt="" />
                        </div>
                        <div class="small-img-col">
                            <img src="/img/products/n3.webp" width="100%" class="small-img" alt="" />
                        </div>
                        <div class="small-img-col">
                            <img src="/img/products/n4.webp" width="100%" class="small-img" alt="" />
                        </div>
                        <div class="small-img-col">
                            <img src="/img/products/n5.webp" width="100%" class="small-img" alt="" />
                        </div>
                    </div>
                </div>

                <div class="single-pro-details">
                    <h6>Home / T-shirt</h6>
                    <h4>{product.name}</h4>
                    <h2>₹ {product.price}</h2>
                    <select>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                    <input type="number" placeholder="1" min={1} max={10} />
                    <button class="normal" onClick={addTocart}>Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque eos enim esse saepe! Suscipit cumque quo error rem fugiat mollitia ipsum ex quae minus explicabo, itaque, dolor ipsa veniam. Fugit at recusandae nulla.</span>
                </div>
            </section>
        </div>
    </>
}

export default Visit;
