import React from 'react'
import AuthorImg from '../../static/author/author-profile.jpg';
import DummyAuthor from "../../static/author/dummy-profile.jpg";

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        Arthur Grant has worked in the education industry for the last twenty years. He has a Master’s Degree in Exceptionality Education, and has specifically worked with students that have special needs.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Arthur Grant</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;