import React, {useState, useEffect} from 'react'
import './feed.css'
import MessageSender from './MessageSender'
import Posts from './Posts'
import StoryReel from './StoryReel'
import db from './firebase'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timesTemp','desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => ({id:doc.id, data:doc.data(), })))
        })
    },[])

    console.log(posts)

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            {posts.map(post => {
                return(
                <Posts  key={post.data.id}
                profilePic={post.data.profilePic}    
                image={post.data.image}
                userName={post.data.userName}
                message={post.data.message}
                timesTemp={post.data.timesTemp}
                 />               
                )

                
            })}

            {/* <Posts 
            profilePic={"https://scontent.fhel4-1.fna.fbcdn.net/v/t1.0-9/117161506_655733315296457_8736053335936174191_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SuCczsgPS7YAX8pB6YP&_nc_ht=scontent.fhel4-1.fna&oh=284d3e76ae7125bc042925abf8817106&oe=607F0C8E"}
            image={"https://tripmydream.cc/processed/guide/5433a398ce6b4.jpg"}
            userName={"Alek Benni"}
            message={"Флориано́полис (порт. Florianópolis) — город в Бразилии, столица штата Санта-Катарина. Центр города расположен на западном берегу острова Санта-Катарина и соединяется с материком самым длинным подвесным мостом Бразилии. Составная часть мезорегиона Гранди-Флорианополис. Находится в составе крупной городской агломерации Флорианополис. Входит в экономико-статистический микрорегион Флорианополис. Население составляет 396 723 человека на 2007 год. Занимает площадь 433,317 км². Плотность населения — 915,5 чел./км²"}
            timesTemp={"This is Time Step"}
            />
            <Posts 
            profilePic={"https://scontent.fhel4-1.fna.fbcdn.net/v/t1.0-9/117161506_655733315296457_8736053335936174191_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SuCczsgPS7YAX8pB6YP&_nc_ht=scontent.fhel4-1.fna&oh=284d3e76ae7125bc042925abf8817106&oe=607F0C8E"}
            image={"https://tripmydream.cc/processed/guide/5433a398ce6b4.jpg"}
            userName={"Alek Benni"}
            message={"Флориано́полис (порт. Florianópolis) — город в Бразилии, столица штата Санта-Катарина. Центр города расположен на западном берегу острова Санта-Катарина и соединяется с материком самым длинным подвесным мостом Бразилии. Составная часть мезорегиона Гранди-Флорианополис. Находится в составе крупной городской агломерации Флорианополис. Входит в экономико-статистический микрорегион Флорианополис. Население составляет 396 723 человека на 2007 год. Занимает площадь 433,317 км². Плотность населения — 915,5 чел./км²"}
            timesTemp={"This is Time Step"}
            /> */}

        </div>
    )
}

export default Feed
