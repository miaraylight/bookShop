import React from 'react'
import s from './style.module.css'

export default function HomePage() {
    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.title}>
                    <div className={s.greating}>
                        <span className={s.line}>
                            <img src="/media/line-icon.png" alt="icon" />
                        </span>
                        <span>Welcome To Pages!!!</span>
                    </div>
                    <h1>Your Books From The Best Writer.</h1>
                    <p>We believe that reading books are essential to a healthy culture. They’re where authors can connect with readers.</p>
                </div>
                <div className={s.order}>
                    <button>Order Today</button>
                    <button>Read Free Demo</button>
                </div>
                <div className={s.info}>
                    <div>
                        <img src="/media/yellow-dot-icon.png" alt="yellow-dot-icon" />
                        <span> Pages: </span>
                    </div>
                    <div>
                        <img src="/media/yellow-dot-icon.png" alt="yellow-dot-icon" />
                        <span> Length: </span>
                    </div>
                    <div>
                        <img src="/media/yellow-dot-icon.png" alt="yellow-dot-icon" />
                        <span> Rating: </span>
                    </div>
                    <p>250 pages</p>
                    <p>10 hours</p>
                    <p>4.5/5 (305 ratings)</p>
                </div>
            </div>
            <div className={s.book}>
                <img src="/media/book1.png" alt="book-title" />
            </div>
        </div>
    )
}
