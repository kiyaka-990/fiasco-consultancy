"use client";
import Social from '@/components/data/social';
import Link from 'next/link';
import logo3 from "../../../public/assets/img/logo-3.png";
import logo2 from "../../../public/assets/img/logo-2.fw.png";
import logo1 from "../../../public/assets/img/logo-1.png";
import MainMenu from './header-menu';
import Search from './search';
import { useState } from 'react';
import MobileMenuOne from './menu_sidebar/menu-one';

const HeaderTwo = () => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    return (
        <>
            <div className="header__two">
                <div className="header__two-topbar">
                    <div className="container">
                        <div className="row align-items-center borders">
                            <div className="col-xl-6 col-sm-8">
                                <div className="header__two-topbar-left sm-t-center">
                                    <Link href="#"><i className="far fa-clock"></i>Working Hours : Mon - Sat 8:00 am - 5.00 PM</Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-4">
                                <div className="header__two-topbar-social t-right sm-t-center">
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auto__container pl-35 pr-35">
                    <div className="header__area-menubar two">
                        <div className="header__area-menubar-left">
                            <div className="header__area-menubar-left-logo">
                                <Link href='/'>
                                    <img className='one' src={logo1.src} alt='logo' />
                                    <img className="two" src={logo2.src} alt="logo" />
                                    <img className="light" src={logo3.src} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-center two">
                            <div className="header__area-menubar-center-menu two menu-responsive">
                                <MainMenu />
                            </div>
                        </div>
                        <div className="header__area-menubar-right">
                            <div className="header__area-menubar-right-box">
                                <div className="header__area-menubar-right-box-search">
                                    <div className="search">	
                                        <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                            <i className="fal fa-search"></i>
                                        </span>
                                    </div>
                                    <Search isOpen={search} setIsOpen={setSearch} />
                                </div>
                                <div className="header__area-menubar-right-box-contact">
                                    <div className="header__area-menubar-right-box-contact-icon">
    {/* Changed icon from envelope (email) to phone-volume (phone) */}
    <i className="fal fa-phone-volume"></i>
</div>
<div className="header__area-menubar-right-box-contact-info">
    <span className="text-four">Need Help</span>
    {/* Changed email link (mailto) to phone link (tel) */}
    <h6><Link href="tel:+254712770999">+254712770999</Link></h6> 
</div>
                                </div>
                                <div className="header__area-menubar-right-responsive-menu menu__bar">
                                    <i className="flaticon-menu" onClick={() => setMenuSidebar(true)}></i>
                                </div>
                            </div>
                        </div>
                        <div className="header__area-menubar-right-btn">
                            <Link className="btn-six" href="/request-quote">Consulting<i className="far fa-chevron-double-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenuOne isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
        </>
    );
};

export default HeaderTwo;