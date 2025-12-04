"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) =>
    value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) =>
    value == activeMenus ? { display: "block" } : { display: "none" };
  return (
    <>    
    <ul>
        <li className='menu-item-has-children'>
            <Link href='/home-two'>Home</Link>
            <a className={`mean-expand ${activeIcon("home")}`} onClick={() => active("home")}></a>
        </li>  
        <li className='menu-item-has-children'>
            <Link href='/about-us'>About Us</Link>
            <ul className='sub-menu' style={activeSubMenu("pages")}>
                <li><Link href='/about-us'>About Us</Link></li>
                <li><Link href='/about-us'>Who we Are</Link></li>
                <li><Link href='/about-us'>Our History</Link></li>
                <li><Link href='/team-two'>Our Team</Link></li>
				</ul>
            <a className={`mean-expand ${activeIcon("pages")}`} onClick={() => active("pages")}></a>
        </li>
		<li className='menu-item-has-children'><Link href='/services'>Our Services</Link>
            <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
		</li>
        <li className='menu-item-has-children'><Link href='/portfolio-filter'>Projects</Link>
            <a className={`mean-expand ${activeIcon("project")}`} onClick={() => active("project")}></a>
        </li>
        <li className='menu-item-has-children'><Link href='/blog'>Blog</Link>
            <a className={`mean-expand ${activeIcon("blog")}`} onClick={() => active("blog")}></a>
        </li>
        <li className='menu-item-has-children'><Link href='/contact'>Contact</Link>
             <a className={`mean-expand ${activeIcon("contact")}`} onClick={() => active("contact")}></a>
        </li>      
    </ul>  
    </>
  );
};

export default ResponsiveMenu;