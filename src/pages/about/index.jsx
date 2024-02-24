import React from "react";
import "./about.css";
const About = () => {
    return <>
        <div>
            <section id="page-header" class="about-header">
                <h2>#KnowUs</h2>
                <p>Wanna try something new? Order fast!</p>
            </section>

            <section id="about-head" class="section-p1">
                <img src="/img/about/a6.jpg" alt="" />
                <div>
                    <h2>Who We Are?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae eligendi molestiae dolore similique eius sit, assumenda commodi facere aperiam sunt excepturi dolorum eaque distinctio tempora atque provident laudantium consectetur dolor aut praesentium? Enim explicabo magni, adipisci unde tempora nisi tenetur molestiae deserunt omnis. Excepturi.</p>

                    <abbr title="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam dicta ut rem sunt corporis laborum exercitationem aut expedita provident.</abbr>

                    <br></br>
                        <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo commodi animi praesentium, tenetur facilis porro itaque atque ratione corruption. </marquee>
                    </div>
                    
                    </section>
                </div>

            </>
}

            export default About;