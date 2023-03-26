import React from 'react'
import s from './style.module.css'
export default function CompanyItem({image, title, descr}) {
  return (
    <div className={s.wrapper}>
        <div className={s.img}>
            <img src={image} alt="" />
        </div>
        <div className={s.info}>
            <p>{title}</p>
            <span>{descr}</span>
        </div>
    </div>
  )
}
