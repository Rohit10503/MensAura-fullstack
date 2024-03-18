import React, { useState } from "react";
import "./location.css"
import { useNavigate } from "react-router-dom";


const Location = () => {
    const navigate = useNavigate();


    const [alert, setalert] = useState(false)
    const show = () => {
        if (alert === false) {
            setalert(true)
        }
        else {
            setalert(false)
        }
    }

    const [pin, setPin] = useState();
    const [add, setAdd] = useState();
    const [loading, setLoading] = useState();
    const handleLocation = async () => {



        setLoading(true)
        let result = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        result = await result.json();
        if (result) {
            setAdd(result[0].PostOffice[1].Name)
            setLoading(false)
            
            setTimeout(()=>navigate("/"),1500)

        }
        else {
            alert("enter valid input");
        }
    }



    return <>

        <div className="parent-div">
            {
                alert ?
                    <>
                        <div className="alert-dialog">
                            <input type="text" className="pin-input" placeholder="Pin-Code" value={pin} onChange={(e) => setPin(e.target.value)} />
                            {/* <div><span>Enter Valid 6 Digit Pin code</span></div> */}
                            <button type="submit" class="btn btn-primary mb-3" onClick={handleLocation}>Confirm</button>
                            {
                                loading ? <>
                                    <span >Loading..</span>
                                </> :
                                    add ?
                                        <><div>
                                            <span><b>{`${add}`}</b></span>
                                            {
                                                localStorage.setItem("location", `${add}`)
                                                
                                            }
                                        </div>
                                        </> : <></>
                            }
                        </div>
                    </>


                    :
                    <>

                    </>

            }


            <div className="loc-sec" variant="success">
                <p onClick={show} > Add location in order to know best discount <i class="fa fa-light fa-angle-right fa-fade"></i><i class="fa fa-light fa-angle-right fa-fade"></i></p>

            </div>
        </div>
    </>
}
export default Location;