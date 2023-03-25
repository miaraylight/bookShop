import React from 'react'
import BookItem from '../../components/BookItem/BookItem'
import s from './style.module.css'

export default function AuthorPage() {
  const data = [
    {
      id: 1,
      title: 'Atomic One’s',
      price: '$ 13.84 USD',
      descr: 'As the book contains theoretical content as well as solved questions.',
      image: '/media/book2.png'
    },
    {
      id: 2,
      title: 'The Dark Light',
      price: '$ 86.11 USD',
      descr: 'As the book contains theoretical content as well as solved questions.',
      image: '/media/book3.png'
    }
  ]
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2>The Author’s Book</h2>
        <div className={s.books}>
          {
            data.map(item => <BookItem key={item.id} {...item} />)
          }
        </div>
      </div>
      <div className={s.author}>
          <div className={s.image}>
            <img className={s.img}src="/media/author.png" alt="" />
          </div>
          <div className={s.about}>
            <h2>About the Author</h2>
            <p className={s.descr}>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
            <div className={s.rating}>
              <div>
                <p className={s.numbers}>02</p>
                <span>Books Published</span>
              </div>
              <div>
                <p className={s.numbers}>4.5</p>
                <span>User Reviews</span>
              </div>
              <div>
                <p className={s.numbers}>04</p>
                <span>Best Seller Awards</span>
              </div>
            </div>
            <div className={s.contacts}>
              <div className={s.qr}>
                <img src="/media/qr.png" alt="qr" />
              </div>
              <div className={s['author-contact']}>
                <p>John Abraham , Ph.d</p>
                <span>Mail:  johnabraham@gmail.com</span>
                <span>Phone:  (+2) 123 545 9000</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
