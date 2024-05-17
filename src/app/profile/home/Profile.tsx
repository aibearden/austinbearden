"use client"

import { profile } from "@/data/profile";
import profileBackgroundImage from "../../../assets/self_bg_bw.jpeg";

interface ProfileDataInterface {
    name: string,
    profileImageUrl: string,
    title: string,
    description: string,
    tagLine: string,
    githubUrl: string,
    linkedInUrl: string
}

interface ProfileProps {

}

export default function Profile({ }: ProfileProps) {
    const profileData = profile as ProfileDataInterface;

    const buttonStyles = "w-full h-[100px] bg-gray-600 bg-opacity-70 justify-self-center m-2 p-2 rounded-lg shadow-lg whitespace-break-spaces";
   
    return (
        <div className="h-full sm:w-full md:w-full lg:w-2/3 w-full grid grid-rows-3">
            <div className="flex flex-col items-end">
                <img src={profileBackgroundImage.src} className="absolute xs:w-full sm:w-full md:w-full lg:w-2/3 w-full bg-fixed bg-top xs:h-1/5 sm:h-1/5 md:h-1/4 lg:h-1/4 h-1/5 min-h-[150px] object-cover blur-sm" alt="profile image" />
                <div className="z-10 w-full flex flex-row justify-end items-center">
                    <span className="flex flex-col justify-evenly items-end h-1/2 mr-4">
                        <h2 className="sm:text-2xl md:text-3xl lg:text-5xl text-2xl text-gray-600 text-end">{profileData.name}</h2>
                        <h4 className="sm:text-2xl lg:text-3xl text-xl text-red-400 text-end">{profileData.title}</h4>
                        <h5 className="sm:text-lg md:text-xl lg:text-2xl text-lg text-gray-600 text-end">{profileData.tagLine}</h5>
                    </span>
                    <img src={profileData.profileImageUrl} className="shadow-lg rounded-full max-w-[400px] w-1/5 h-auto m-4" alt="profile image" />
                </div>
            </div>
            <div id="body" className="w-full h-full flex flex-col justify-start items-center">
                <div id="description" className="w-11/12 h-full bg-blue_font bg-opacity-50 p-8 rounded-2xl shadow-lg overflow-y-auto">{profileData.description}</div>
            </div>
            <div id="footer" className="w-full mt-10 flex flex-col justify-between items-center">
                <div id="navigation" className="w-11/12 flex flex-row justify-center items-baseline">
                    <button className={buttonStyles}>Recommendations</button>
                    <button className={buttonStyles}>Articles</button>
                    <button className={buttonStyles}>Profile Links</button>
                </div>
                <span className="self-end p-4">Bright Idea Realities | 2024</span>
            </div>
        </div>
    );
}