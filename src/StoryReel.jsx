import React from 'react'
import Story from './Story'
import './storyReel.css'

function StoryReel() {
    return (
        <div className="storereel">           
            <Story
            img="https://m.extra.globo.com/incoming/24767903-146-1be/w480h720-PROP/bruna-lopes2.JPG"
            profileSrc="https://m.extra.globo.com/incoming/24767906-e56-ed0/w480h720-PROP/bruna-lopes5.JPG"
            title="Bruna Lopes"
            />
            <Story
            img="https://новыйкачканар.рф/wp-content/uploads/2020/08/-e1598423029131.jpeg"
            profileSrc="https://noi.md/uploads/images/Day_report/2018_10_15/321153.jpg"
            title="Aleksei Navalny"
            />
            <Story
            img="https://i.pinimg.com/originals/a2/de/3e/a2de3e29af64fe88c81656abfe139e2b.jpg"
            profileSrc="https://pbs.twimg.com/profile_images/1218951672904474624/2LLZLwcH_400x400.jpg"
            title="Lara Silva"
            />
            <Story
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/250px-Elon_Musk_2015.jpg"
            profileSrc="https://www.ixbt.com/img/n1/news/2021/1/1/1522734231_ea2c55bd-cdfe-4cf1-a68a-eef46a4dfd09_w1200_r1_s_large.jpg"
            title="Ilon Mask"
            />
        </div>
    )
}

export default StoryReel
