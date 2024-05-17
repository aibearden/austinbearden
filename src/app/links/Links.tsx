import { profile } from "@/data/profile";
interface ProfileDataInterface {
    name: string,
    profileImageUrl: string,
    title: string,
    description: string,
    githubUrl: string,
    linkedInUrl: string
}

export default function Links() {

    const profileData = profile as ProfileDataInterface;;

    const openLinkedInProfile = () => {
        window.open(profileData.linkedInUrl, "_blank");
    }

    const openGitHubProfile = () => {
        window.open(profileData.githubUrl, "_blank");
    }

    return (
        <div id="links" className="lg:h-1/2 lg:grid lg:grid-cols-2 lg:p-1">
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
    );
}