import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import dynamic from 'next/dynamic';
// import { useTranslation } from 'react-i18next';
import GymstartLogo from "../public/navbar/logo.png";
// import FlagEn from "../public/flags/en.png";
// import FlagBg from "../public/flags/bg.png";


const Navbar = () => {

  // const { t, i18n } = useTranslation("translation");
  // ... (rest of the component)


  // const { i18n } = useTranslation("gymstart-header");
  // const languages = [
  //   { name: "Български", flag: FlagBg, code: "bg" },
  //   { name: "English", flag: FlagEn, code: "en" },
  // ];
  // const currentLanguage =
  //   languages.find((language) => i18n.language === language.code) || languages[0];



  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hideSidebar = () => {
    setIsOpen(false);
  };
  // const changeLanguage = (langCode) => {
  //   i18n.changeLanguage(langCode).then(() => {
  //     const currentPath = window.location.pathname;
  //     const newPath = currentPath.replace(/^\/(bg|en)/, `/${langCode}`);
  //     window.history.pushState({}, "", newPath);
  //   });
  // };
  // const changeLanguage = (langCode) => {
  //   i18n.changeLanguage(langCode).then(() => {
  //     const newPath = window.location.pathname.replace(`/${i18n.language}`, `/${langCode}`);
  //     window.history.pushState({}, "", newPath);
  //   });
  // };

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
              <Link href="/" >Home</Link>
              <Link href="/prices" >Prices</Link>
              <Link href="/gallery" >Gallery</Link>
              <Link href="/videos" >Videos</Link>
              <Link href="/location" >Location</Link>
              <Link href="/drinks" >Drinks</Link>
              <Link href="/blog" >Blog</Link>


              {/* <Link href="/">{t('home')}</Link>
              <Link href="/prices">{t('prices')}</Link>
              <Link href="/gallery">{t('gallery')}</Link>
              <Link href="/videos">{t('videos')}</Link>
              <Link href="/location">{t('location')}</Link>
              <Link href="/drinks">{t('drinks')}</Link>
              <Link href="/blog">{t('blog')}</Link> */}
            </li>
          </ul>
        </nav>

        {/* <div className="language-dropdown">
          <div className="language-selector">
            <button onClick={() => changeLanguage("bg")} className={`language-button ${i18n.language === "bg" ? "active" : ""}`}>
              <div className="language-flag">
                <Image src={FlagBg} alt="Bulgarian" />
              </div>
              <span>Български</span>
            </button>
            <button onClick={() => changeLanguage("en")} className={`language-button ${i18n.language === "en" ? "active" : ""}`}>
              <div className="language-flag">
                <Image src={FlagEn} alt="English" />
              </div>
              <span>English</span>
            </button>
          </div>
          <ul className="language-menu">
            <li>
              <button onClick={() => changeLanguage("bg")} className={i18n.language === "bg" ? "active" : ""}>
                <div className="language-flag">
                  <Image src={FlagBg} alt="Bulgarian" />
                </div>
                <span>Български</span>
              </button>
            </li>
            <li>
              <button onClick={() => changeLanguage("en")} className={i18n.language === "en" ? "active" : ""}>
                <div className="language-flag">
                  <Image src={FlagEn} alt="English" />
                </div>
                <span>English</span>
              </button>
            </li>
          </ul>
        </div> */}
      </div>
    </header >
  );
};

export default Navbar;
