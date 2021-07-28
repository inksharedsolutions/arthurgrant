import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book-mock-up-min.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div id="wrapper-two-books">


                        <div className="content-wraps">
                            <div className="book-wraps">
                                <img src={FrontBook} alt="book-img"/>
                            </div>

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            The story of Deven: The Seventh Star is a Diary of a Wimpy Kid meets Harry Potter, splashed with Percy Jackson, hybrid. Deven, a small-town South Dakota kid discovers a universal secret that he inherits on his thirteenth birthday, and Deven's quiet world is about to get dramatically rocked.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook