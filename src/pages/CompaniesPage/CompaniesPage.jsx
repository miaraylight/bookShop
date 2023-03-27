import React from 'react'
import CompanyItem from '../../components/CompanyItem/CompanyItem'
import s from './style.module.css'
import lineIcon from '../../image/line-icon.png'
import storeimage1 from '../../image/shop1.svg'
import storeimage2 from '../../image/shop2.svg'
import storeimage3 from '../../image/shop3.svg'
import storeimage4 from '../../image/shop4.svg'

export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      image: storeimage1,
      title: 'Amazen Corp.',
      descr: 'They has been helping readers, music lovers, and videophiles find quality material.'
    },
    {
      id: 2,
      image: storeimage2,
      title: 'Megan Books',
      descr: 'We help physical bookstores manage their overstock to the book inventory.'
    },
    {
      id: 3,
      image: storeimage3,
      title: 'Megank',
      descr: 'Bookstore serving up the full spectrum of Black literature and wine black books.'
    },
    {
      id: 4,
      image: storeimage4,
      title: 'Urban Store',
      descr: 'We also carry the latest records, issues of all of your favorite comic books.'
    }
  ]
  return (
    <div className={s.container}>
      <h1>Trusted By The Best</h1>
      <div className={s.line}>
        <img  src={lineIcon} alt="icon" />
      </div>
      <div className={s.companies}>
        {
          companies.map(item => <CompanyItem key={item.id} {...item}/>)
        }
      </div>
      <div className={s.advice}>
        <div className={s.title}>
          <h2>Get Book Copy Today!</h2>
          <div className={s.dash}>
            <img src={lineIcon} alt="icon" />
          </div>
          <p>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
        </div>
      </div>
    </div>
  )
}
