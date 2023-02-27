import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Womenpren.module.scss';
import Womeynbanner from '../../../../src/assests/homepage-logos/woymenbanner.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';

import serachicon from '../../../assests/homepage-logos/serachicon.png';
import axios from 'axios';
import { useRouter } from 'next/router';
import girl from '../../../assests/womeynlogos/girl4.png';
import Womencarouselbanner from './component/womenprebannerimages/Womencarouselbanner';
import { WomenpreneursCommoncategories, WomenpreneursSellers } from '../../../services/womenpreneurs-services/womenpreneurs-services';
import users from '../../../assests/homepage-logos/usersimageprofile.png';
import Select from 'react-select';
function Womenpreneurs() {
    const router = useRouter();
    const [dataseller, setDataseller] = useState([]);
    const [datacategory, setDataCtagoryies] = useState([]);

    const [search, setSearch] = useState("");
    const [loadingset, setLoading] = useState(false);

    const [categoryid,setCtaegoryId]=useState("");
    useEffect(() => {
        WomenSellerList();
        WomenSellercategories();
    }, [categoryid])

    const WomenSellerList = () => {
        setLoading(true);
        WomenpreneursSellers(categoryid).then((res) => {
            setDataseller(res?.data?.results);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }
    const WomenSellercategories = () => {
        setLoading(true);
        WomenpreneursCommoncategories().then((res) => {
            const storecategory=[];
            res?.data.map((item,index)=>{
                const data={
                    value:item?.name,
                    label:item?.name,
                    id:item?.id
                }
                storecategory.push(data);
            })
            setDataCtagoryies(storecategory);
        }).catch((err) => {
            console.log(err);
        })
    }
    const handlepush = (id) => {
        router.push(`/womenpreneurs/${id}`);
    }
    const handleFilterCategory=(data)=>{
        console.log("c",data?.id)
        setCtaegoryId(data?.id);
        setSearch(data.name);
        
    }

    console.log("c",categoryid)
    return (
        <Fragment>
            <div className={styles.womeynmainsectionpre}>
                <div className={styles.emptyboxcolorright}>
                </div>
                <div className={styles.emptyboxcolorleft}>
                </div>
                <div className={styles.bodysectionwomeynpre}>

                    <div className={styles.imagesectionwomeyn}>
                        <Womencarouselbanner />
                    </div>
                    <div className={styles.ourwomenpreneurs}>
                        <div className='large-text'>
                            Our Womenpreneurs
                        </div>
                        <div className={styles.loreamtextwomen}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className={styles.serachsectionwomen}>
                        <div className={styles.serachwomenpresection}>
                            <div>
                                <Image src={serachicon} alt="no image" className={styles.serachiconwomen} />
                            </div>
                            <div>
                                <input type='text' placeholder="Search by Name or Brand" className={styles.inputtypesection} name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                           
                            <Select
                               
                                placeholder={"Filter Category ..."}
                                value={search} 
                                onChange={(e) => handleFilterCategory(e)}
                                options={datacategory}
                            />
                        </div>
                    </div>
                    <div className='cardsections row justify-content-center  w-100 mt-5 mb-3 ms-1'>
                        {loadingset ? <>

                            <div>
                                Loading....
                            </div>
                        </> : dataseller?.map((item, index) => {
                            return (
                                <div className='cards mt-1 mb-2 col-lg-3 col-sm-10 col-xs-10 col-md-10' key={index} onClick={() => handlepush(item?.cityName)}>
                                    <div className={styles.mainimagestyles}>
                                        {item?.profileImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.profileImageName}`} alt="no image" className={styles.sellerimagesize} /> : <>

                                            <Image src={users} alt="no image" className={styles.sellerimagesize} />

                                        </>}

                                        {/* <Image src={girl} alt="no image" className={styles.sellerimagesize} /> */}
                                    </div>
                                    <div className='womentitle'>
                                        {/* {item?.title.slice(0, 10)} */}
                                        {item?.firstName}{item?.lastName}
                                    </div>
                                    <div className='womendescription'>
                                        {/* {item?.description.slice(0, 5)} */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Womenpreneurs;