import React from 'react'
import s from './style.module.css'

export default function BookItem({title, price, descr, image}) {
  return (
    <div className={s.wrapper}>
        <div className={s.img}><img src={image} alt="book" /></div>
        <div className={s.content}>
            <p className={s.title}>{title}</p>
            <p className={s.price}>{price}</p>
            <p className={s.descr}>{descr}</p>
            <p className={s.printed}> <img src="/media/yellow-dot-icon.png" alt="icon" /> Printed Book</p>
        </div>
    </div>
  )
}
