import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-mock-up-min.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'arthur-grant',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | Arthur Grant"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `DEVEN`,
                                spanFirst: `The seventh star`,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                        <p>
                                        The story of Deven: The Seventh Star is a Diary of a Wimpy Kid meets Harry Potter, splashed with Percy Jackson, hybrid. Deven, a small-town South Dakota kid discovers a universal secret that he inherits on his thirteenth birthday, and Deven's quiet world is about to get dramatically rocked. This inheritance includes extraordinary, one-of-a-kind powers and will make him the most unique individual alive anywhere in the universe. He will be thrust into a hidden universal battle that has been taking place since the origin of our being. He will need to learn very quickly how to use his powers to fight a very powerful dark force. Can Deven live up to the new expectations that have been placed on his shoulders? Open your minds and get ready to embark with Deven and his friends Jordy and Miya on this globe-trotting, high-octane ride filled with exotic worlds, explosive action, plot twists, romance, and side-cracking humor.
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/deven-the-seventh-star/',
                                    barnes: 'https://www.barnesandnoble.com/w/deven-arthur-grant/1137421372?ean=9781648951190',
                                    amazon: 'https://www.amazon.com/Deven-Arthur-Grant-ebook/dp/B08F2XRH17/ref=sr_1_1?dchild=1&keywords=9781648951190&qid=1597083560&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Deven-Seventh-Star-Arthur-Grant/dp/164895118X/ref=sr_1_1?dchild=1&keywords=9781648951183&qid=1597083578&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/deven-arthur-grant/1125302252?ean=9781648951183',
                                    booksamillion: 'https://www.booksamillion.com/p/Deven/Arthur-Grant/9781648951183?id=8049069540563&_ga=2.31236603.530921348.1608181583-2145380449.1604906972',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;