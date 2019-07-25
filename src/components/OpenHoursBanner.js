import React from 'react'

const OpenHoursBanner = () => {

    return (
        <section className="opening-hours-banner">
            <div className="hours-baner-border">
                <div className="hours-banner-wrapper">
                    <h2>Opening hours</h2>
                    <div></div>
                    <i className="fas fa-cookie-bite"></i>
                    <h3>mon-fri</h3>
                    <span>7-20</span>
                    <h3>Sat</h3>
                    <span>7-15</span>
                    <h3>Sun</h3>
                    <span>closed</span>
                </div>
            </div>

        </section>
    );
}

export default OpenHoursBanner;