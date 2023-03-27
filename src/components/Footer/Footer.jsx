import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Footer() {
  return (
    <div className={s.wrapper}>
        <div className={s.head}>
            <div className={s.logo}>
                <img src="/media/logo.svg" alt="logo" />
                <img src="/media/pages.svg" alt="logo1" />
            </div>
            <div className={s['social-media']}>
                <a className={s['social-media-link']} href="https://www.facebook.com/" target="_blank"><img src="/media/fb-icon-white.svg" alt="fb-icon" /></a>
                <a className={s['social-media-link']} href="https://twitter.com/" target="_blank"><img src="/media/twitter-icon-white.svg" alt="twitter-icon" /></a>
                <a className={s['social-media-link']} href="https://www.linkedin.com/" target="_blank"><img src="/media/linkedin-icon-white.svg" alt="linkedin-icon" /></a>
                <a className={s['social-media-link']} href="https://www.instagram.com/" target="_blank"><img src="/media/instagram-icon.svg" alt="instagram-icon" /></a>
            </div>
        </div>
        <div className={s.explore}>
            <h5 className={s.title}>Explore</h5>
            <nav className={s['nav-wrapper']}>
            <NavLink className={s.nav} to='/'><span className={s.myicon}>...</span> Home</NavLink>
            <NavLink className={s.nav} to='/author'><span className={s.myicon}>...</span> Author</NavLink>
            <NavLink className={s.nav} to='/companies'><span className={s.myicon}>...</span> Companies</NavLink>
            <NavLink className={s.nav} to='/articles'><span className={s.myicon}>...</span> Our Store</NavLink>
            <NavLink className={s.nav} to='/'><span className={s.myicon}>...</span> Contact Us</NavLink>
        </nav>
        </div>

        <div className={s.utility}>
            <h5 className={s.title}>Utility Pages</h5>
            <div className={s['nav-wrapper']}>
                <Link className={s.links} to='/'><span className={s.myicon}>...</span> Style Guide</Link>
                <Link className={s.links} to='/'><span className={s.myicon}>...</span> 404 Not Found</Link>
                <Link className={s.links} to='/'><span className={s.myicon}>...</span> Password Protected</Link>
                <Link className={s.links} to='/'><span className={s.myicon}>...</span> Licenses</Link>
                <Link className={s.links} to='/'><span className={s.myicon}>...</span> Changelog</Link>
            </div>
        </div> 

        <div className={s.contact}>
            <h5 className={s.title}>Keep in Touch</h5>
            <div className={s.content}>
                <p>Adress: </p>
                <span>24A Kingston St, Los Vegas NC 28202, USA.</span>
                <p>Mail: </p>
                <span>support@pages.com</span>
                <p>Phone: </p>
                <span>(+22) 123 - 4567 - 900</span>      
            </div>    
        </div>       
    </div>
  )
}
