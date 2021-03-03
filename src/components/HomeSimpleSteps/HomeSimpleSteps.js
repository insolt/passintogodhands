import React from "react";

import CommonButton from "../CommonComp/CommonButton/CommonButton"

import "./HomeSimpleSteps.scss";

const HomeSimpleSteps = () => {
    return(
        <section class="simple_steps">
            <div className="container">
                <div className="simple_steps_title">
                    <p>Take 4 simple steps</p>
                </div>
                <div className="simple_steps_steps">
                    <div className="simple_steps_steps-items">
                        <div className="simple_steps_item">
                            <div className="simple_steps_icon-item"></div>
                            <p className="simple_steps_action">Choose items</p>
                            <p className="simple_steps_how">clothings, toys, any other items</p>
                        </div>
                        <div className="simple_steps_item">
                            <div className="simple_steps_icon-bag"></div>
                            <p className="simple_steps_action">Bag them</p>
                            <p className="simple_steps_how">use bin bags</p>
                        </div>
                        <div className="simple_steps_item">
                            <div className="simple_steps_icon-find"></div>
                            <p className="simple_steps_action">Decide who you want to help</p>
                            <p className="simple_steps_how">pick up trusted receiver</p>
                        </div><div className="simple_steps_item">
                            <div className="simple_steps_icon-send"></div>
                            <p className="simple_steps_action">Order collection</p>
                            <p className="simple_steps_how">collection at suitable time</p>
                        </div>
                    </div>
                </div>
                <div className="simple_steps_btn">
                    <CommonButton text="Pass items" to="/login" />
                </div>
            </div>
    </section>
    )
}

export default HomeSimpleSteps;