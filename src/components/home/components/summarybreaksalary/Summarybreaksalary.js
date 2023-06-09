import React, { Fragment } from 'react'
import styles from './styles/Summarybreaksalary.module.scss';
import Slider from "react-slick";
import lock from '../../../../assests/homepage-logos/lock.png';
import power from '../../../../assests/homepage-logos/power.png';
import carttrack from '../../../../assests/homepage-logos/carttarck.png';
import circlecake from '../../../../assests/homepage-logos/circlecake.png';
import a from '../../../../assests/homepage-logos/a.png';
import highlow from '../../../../assests/homepage-logos/Highlow.png';
import boost from '../../../../assests/homepage-logos/Boosst.png';
import majine from '../../../../assests/homepage-logos/majine.png';
import bebe from '../../../../assests/homepage-logos/BEBY.CO.png';
import glowup from '../../../../assests/homepage-logos/GlowUP.png';
import quene from '../../../../assests/homepage-logos/Quena.io.png';
import Image from 'next/image';
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import Skeleton from 'react-loading-skeleton';
function Summarybreaksalary({ bannerimages }) {
    const data = [
        {
            id: 1,
            image: lock,
            text: highlow
        },
        {
            id: 2,
            text: boost
        },
        {
            id: 3,
            text: majine,
            image: a
        },
        {
            id: 4,
            text: bebe,
            image: carttrack
        },
        {
            id: 5,
            text: glowup,
            image: power
        },
        // {
        //     id: 6,
        //     text: quene,
        //     image: circlecake
        // }
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        nextArrow: <SlideNextArrow />,
        prevArrow: <SlidePreArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const MovePageData = (data) => {
        window.open(data);
    }
    return (
        <Fragment>
            <div className={styles.summarymainsection}>
                <div className={styles.insidesummarysection}>
                    {bannerimages?.ClientLogos?.length===0 ?<div className={styles.sketonbannes}>
                       
                    
                    {data?.map((item,index)=>{
                        return(
                            <div className="col-lg-2">
<Skeleton className={styles.summaryBreakPoints}/>

                            </div>
                        )
                    })}
                       
                    
                    </div>:
                                        <Slider {...settings}>
                        {bannerimages?.ClientLogos?.map((item, index) => {
                            return (
                                <div className={styles.insideslidess}  key={index}>
                                    <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.imageName}`} alt="no image" className={styles.slidesummaryimages1} onClick={() => MovePageData(item.redirectUrl)} />
                                </div>
                            )
                        })}
                    </Slider>
}
                </div>
            </div>
        </Fragment>
    )
}

export default Summarybreaksalary