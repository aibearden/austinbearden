"use client"

import { motion, useScroll } from "framer-motion";
import {profile} from "../../data/profille.json";

interface ProfileDataInterface {
    name: string,
    profileImageUrl: string,
    title: string,
    description: string,
    githubUrl: string,
    linkedInUrl: string
}

interface ProfileProps {

}

export default function Profile({ }: ProfileProps) {
    const profileData = profile as ProfileDataInterface;;

    const {scrollYProgress} = useScroll();

    const openLinkedInProfile = () => {
        window.open(profileData.linkedInUrl, "_blank");
    }

    const openGitHubProfile = () => {
        window.open(profileData.githubUrl, "_blank");
    }
   
    return (
        <div className="lg:grid lg:grid-rows-2 flex flex-row justify-center items-center h-full w-full">
            <div id="profile" className="w-2/3 h-4/5 bg-slate-500 bg-opacity-60 grid grid-rows-3 rounded-lg shadow-lg m-4 ml-2">
                <div id="image" className="flex flex-row justify-center items-center">
                    {/* <motion.div 
                        initial={{scale: 0}} 
                        animate={{rotate: 360, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20
                        }}> */}
                            <img src={profileData.profileImageUrl} className="rounded-full shadow-lg w-[175px]" alt="profile image" />
                        {/* </motion.div> */}
                </div>
                <motion.img className="fixed top-0 left-0 right-0 h-[10px] bg-red-300 origin-left" style={{scaleX: scrollYProgress}} />
                <div id={"introduction"} className="flex flex-col items-center">
                    <h1 id="title" className="text-3xl font-semibold">{}</h1>
                    <p id="description" className="p-4 text-center">{profileData.description}</p>
                </div>
                <div id="links" className="grid grid-cols-2 p-1">
                    <button id="github" onClick={() => openGitHubProfile()} className="flex flex-col justify-center items-center bg-gray-500 bg-opacity-40 rounded-2xl m-1">
                        <h4>GitHub</h4>
                    </button>
                    <button id="linkedin" onClick={() => openLinkedInProfile()} className="flex flex-col justify-center items-center bg-gray-500 bg-opacity-40 rounded-2xl m-1">
                        <h4>Linkedin</h4>
                    </button>
                    <button id="recommendations" className="flex flex-col justify-center items-center bg-gray-500 bg-opacity-40 rounded-2xl m-1">
                        <h4>Recommendations</h4>
                    </button>
                    <button id="source-code" className="flex flex-col justify-center items-center bg-gray-500 bg-opacity-40 rounded-2xl m-1">
                        <h4>Source Code</h4>
                    </button>
                </div>
            </div>
        </div>
    );
}