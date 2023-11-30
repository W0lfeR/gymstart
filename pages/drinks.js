import React from "react";
import Image from 'next/image';
import DrinkImageOne from "../public/drinks/Ione.webp"
import DrinkImageTwo from "../public/drinks/Itwo.webp"


const Drinks = () => {


    return (
        <>

            <section className="gymstart-drinks" id="/">
                <div className="container-space">
                <section className="gymstart-drinks-data">
                            <h1 className="gymstart-drinks-title">Drinks</h1>
                        </section>
                    <section className="gymstart-drinks-image">
                        <Image src={DrinkImageOne} className="gymstart-drinks-image" alt="drinks-image" />
                        <Image src={DrinkImageTwo} className="gymstart-drinks-image" alt="drinks-image" />
                    </section>


                </div>
            </section>
 
        </>
    );
};

export default Drinks;
