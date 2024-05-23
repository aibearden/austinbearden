"use client"

import { profile } from "@/data/profile";
import profileBackgroundImage from "../../../assets/horse_ride.jpeg";
import ListOfRecommendations from "./ListOfRecommendations";

interface ProfileDataInterface {
    name: string,
    profileImageUrl: string,
    title: string,
    description: string,
    githubUrl: string,
    linkedInUrl: string,
    sourceCodeUrl: string,
    tagLine: string
}

interface ProfileProps {

}

export default function Profile({ }: ProfileProps) {
    const profileData = profile as ProfileDataInterface;

    const openLinkedInProfile = () => {
        window.open(profileData.linkedInUrl, "_blank");
    }

    const openGitHubProfile = () => {
        window.open(profileData.githubUrl, "_blank");
    }

    const openSourceCode = () => {
        window.open(profileData.sourceCodeUrl, "_blank");
    }

    const buttonStyle = "p-1 bg-green-400 bg-opacity-80 m-2 rounded-lg text-left pl-4";

    return (
        <div className="h-full w-full grid grid-rows-13">
            <img src={profileBackgroundImage.src} className="absolute w-full h-full bg-fixed bg-top object-cover blur-sm -z-10" alt="profile image" />
            <div className="row-span-2 z-10">
                <div className="w-full flex flex-row justify-end items-center bg-slate-400 bg-opacity-80 shadow-md">
                    <span className="flex flex-col justify-center items-end mr-10">
                        <h2 className="text-4xl text-gray-600 text-end">{profileData.name}</h2>
                        <h4 className="text-2xl text-gray-50 text-end">{profileData.title}</h4>
                        <h5 className="text-lg text-blue-600 text-end">{profileData.tagLine}</h5>
                    </span>
                    <img src={profileData.profileImageUrl} className="shadow-lg rounded-full w-28 m-4" alt="profile image" />
                </div>
            </div>
            <div id="body" className="w-full row-span-5 grid grid-cols-8">
                <div id="description" className="h-full col-span-5 bg-blue_font bg-opacity-50 p-4 rounded-2xl shadow-md overflow-y-auto m-8 mr-4 whitespace-pre-wrap">
                    {profileData.description}
                </div>
                <div id="links" className="h-full col-span-3 bg-gray-50 bg-opacity-60 p-2 rounded-2xl shadow-md overflow-y-auto m-8 ml-2 grid grid-rows-6">
                    <button id="github" onClick={() => openGitHubProfile()} className={buttonStyle}>
                        <h4>Github</h4>
                    </button>
                    <button id="linkedin" onClick={() => openLinkedInProfile()} className={buttonStyle}>
                        <h4>Linkedin</h4>
                    </button>
                    <button id="source-code" onClick={() => openSourceCode()} className={buttonStyle}>
                        <h4>Project Source Code</h4>
                    </button>
                </div>
            </div>
            <div id="recommendations" className="row-span-5">
                <ListOfRecommendations />
            </div>
            <div id="footer" className="w-full mt-10 flex flex-col justify-between items-center row-span-1">
                <span className="self-end p-4 text-white">Bright Idea Realities | 2024</span>
            </div>
        </div>
    );
}