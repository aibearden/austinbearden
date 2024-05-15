"use client"

import { motion, useScroll } from "framer-motion";

interface ProfileProps {

}

export default function Profile({ }: ProfileProps) {

    const profileImage = "https://media.licdn.com/dms/image/D5603AQEyf1boly3GbQ/profile-displayphoto-shrink_800_800/0/1715441823575?e=1721260800&v=beta&t=CLkKLuXN3HnupLqZlc2UY4APVwcPoZGbYGBCXeKxI-c";

    const {scrollYProgress} = useScroll();

    const openLinkedInProfile = () => {
        window.open("https://www.linkedin.com/in/austin-bearden-3a7466266/", "_blank");
    }

    const openGitHubProfile = () => {
        window.open("https://github.com/aibearden", "_blank");
    }
   
    return (
        <div className="flex flex-row justify-center items-center h-full w-full">
            <div id="profile" className="w-2/3 h-4/5 bg-slate-500 bg-opacity-60 grid grid-rows-3 rounded-lg shadow-lg m-4 ml-2">
                <div id="image" className="flex flex-row justify-center items-center">
                    <motion.div 
                        initial={{scale: 0}} 
                        animate={{rotate: 360, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20
                        }}>
                            <img src={profileImage} width={185} className="rounded-full shadow-lg" alt="austin bearden profile image" />
                        </motion.div>
                </div>
                <motion.img className="fixed top-0 left-0 right-0 h-[10px] bg-red-300 origin-left" style={{scaleX: scrollYProgress}} />
                <div id={"introduction"} className="flex flex-col items-center">
                    <h1 id="title" className="text-3xl font-semibold">Austin Bearden</h1>
                    <p id="description" className="p-4 text-center">As a Software Engineer at 3Aware, I've applied my creativity and passion for software development to build innovative and user-friendly applications using React and Java Spring Boot on both AWS and GCP. I led the front-end development and introduced standards and best practices for React, Javascript, and design.</p>
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