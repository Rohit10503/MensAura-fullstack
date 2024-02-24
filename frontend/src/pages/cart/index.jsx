import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import "./cart.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Base_URL } from "../../Services/Helper";

const Cart = () => {
    const auth = localStorage.getItem("user")
    const [state, setState] = useState([]);
    const [sum,setSum]=useState(0);
    const navigate = useNavigate()

    const deleteItem=async(user_id,prd_id)=>{
        let result=await  fetch(`${Base_URL}/delete/${user_id}/${prd_id}`,{
            method:"DELETE"
        });
        if(result){
            collectCartData();
        }
       
    }

    const collectCartData = async () => {
        let userid = JSON.parse(auth)._id
        let result = await fetch(`${Base_URL}/cart-show/` + userid);
        result = await result.json();
        // console.log(result)
        if (result.result === "None") {
            setState(false)

        } else {
            setState(result)
            const totalAmount = result.reduce((total, item) => total + parseInt(item.price), 0);
            setSum(totalAmount);

        }
    }

    



    useEffect(() => {
        collectCartData();
    }, [])


    return <>
        <div>
            <section id="cart" class="section-p1">
                <table width="100%">
                    <thead>
                        <tr>

                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>

                        {state ? (
                            
                            state.map((item) => {
                                
                                return (
                                    
                                    
                                    <><tr>
                                        
                                    

                                    <td><img src={item.img} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>₹ {item.price}</td>
                                    <td><input type="number" value="1" /></td>
                                    <td><Button onClick={()=>{deleteItem(JSON.parse(auth)._id,item._id)}} variant="outline-secondary">Remove</Button></td>
                                </tr></>);

                            })
                        )
                            :
                            <>
                                <tr><td>
                                    <h1>Your cart is Empty</h1>
                                </td><td></td>

                                </tr>
                                <tr>
                                    <td>   <Button variant="primary"><Link id="goshop" to="/shop">Shop Now</Link></Button></td>
                                </tr>
                            </>
                        }




                    </tbody>
                </table>
            </section>

            <section id="cart-add" class="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter your coupon" />
                        <button class="normal">Apply</button>
                    </div>
                </div>

                <div id="subtotal">
                    <h3>Cart Total</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>{sum}rs.</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>{sum}rs.</strong></td>
                        </tr>
                    </table>
                    <button class="normal" >< Link class="pay" to="/payment">Proceed To Payment</Link></button>
                </div>
            </section>
        </div>
    </>
}
export default Cart;