"use client"

import { profile } from "@/data/profile";

import profileImage from "../../../assets/self_image.jpeg";

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
    const profileData = profile as ProfileDataInterface;
   
    return (
        <div className="h-full w-full grid grid-rows-3">
            <div className="flex flex-col">
                <img src={profileImage.src} className="absolute w-full bg-fixed bg-top h-1/3 object-cover blur-lg" alt="profile image" />
                <img src={profileData.profileImageUrl} className="relative self-end m-4 shadow-lg w-1/4 rounded-full" alt="profile image" />
            </div>
            <div id="image" className="flex flex-row justify-center items-center">
            </div>
            <div>
            </div>
        </div>
    );
}