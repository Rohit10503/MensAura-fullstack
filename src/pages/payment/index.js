import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const auth = localStorage.getItem("user")
  const user_ka_id=JSON.parse(auth)._id;
  const [state, setState] = useState([]);

  //CArt ka data colect ho raha hai on refresh of page
  const collectCartData = async () => {
    let userid = JSON.parse(auth)._id
    let result = await fetch("http://localhost:5000/cart-show/" + userid);
    result = await result.json();

    if (result.result === "None") {
      setState(false)
    } else {
      setState(result)
    }
  }

  useEffect(() => {
    collectCartData();
  }, [])

  //below we use this two states
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [product, setProduct] = useState([]);

  //nakli hai yaha se 
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [isValidCardNumber, setIsValidCardNumber] = useState(true);
  const [isValidCVV, setIsValidCVV] = useState(true);

  function togglePaymentSections(event) {
    const selectedPaymentMethod = event.target.value;
    setPaymentMethod(selectedPaymentMethod);
  }

  function handleCardNumberChange(event) {
    const enteredCardNumber = event.target.value;
    setCardNumber(enteredCardNumber);

    // Validate card number format (16 digits)
    const isValid = /^\d{16}$/.test(enteredCardNumber);
    setIsValidCardNumber(isValid);
  }

  function handleCVVChange(event) {
    const enteredCVV = event.target.value;
    setCVV(enteredCVV);

    // Validate CVV format (3 digits)
    const isValid = /^\d{3}$/.test(enteredCVV);
    setIsValidCVV(isValid);


  }
  // nakli hai yaha tak 


  const handleClick = () => {
    //  props.onHide;
    navigate("/");
  }






  //data order wale database me bhejne ke liye
  const send_to_order = async () => {
    if (product.length >= 1) {
      product.map(async (item, index) => {

        const { userid, name, img, price, company, date } = item;
        let result = await fetch("http://localhost:5000/order", {
          method: "POST",
          body: JSON.stringify({ userid, name, img, price, company, date }),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        result = await result.json();
        if (result.result === "success") {
          console.log("payment  page inserted in database")
          emptyCart();
        } else {
          console.log("payment page not inserted in database")
        }
      })
    }
  }

  const emptyCart = async () => {
    let result = await fetch(`http://localhost:5000/delete/${user_ka_id}`, {
      method: "DELETE"
    });
    // if (result) {
    //   alert ("cart data deleted"); 
    // }
  }


  //cart wale data ko modify yani current date add karne ke lie
  const act_obj = []
  const handle_to_myOrder = async () => {
    if (!auth) {
      navigate("/login");
    } else {
      let userId = JSON.parse(auth)._id;
      let obj = {};
      state.map((item) => {
        obj = {
          userid: userId,
          name: item.name,
          img: item.img,
          price: item.price,
          company: item.company,
          date: date
        }
        act_obj.push(obj)

      })
      setProduct(act_obj);

      send_to_order()
    }
  };







  //ye bhi nakili hai
  function MyVerticallyCenteredModal(props) {



    return (

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body>

          <div>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Product ordered Successfully
              </Modal.Title>
            </Modal.Header>

          </div>
          <div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { props.onHide(); handleClick(); }} >Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container">
      <h2>Payment Details</h2>
      <form action="" method="post" id="paymentForm">

        <label htmlFor="paymentMethod">Select Payment Method:</label>
        <select id="paymentMethod" name="paymentMethod" onChange={togglePaymentSections} value={paymentMethod} required>
          <option value="card">Card Payment</option>
          <option value="upi">UPI Payment</option>
          <option value="cod">COD</option>
        </select>

        <fieldset id="cardPaymentSection" style={{ display: paymentMethod === "card" ? "block" : "none" }}>
          <legend>Card Payment</legend>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            required
          />
          {!isValidCardNumber && <p className="error">Please enter a valid 16-digit card number.</p>}

          <label htmlFor="cvv">CVV:</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={handleCVVChange}
            maxLength="3"
            required
          />
          {!isValidCVV && <p className="error">Please enter a valid 3-digit CVV.</p>}


          <label for="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />

          <label for="cardHolder">Card Holder Name:</label>
          <input type="text" id="cardHolder" name="cardHolder" required />
        </fieldset>

        <fieldset id="upiPaymentSection" style={{ display: paymentMethod === "upi" ? "block" : "none" }}>
          <legend>UPI Payment</legend>
          <label for="upiId">UPI ID:</label>
          <input type="text" id="upiId" name="upiId" placeholder="example@upi" required />
        </fieldset>

        {/* <input type="submit" value="Submit Payment" /> */}
        <Button variant="primary" onClick={() => { setModalShow(true); handle_to_myOrder(); }}>Submit Payment</Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)} />

      </form>
    </div>
  );
};

export default Payment;



