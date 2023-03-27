import React from "react";
import s from "./style.module.css";

export default function ArticleItem({ title, descr, image, date }) {
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img src={image} alt={title} />
      </div>
      <div className={s.content}>
        <h5>{title}</h5>
        <p>{descr}</p>
        <span className={s.date}>{date}</span>
      </div>
    </div>
  );
}
