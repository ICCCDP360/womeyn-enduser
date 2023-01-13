import Head from 'next/head'
import React from 'react'
import Header from '../header/Header'
import MobileHeader from '../header/Mobileheader/MobileHeader';
import styles from './styles/Layoutheader.module.scss';
import Footer from './../footer/Footer';
import Signupnewsletter from '../home/components/signupfornewsletter/Signupnewsletter';
function LayoutHeader({ setdark, dark, title, children }) {
    return (
        <>
            <Head>
                <title>{title ? title + "- womeyn" : "womeyn"}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="/favicon.ico" />
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head> 
            <div className={styles.mainheader}>
                <div className={styles.insidesectionlayout}>
                    <div className={styles.headersection}>
                        <div className={styles.headertopsection}>
                            <div className={`d-none d-lg-block`}>
                                <Header setdark={setdark} dark={dark} />
                            </div>
                            <div className={`d-block d-lg-none`}>
                                <MobileHeader setdark={setdark} dark={dark} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.insidemainscrollsection}>
                        <main>
                            {children}
                        </main>
                    </div>
                    {title == ("women-profile" || "women-login" || "women-signup") ?
                        <></>
                        :
                        <>
                            <div className='mb-5'>
                                <Signupnewsletter />
                            </div>
                            <div>
                                <footer>
                                    <Footer />
                                </footer>
                            </div>
                        </>
                    }

                </div>
            </div>

            {/* 
            <div className={styles.mainsectionlayout}>

                <div className={styles.insidesectionlayout}>

                    <div className={styles.headertopsection}>
                        <div className={`d-none d-lg-block`}>
                            <Header setdark={setdark} dark={dark} />
                        </div>
                        <div className={`d-block d-lg-none`}>
                            <MobileHeader setdark={setdark} dark={dark} />
                        </div>

                    </div>

                    <main>

                        {children}

                    </main>
                    <footer>
                        <div>
                            <Footer />
                        </div>
                    </footer>
                </div>
            </div> */}

        </>
    )
}

export default LayoutHeader