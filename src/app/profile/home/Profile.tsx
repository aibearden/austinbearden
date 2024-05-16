"use client"

import { profile } from "@/data/profile";

import profileBackgroundImage from "../../../assets/self_background_bw.jpg";

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

    const buttonStyles = "w-full h-[100px] bg-gray-600 bg-opacity-70 justify-self-center m-2 rounded-lg shadow-lg";
   
    return (
        <div className="h-full w-full grid grid-rows-3">
            <div className="flex flex-col items-end">
                <img src={profileBackgroundImage.src} className="absolute w-full bg-fixed bg-top h-1/4 min-h-[150px] object-cover blur-sm" alt="profile image" />
                <div className="z-10 w-full flex flex-row justify-end items-center">
                    <span className="flex flex-col justify-evenly items-end h-1/2 mr-4">
                        <h2 className="text-5xl text-gray-600 text-end">{profileData.name}</h2>
                        <h4 className="text-3xl text-gray-500 text-end">{profileData.title}</h4>
                        <h5 className="text-2xl text-blue_font text-end">{profileData.tagLine}</h5>
                    </span>
                    <img src={profileData.profileImageUrl} className="shadow-lg rounded-full max-w-[400px] w-1/5 h-auto m-4" alt="profile image" />
                </div>
            </div>
            <div id="body" className="w-full flex flex-col justify-start items-center">
                <div id="description" className="w-10/12 bg-gray-600 bg-opacity-70 max-w-[1000px] h-auto p-8 rounded-2xl shadow-lg">{profileData.description}</div>
            </div>
            <div id="footer" className="w-full flex flex-row justify-between items-center">
                <button className={buttonStyles}>Recommendations</button>
                <button className={buttonStyles}>Articles</button>
                <button className={buttonStyles}>Profile Links</button>
            </div>
        </div>
    );
}