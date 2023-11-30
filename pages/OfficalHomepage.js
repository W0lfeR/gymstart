import React from "react";
import Image from 'next/image';
import GymstartHomepageImage from "../public/homepage/home-img.png"
import GymstartLogoOne from "../public/sponsors/logo1.png"
import GymstartLogoTwo from "../public/sponsors/logo2.png"
import GymstartLogoThree from "../public/sponsors/logo3.png"
import GymstartLogoFour from "../public/sponsors/logo4.png"

const OfficalHomepage = () => {

    return (
        <>
            <main>
                <section className="gymstart-homepage" id="/">
                    <div className="container-space-homepage">
                        <section className="gymstart-homepage-container gs-container ">
                            <section className="gymstart-homepage-data">
                                <h2 className="gymstart-subtitle">MAKE YOUR</h2>
                                <h1 className="gymstart-title"> BODY SHAPE</h1>
                                <p className="gymstart-description">In here we will help you to shape and build your body and live your life to the fullest.</p>
                            </section>

                            <section className="gymstart-homepage-image">
                                <Image src={GymstartHomepageImage} className="gymstart-home-image" alt="gymstarthomepage-image" />
                            </section>
                            <div className="gymstart-homepage-triangle homepage-triangle-3"></div>
                            <div className="gymstart-homepage-triangle homepage-triangle-2"></div>
                            <div className="gymstart-homepage-triangle homepage-triangle-1"></div>
                        </section>


                    </div>
                </section>

                <section className="gymstart-sponsors">
                    <div className="container-space">
                        <section className="gymstart-sponsors-logos gymstart-sponsors-container grid">
                            <Image src={GymstartLogoOne} className="gymstart-sponsor-image" alt="gymstartsponsor-image" />
                            <Image src={GymstartLogoTwo} className="gymstart-sponsor-image" alt="gymstartsponsor-image" />
                            <Image src={GymstartLogoThree} className="gymstart-sponsor-image" alt="gymstartsponsor-image" />
                            <Image src={GymstartLogoFour} className="gymstart-sponsor-image" alt="gymstartsponsor-image" />
                        </section>
                    </div>
                </section>

                <section className="gymstart-aboutus">
                    <div className="container-space">
                        <div className="gymstart-aboutus-content">
                            <h1>За нас</h1>
                            <div className="gymstart-aboutus-content-centralrotation">
                                <div className="gymstart-aboutus-content-rotation">
                                    <p>  &quot;Start Fitness Club&quot;, е разположен в сградата на ПГТЕ &quot;Хенри Форд&quot;, в близост до метростанция &quot;Вардар&quot; и последната спирка на трамвай № 3. Клубът /Залата/ е оборудван/а с професионални уреди:</p>
                                    <p>LIFE FITNESS - кардио зона</p>
                                    <p>IVANKO - дискове, фиксирани дъмбели, криви фиксирани и свободни лостове</p>
                                    <p>JIMSA - професионално фитнес оборудване</p>
                                    <p>    SunLine - солариум</p>
                                </div>
                                <div className="gymstart-aboutus-content-division"></div>
                                <div className="gymstart-aboutus-content-rotationtwo">
                                    <p> Ако Ви е омръзнало от претъпкани фитнес клубове/зали и търсите място, където да се почувствате специални и да бъдете себе си,   елате при нас!

                                        Уютна обстановка; квалифицирани консултации; персонални тренировъчни програми и диети;фитнес библиотека, солариум, масажи      богат протеинов и кафе бар Ви очакват!
                                        На входа на Start Fitness Club ще Ви посрещнат нашите служители, които ще Ви съдействат по време на целия Ви престой.

                                        Заповядайте!

                                        Очакваме Ви! </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="gymstart-introducingpart">
                    <div className="container-space">
                        <div className="gymstart-introducingpart-title">
                            <div className="">
                                <h1>Video</h1>
                                <p>Feel It</p>
                            </div>
                        </div>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                src="https://www.youtube.com/embed/hWQ7lN7XDAU"
                                allow="autoplay; encrypted-media" ></iframe>
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/nwe76N7J0EI?rel=0&autoplay=1&mute=1" 
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
                        </div>
                    </div>
                </section>


            </main>
        </>
    );
};

export default OfficalHomepage;

