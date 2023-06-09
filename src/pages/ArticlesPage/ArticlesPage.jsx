import React from 'react'
import ArticleItem from '../../components/ArticleItem/ArticleItem'
import SubjectItem from '../../components/SubjectItem/SubjectItem'
import s from './style.module.css'
import lineIcon from '../../image/line-icon.png'
import readerImage from '../../image/IMAGE1.png'
import articles1 from '../../image/articles1.png'
import articles2 from '../../image/articles2.png'
import articles3 from '../../image/articles3.png'

export default function ArticlesPage() {
  const data = [
    {
      id: 1,
      descr: 'Use HDFS & Map Reduce for storing & analyzing data at scale.'
    },
    {
      id: 2,
      descr: 'Consume streaming data using Spark Streaming, Flink, and Storm.'
    },
    {
      id: 3,
      descr: 'Choose an appropriate data storage technology for your application'
    },
    {
      id: 4,
      descr: 'Analyze non-relational data using HBase, Cassandra, and MongoDB.'
    },
  ]
  const articles = [
    {
      id: 1,
      title: 'Significant reading has more info number',
      descr: 'Override the digital divide with additional clickthroughs from DevOps for real-time schemas.',
      date: 'October 6, 2021',
      image: articles1
    },
    {
      id: 2,
      title: 'Many variations of pass majority have suffered',
      descr: 'Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.',
      date: 'October 6, 2021',
      image: articles2
    },
    {
      id: 3,
      title: 'Words which don’t look even slightly believable',
      descr: 'Podcasting operational change management inside of workflows to establish a framework.',
      date: 'October 6, 2021',
      image: articles3
    },
  ]
  return (
    <div className={s.container}>
      <h2>What Will You Learn?</h2>
      <span className={s.line}>
        <img src={lineIcon} alt="icon"/>
      </span>
      <div className={s.info}>
        <div className={s.subjects}>
          {
            data.map(item => <SubjectItem key={item.id} {...item}/>)
          }
        </div>
        <div className={s.imgWrapper}>
          <div className={s.img}>
            <img src={readerImage} alt="book-reader" />
          </div>
        </div>
      </div>
      <div className={s.articles}>
        <h2>Articles & Resources</h2>
        <span className={s.line}>
          <img src={lineIcon} alt="icon" />
        </span>
        <div className={s.comments}>
          {
            articles.map(item => <ArticleItem key={item.id} {...item}/>)
          }
        </div>
      </div>
    </div>
  )
}
