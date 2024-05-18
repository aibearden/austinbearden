"use client"

import { profile } from "@/data/profile";
import SecondaryLayout from "../SecondaryLayout";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
interface ProfileDataInterface {
    name: string,
    profileImageUrl: string,
    title: string,
    description: string,
    githubUrl: string,
    linkedInUrl: string,
    sourceCodeUrl: string
}

export default function Links() {

    const profileData = profile as ProfileDataInterface;;

    const openLinkedInProfile = () => {
        window.open(profileData.linkedInUrl, "_blank");
    }

    const openGitHubProfile = () => {
        window.open(profileData.githubUrl, "_blank");
    }

    const openSourceCode = () => {
        window.open(profileData.sourceCodeUrl, "_blank");
    }

    const buttonStyle = "flex flex-col justify-center items-center bg-gray-500 bg-opacity-40 rounded-2xl m-1";

    return (
        <SecondaryLayout>
            <div id="links" className="h-1/2 w-3/4 self-center grid grid-cols-2 p-1 grid-flow-row">
                <button id="github" onClick={() => openGitHubProfile()} className={buttonStyle}>
                    <h4>Github</h4>
                </button>
                <button id="linkedin" onClick={() => openLinkedInProfile()} className={buttonStyle}>
                    <h4>Linkedin</h4>
                </button>
                <button id="source-code" onClick={() => openSourceCode()} className={buttonStyle}>
                    <h4>Source Code</h4>
                </button>
            </div>
        </SecondaryLayout>
    );
}