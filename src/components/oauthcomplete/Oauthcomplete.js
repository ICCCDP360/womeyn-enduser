import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';
import { OauthSuccess, oAuthSuccessTokenStage } from '../../services/user-login-service/user-login-services';
// import CredentialsProvider from "next-auth/providers/credentials";
// import { useSession, signIn, signOut } from "next-auth/react"

function Oauthcomplete() {

    const router = useRouter();
    // useEffect(() => {
    //     oAuthSuccessTokenStage().then((res) => {
    //         console.log("kalaioath", res);
    //         setTimeout(() => {
    //             toast.success("Successfully Login!!");
    //             router.push("/");
    //         }, 1000);
    //     }).catch((err) => {
    //         console.log(err);
    //         toast.error("Error Something!!");
    //     })
    // }, [])


    useEffect(() => {
        OauthSuccess().then((res) => {
            toast.success("Sucess!!!");
            setTimeout(() => {
                router.push("/womenpreneurs");
            }, 1000)
        }).catch((err) => {

            toast.error("Error !! code!!")
            console.log(err)
        })
    }, [])


    return (
        <div className='d-flex align-content-center justify-content-center h-100'>
            <LoaderLogo />
        </div>
    )
}

export default Oauthcomplete