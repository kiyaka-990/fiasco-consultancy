import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
    return (
        <>    
            <ul>
                <li className='menu-item-has-children'><Link href='/home-two'>Home</Link>
                    
                </li>  
                <li className='menu-item-has-children'><Link href='/about-us'>About Us</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/about-us'>Who we are</Link></li>
                        <li><Link href='/about-us'>Our History</Link></li>
                        <li><Link href='/team-two'>Our Team</Link></li>
                        </ul>
                </li>
                <li className='menu-item-has-children'><Link href='/services'>Our Services</Link>
                  </li>
                <li className='menu-item-has-children'><Link href='/portfolio/2-columns'>projects</Link>
                </li>
                <li className='menu-item-has-children'><Link href='/contact'>Contact</Link>
                </li>      
            </ul>  
        </>
    );
};

export default MainMenu;