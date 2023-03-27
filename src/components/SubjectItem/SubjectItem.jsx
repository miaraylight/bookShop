import React from 'react'
import s from './style.module.css'

export default function SubjectItem({id, descr}) {
  return (
    <div className={s.wrapper}>
        <p>{id}</p>
        <p>{descr}</p>
    </div>
  )
}
