import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author-profile.jpg'
import DummyImg from '../../static/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title="About the Author | Arthur Grant"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                {/* <img
                                    src={DummyImg}
                                    alt="_main_author" /> */}
                            </div>

                            <div className="heading-quote">
                                <h4>
                                "If ONE is for you, who dare be against you.”
                                </h4>
                                <span className="ata-span-fx">
                                Author Quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Arthur Grant has worked in the education industry for the last twenty years. He has a Master’s Degree in Exceptionality Education, and has specifically worked with students that have special needs. He developed a passion for writing as a young student himself, winning writing competitions, writing music, and school productions. He states that he enjoys using what he has learned about cognitive development to create visuals through words, that will work in unison to stimulate a mental escape from your current world.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Arthur Grant</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;