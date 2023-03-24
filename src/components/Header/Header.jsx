import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Header() {
  return (
    <div className={s.wrapper}>
        <div className={s.head}>
            <div className={s.logo}>
                <img src="/media/logo.svg" alt="logo" />
                <img src="/media/pages.svg" alt="logo1" />
            </div>
            <div className={s['social-media']}>
            <a className={s['social-media-link']} href="https://www.facebook.com/"><img src="/media/fb-icon.svg" alt="fb-icon" /></a>
            <a className={s['social-media-link']} href="https://twitter.com/"><img src="/media/twitter-icon.svg" alt="twitter-icon" /></a>
            <a className={s['social-media-link']}href="https://www.linkedin.com/"><img src="/media/linkedin-icon.svg" alt="linkedin-icon" /></a>
            </div>
            
        </div>
        <nav className={s['nav-wrapper']}>
            <NavLink className={s.nav} to='/'>Home</NavLink>
            <NavLink className={s.nav} to='/author'>Author</NavLink>
            <NavLink className={s.nav} to='/companies'>Companies</NavLink>
            <NavLink className={s.nav} to='/articles'>Articles</NavLink>
        </nav>
        <button className={s.order}>Order Today</button>
    </div>
  )
}
