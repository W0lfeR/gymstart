
import React from 'react';


import Image from 'next/image';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
const Gallery = () => {
    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '16.jpg',
        '17.jpg',
        '18.jpg',
        '19.jpg',
        '20.jpg',
        '21.jpg',
        '22.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
        '27.jpg',
        '28.jpg',
        '29.jpg',
        '30.jpg',
        '31.jpg',
        '32.jpg',
        '33.jpg',
        '34.jpg',
        '35.jpg',
        '36.jpg',
        '37.jpg',
        '38.jpg',
        '39.jpg',
        '40.jpg',
        '41.jpg',
        '42.jpg',
        '43.jpg',
        '44.jpg',
        '45.jpg',
        '46.jpg',
        '47.jpg',
        '48.jpg',
        '49.jpg',
        '50.jpg',
    ];


    const [currentPage, setCurrentPage] = useState(0);
    const imagesPerPage = 12;
    const totalPages = Math.ceil(images.length / imagesPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const paginatedImages = images.slice(
        currentPage * imagesPerPage,
        (currentPage + 1) * imagesPerPage
    );





    return (
        <>
            <section className="gymstart-gallery">
                <div id="container-space-gallery">
                    <div className="gymstart-officialgallery">
                        <div className="gymstart-item">
                            {paginatedImages.map((image, index) => (
                                <Image
                                    key={index}
                                    src={`/gallery/${image}`}
                                    alt={`Image ${index + 1}`}
                                    loading="lazy"
                                    width={600}
                                    height={400}
                                    className="transition-opacity opacity-0 duration-two"
                                    onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Pagination length={totalPages} callBackResult={handleClick} />
            </section>
        </>
    )
}

export default Gallery

