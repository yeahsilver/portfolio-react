import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './posts.css';

import IMG1 from '../../assets/bodymood.png';

axios.defaults.withCredentials = true;

const Posts = () => {
    const url = "http://localhost:3030/api/posts";
    axios.defaults.withCredentials = true;
    const [posts, setPosts] = useState(null);
    
    let content = null;

    const getPosts = async () => {
        await axios.get(url)
        .then((res) => {
            console.log(res.status)
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

    const showPosts = async() => {
        if(posts != null) {
            posts.map(({id, title, date, category, image, content, url}) => {
                return(
                    <div>
                    <article className="posts__card" key={id}>
                        <h5>{title}</h5>
                        <small>{content}</small>
                    </article>
                    </div>
                )
            })
        } else {
            return (
                <h5>데이터가 존재하지 않습니다</h5>
            )
        }
    }

    useEffect(() => {
        getPosts();
        console.log(posts);
    }, [])

    return (
        <section id="posts">
            <h5>My Recent Blog</h5>
            <h2>Posts</h2> 

            <div className="container posts__container">
                <div className="posts_container">
                    <div className="posts_cards">
                        {
                            posts != null ? 
                            posts.map(({id, title, date, category, image, content, url}) => {
                                return(
                                    <article className="posts__card" key={id}>
                                        <div className="posts__card__container">
                                            <div className="posts__image">
                                                <img className="posts__image-item" src={IMG1} alt="" />
                                            </div>

                                            <div classNmae="posts__content">
                                                <h5>{title}</h5>
                                                <small>{content}</small>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })
                            :
                            <h5>데이터 없음</h5>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts;