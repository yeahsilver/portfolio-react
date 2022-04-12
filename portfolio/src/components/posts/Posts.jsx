import React, { useEffect, useState } from 'react';
import fetcher from "../../fetcher.js";
import './posts.css';

const Posts = () => {
    return (
        <section id="posts">
            <h5>My Recent Blog</h5>
            <h2>Posts</h2> 

            <div className="container posts__container">
                <div className="posts_container">
                    <div classname="posts_cards">
                        {/* <article className="posts__card">
                            <h5>블로그 타이틀</h5>
                            <small>블로그 글</small>
                        </article>
                        <article className="posts__card">
                            <h5>블로그 타이틀</h5>
                            <small>블로그 글</small>
                        </article>
                        <article className="posts__card">
                            <h5>블로그 타이틀</h5>
                            <small>블로그 글</small>
                        </article> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts;