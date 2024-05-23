"use static"

export interface RecommendationInterface {
    author: string,
    profile_image_url: string,
    title: string,
    note: string
}

interface RecommendationProps {
    recommendation: RecommendationInterface;
}

export default function Recommendation({recommendation}: RecommendationProps) {
    
    return (
        <div className="m-4 flex flex-col justify-center rounded-2xl shadow-md shadow-green-400 mb-6 bg-gray-400 bg-opacity-70">
            <div className="rows-span-3 w-full flex flex-row justify-center">
                <img 
                    src={recommendation.profile_image_url} 
                    alt="recommendation profile image"
                    className="rounded-full h-[100px]"
                />
            </div>
            <div className="rows-span-1">
                <h2 className="text-2xl text-gray-50 text-center">{recommendation.author}</h2>
                <h3 className="text-xl text-blue-800 text-center">{recommendation.title}</h3>
            </div>
            <p className="rows-span-3 p-4 pl-8 pr-8 text-lg">{recommendation.note}</p>
        </div>
    );
}