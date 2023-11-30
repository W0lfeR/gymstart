import React from "react";

const Location = () => {

    return (
        <>
            <section className="gymstart-location" id="/">
                <div className="container-space-location">
                    <section className="gymstart-location-container gs-container ">
                        <section className="gymstart-location-data">
                            <h1 className="gymstart-location-title">Working hours</h1>
                            <p className="gymstart-location-description">Monday / Sunday - 07:30/21:30</p>
                        </section>


                    </section>
                    <section className="map-one">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2932.370185774478!2d23.3328728!3d42.6958818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85712687e499%3A0x29370f3a6e85350!2sSaint%20Alexander%20Nevsky%20Patriarch&#39;s%20Cathedral!5e0!3m2!1sen!2sus!4v1645374966444!5m2!1sen!2sus"
                            className="google-map__contact"
                            allowFullScreen
                        ></iframe>
                    </section>

                </div>
            </section>
        </>
    );
};

export default Location;
