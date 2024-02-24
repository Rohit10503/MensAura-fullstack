import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import "./orders.css"
import { Link } from "react-router-dom";
import { Base_URL } from "../../Services/Helper";

const Orders = () => {
    const auth = localStorage.getItem("user")
    const [state, setState] = useState([]);




    const collectOrderData = async () => {
        let userid = JSON.parse(auth)._id
        let result = await fetch(`${Base_URL}/order/` + userid);
        result = await result.json();
        // console.log(result)
        if (result.result === "empty") {
            setState(false)

        } else {
            setState(result)

        }
    }






    useEffect(() => {
        collectOrderData();
    }, [])




    return <>
        <div>
            <section id="cart" class="section-p1">
                <h1 className="table-head">MY ORDERS</h1>
                <table width="100%">

                    <tbody>

                        {state ? (

                            state.map((item) => {

                                const dateStr = item.date;
                                const dateObj = new Date(dateStr);

                                const day = dateObj.getDate().toString().padStart(2, '0');
                                const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
                                const year = dateObj.getFullYear();

                                const formattedDate = `${day}-${month}-${year}`;

                                


                                return (


                                    <><tr className="item-row">



                                        <td><img src={item.img} alt="" /></td>
                                        <td><b>{item.name}</b><p className="company-name">{item.company}</p></td>
                                        <td>₹ {item.price} </td>
                                        <td><b>{formattedDate}</b></td>
                                        <td><p>Delivered</p></td>
                                    </tr></>);

                            })
                        )
                            :
                            <>
                                <tr><td>
                                    <h1>Your Order is Empty Now</h1>
                                </td><td></td>

                                </tr>
                                <tr>
                                    <td><Button variant="primary"><Link id="goshop" to="/shop">Shop Now</Link></Button></td>
                                </tr>
                            </>
                        }


                    </tbody>
                </table>
            </section>


        </div>
    </>
}

export default Orders;