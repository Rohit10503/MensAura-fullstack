import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import L from 'leaflet';



import "./profile.css"
import Leaflet from "../../components/leaflet/index.jsx";
const Profile = () => {

    const auth = localStorage.getItem("user");

    // const map = L.map('map').setView([51.505, -0.09], 13);

	// const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	// 	maxZoom: 19,
	// 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	// }).addTo(map);


    return <>
        <nav aria-label="breadcrumb" className="bread-crum">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/" >Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Profile</li>

            </ol>
        </nav>
        <div className="container profile-section ">
            <div className="card-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.timesbull.com/wp-content/uploads/2024/02/shatan-jpg.webp" />
                <Card.Body>
                    <Card.Title>{JSON.parse(auth).name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div>
                       <p> <b>Location </b>: {localStorage.getItem("location")}</p>
                       
                    </div>
                    <Link to="/shop"><Button variant="primary">Shop Now</Button></Link>
                </Card.Body>
            </Card>
            </div>

            <Leaflet className="map"/>
        </div>

    </>
}
export default Profile;