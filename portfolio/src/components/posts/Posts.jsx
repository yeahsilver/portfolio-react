import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './posts.css';

axios.defaults.withCredentials = true;

const Posts = () => {
    const url = "https://yesilver.kr/api/posts";
    axios.defaults.withCredentials = true;
    const [posts, setPosts] = useState(null);

    const getPosts = async () => {
        await axios.get(url)
        .then((res) => {
            console.log("GET Posts >> " + res.status);

            if(res.status === 200) {
                setPosts(res.data)
            } else {
                throw new Error("Network response was not ok")
            }
        }).then((data) => {
            console.log(JSON.stringify(data));
        }).catch((error) => {
            console.log(`${error}`)
        })
    };

    useEffect(() => {
        getPosts();
        console.log(posts);
    }, [])

    const showBlog = blogURL => () => {
        window.location = blogURL;
    }
    
    return (
        <section id="posts">
            <h5>My Recent Blog</h5>
            <h2>Posts</h2>

            <div className="container posts__container">
                <div className="posts_container">
                    <div className="posts__more">
                        <a href="https://blog.naver.com/0_0yeggy" target='_blank'>more ></a>
                    </div>
                    <div className="posts_cards">
                        {
                            posts != null ? 
                            posts.map(({id, title, date, category, image, content, url}) => {
                                return(
                                    <article className="posts__card" key={id}>
                                        <div className="posts__card__container" onClick={showBlog(url)}>
                                            <div className="posts__image">
                                                <img className="posts__image-item" src={image} alt="" />
                                            </div>
                                            <div classNmae="posts__content">
                                                <h5 className="posts__content-title">{title}</h5>
                                                <small className="posts__content-content">{content}</small>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })
                            :
                            <h5>데이터가 존재하지 않습니다.</h5>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts;