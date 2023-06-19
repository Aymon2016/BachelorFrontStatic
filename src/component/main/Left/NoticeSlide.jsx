import React from 'react'
import './newsSlide.scss'

const news = [
    {
        id: 1,
        date: 1,
        title: 'firstness',
        body: 'loremm amer deshher oi ki krors kaklke amer k'
    },
    {
        id: 2,
        date: 2,
        title: 'firstness',
        body: 'loremm amer deshher oi ki krors kaklke amer k'
    },
    {
        id: 3,
        date: 3,
        title: 'firstness',
        body: 'loremm amer deshher oi ki krors kaklke amer k'
    }

]
const NoticeSlide = () => {
    return (
        <div class="news-container">
            <div class="title">
                News
            </div>

            <ul>
                {
                    news.map((item) => (<li key={item.date}>{item.title} |</li>))
                }

            </ul>
        </div>
    )
}

export default NoticeSlide
