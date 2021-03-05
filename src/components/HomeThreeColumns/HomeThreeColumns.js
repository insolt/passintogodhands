import React from "react";

import "./HomeThreeColumns.scss";

const HomeThreeColumns = () => {
    return(
        <section id="whats-on">
            <div className="container">
                <div className="stats_three_columns">
                    <div className="stats_items">
                        <p className="stats_value">10</p>
                        <h3 className="stats_title">Bags passed</h3>
                        <p className="stats_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima necessitatibus molestias enim delectus alias explicabo qui quasi quaerat at.</p>
                    </div>
                    <div className="stats_items">
                    <p className="stats_value">5</p>
                        <h3 className="stats_title">Organizations supported</h3>
                        <p className="stats_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima necessitatibus molestias enim delectus alias explicabo qui quasi quaerat at.</p>
                    </div>
                    <div className="stats_items">
                    <p className="stats_value">7</p>
                        <h3 className="stats_title">Collections organized</h3>
                        <p className="stats_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima necessitatibus molestias enim delectus alias explicabo qui quasi quaerat at.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeThreeColumns;