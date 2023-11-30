import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="gymstart-footer">
                <div className="container-space">
                    <section className="gymstart-footer-content">
                        <div className="gymstart-footer-logo">

                            <div className="gymstart-footer-copy">
                                <span>GYM START &copy; {new Date().getFullYear()} All the rights reserved.</span>
                            </div>
                        </div>

                        <article className="gymstart-footer-socialmediaicons">
                            <h4 className="gymstart-footer-title">Social Media</h4>
                            <a className='social-icon-link facebook' href="https://www.instagram.com/joeyvelichkov/" aria-label='Instagram'><i className='fab fa-instagram' /></a>
                            <a className='social-icon-link facebook' href="https://www.linkedin.com/in/joey-velichkov-44936bb0/" aria-label='Linkedin'><i className='fab fa-linkedin-in' /></a>

                        </article>

                    </section>
                </div>
            </footer>
        </>
    )
}

export default Footer

