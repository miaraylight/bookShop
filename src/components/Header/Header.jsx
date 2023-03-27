import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Header() {

  const checkClass = ({isActive}) => isActive ? s.active : '';

  return (
    <div className={s.wrapper}>
        <div className={s.head}>
            <div className={s.logo}>
                <img src="../../../public/media/logo.svg" alt="logo" />
                <img src="../../../public/media/pages.svg" alt="logo1" />
            </div>
            <div className={s['social-media']}>
              <a className={s['social-media-link']} href="https://www.facebook.com/" target="_blank"><img src="../../../public/media/fb-icon.svg" alt="fb-icon" /></a>
              <a className={s['social-media-link']} href="https://twitter.com/" target="_blank"><img src="../../../public/media/twitter-icon.svg" alt="twitter-icon" /></a>
              <a className={s['social-media-link']} href="https://www.linkedin.com/" target="_blank"><img src="../../../public/media/linkedin-icon.svg" alt="linkedin-icon" /></a>
            </div>
        </div>
        <nav className={s['nav-wrapper']}>
            <NavLink className={checkClass} to='/'>Home</NavLink>
            <NavLink className={checkClass} to='/author'>Author</NavLink>
            <NavLink className={checkClass} to='/companies'>Companies</NavLink>
            <NavLink className={checkClass} to='/articles'>Articles</NavLink>
        </nav>
        <button className={s.order}>Order Today</button>
    </div>
  )
}
