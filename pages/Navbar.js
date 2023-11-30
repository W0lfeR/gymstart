import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import GymstartLogo from "../public/navbar/logo.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hideSidebar = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    dynamic(() => import('./prices'), { ssr: false });
    dynamic(() => import('./gallery'), { ssr: false });
    dynamic(() => import('./videos'), { ssr: false });
    dynamic(() => import('./location'), { ssr: false });
    dynamic(() => import('./drinks'), { ssr: false });
    dynamic(() => import('./blog'), { ssr: false });
  }, []);

  return (
    <header className={`gymstart-header ${scrolling ? 'scrolling' : ''}`}>
      <div className="gymstart-header-wrap">
        <Link href="/"><Image src={GymstartLogo} alt="gymstart-logo" /></Link>
        <div className="header-toggle nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav id="gymstart-ul-mobile" className={isOpen ? "sidebar-menu active" : "sidebar-menu"}>
          <ul className="gymstart-ul">
            <li className="nav-gymstartitems">
              <Link href="/" onClick={hideSidebar}>Home</Link>
              <Link href="/prices" onClick={hideSidebar}>Prices</Link>
              <Link href="/gallery" onClick={hideSidebar}>Gallery</Link>
              <Link href="/videos" onClick={hideSidebar}>Videos</Link>
              <Link href="/location" onClick={hideSidebar} >Location</Link>
              <Link href="/drinks" onClick={hideSidebar}>Drinks</Link>
              <Link href="/blog" onClick={hideSidebar}>Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  );
};

export default Navbar;
