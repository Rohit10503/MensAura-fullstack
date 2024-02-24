import React from "react";
import "./contact.css"
const Contact = () => {
    return <>
        <div>
            <section id="page-header" class="about-header">
                <h2>Need Help?</h2>
                <p>Don't worry! Contact Us.</p>
            </section>

            <section id="contact-details" class="section-p1">
                <div class="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our service center or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <i class="bi bi-geo-alt-fill"></i>
                            <p>Shop no.26, Phoenix Mall, Kurla(w)</p>
                        </li>

                        <li>
                            <i class="bi bi-envelope"></i>
                            <p>mensauraofficial@gmail.com</p>
                        </li>

                        <li>
                            <i class="bi bi-telephone-fill"></i>
                            <p>+91 9892241346/ 98922464879</p>
                        </li>

                        <li>
                            <i class="bi bi-clock"></i>
                            <p>9:00 am - 11:00 pm</p>
                        </li>
                    </div>
                </div>

                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.484731706015!2d72.88640247497769!3d19.086379482120325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887efb78b9f%3A0x9f9dc99c3119470a!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1705686889383!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <section id="form-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button class="normal">Submit</button>
                </form>

                <div class="people">
                    <div>
                        <img src="/img/people/1.png" alt="" />
                        <p><span>Jack Joe</span> <br /> senior Marketing Manager <br /> Phone: +91 98924 <br /> Email: person1@mail.com</p>
                    </div>
                    <div>
                        <img src="/img/people/2.png" alt="" />
                        <p><span>Finn Albert</span> <br />senior Marketing Manager <br /> Phone: +91 98935 <br /> Email: person2@mail.com</p>
                    </div>
                    <div>
                        <img src="/img/people/3.png" alt="" />
                        <p><span>Sia Joe</span> <br />senior Marketing Manager <br /> Phone: +91 98946 <br /> Email: person3@mail.com</p>
                    </div>
                </div>
            </section>
        </div>
    </>

}
export default Contact;