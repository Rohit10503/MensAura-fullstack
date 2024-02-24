import React from "react";
import "./banner.css";
const Banner = () => {
    return <>
        <div>
            <section id="newsletter" class="section-p1 section-m1">
                <div class="newstext">
                    <h4>Sign up for newsletter</h4>
                    <p>Get E-mail updates about our new products and <span>special offers.</span></p>
                </div>
                <div class="form">
                    <input type="text" placeholder="Your email address"/>
                        <button class="normal">Sign Up</button>
                </div>
            </section>
        </div>
    </>
}

export default Banner;