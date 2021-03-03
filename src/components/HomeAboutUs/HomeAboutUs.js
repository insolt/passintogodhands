import React from "react";

import People from "../../assets/People.jpg";
import "./HomeAboutUs.scss";

const HomeAboutUs = () => {
    return(
        <section id="about-us">
            <div className="container">
                <div class="about_us">
                    <div className="about_us-msg">
                        <p className="about_us-msg_title">About Us</p>
                        <p className="about_us-msg_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ex ad quaerat dolores exercitationem dicta nobis consequuntur, sint explicabo.</p>
                    </div>
                    <div className="about_us-photo">
                        <picture>
                            <img src={People} alt="Our team" title="Our team" loading="lazy" widtgh />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAboutUs;