import React, { Fragment } from 'react'
import styles from './styles/Footer.module.scss';
import womeynlogo from '../../assests/homepage-logos/womeyn_logo.png';
import Image from 'next/image';
import facebook from '../../assests/homepage-logos/facebookfooter.png';
import youtube from '../../assests/homepage-logos/youtubered.png';
import instagram from '../../assests/homepage-logos/newinstagramfooter.png';
import linkdin from '../../assests/homepage-logos/linkedinfooter.png';
import twitter from '../../assests/homepage-logos/twitterfooter.png';
import headphone from '../../assests/homepage-logos/headphonefooter.png';
function Footer() {
    return (
        <Fragment>
            <div className={styles.mainfootersection}>
                <div className={styles.footerrightemptybox}>

                </div>
                <div className={styles.insidefootersection}>
                    <div className={styles.splitinsidefootersection}>
                        <div className={styles.splitfootersection}>
                            <div className={styles.footersectionone}>
                                <div>
                                    <Image src={womeynlogo} alt="no image" />
                                </div>
                                <div className='footergreytext'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className={styles.socailfootersection}>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={youtube} alt="no image" className={styles.footersocialicons} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={linkdin} alt="no image" className={styles.footersocialicons} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={twitter} alt="no image" className={styles.footersocialicons} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={facebook} alt="no image" className={styles.footersocialicons} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={instagram} alt="no image" className={styles.footersocialicons} />
                                    </div>

                                </div>
                            </div>
                            <div className={styles.footersectiontwo}>
                                <div className='footertext'>
                                    QUICK LINKS
                                </div>
                                <div className="gapsectionfooter">
                                    <div>
                                        About us
                                    </div>
                                    <div>
                                        Contact us
                                    </div>
                                    <div>
                                        Products
                                    </div>
                                    <div>
                                        Login
                                    </div>
                                    <div>
                                        Sign Up
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footersectionthree}>
                                <div className='footertext'>
                                    CUSTOMER AREA
                                </div>
                                <div className="gapsectionfooter">
                                    <li>
                                        My Account
                                    </li>
                                    <li>
                                        Orders
                                    </li>
                                    <li>
                                        Tracking List
                                    </li>
                                    <li>
                                        Terms
                                    </li>
                                    <li>
                                        Privacy Policy
                                    </li>
                                    <li>
                                        My Cart
                                    </li>
                                </div>

                            </div>
                            <div className={styles.footersectionfour}>
                                <div className='footertext'>
                                    CONTACT
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                </div>
                                <div className={styles.headphonesectionfooter}>
                                    <div>
                                        <Image src={headphone} alt="nmo image" className={styles.headephoneimage} />
                                    </div>
                                    <div>
                                        <div>
                                            Have any question?
                                        </div>
                                        <div className='active mb-3'>
                                            + 123 456 789
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className={styles.livechat}>LIVE CHAT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer