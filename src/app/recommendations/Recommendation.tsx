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
        <div className="w-full p-4 flex flex-col justify-center rounded-2xl shadow-md shadow-yellow-400 mb-6 bg-gray-400 bg-opacity-50">
            <div className="rows-span-3 w-full flex flex-row justify-center">
                <img 
                    src={recommendation.profile_image_url} 
                    alt="recommendation profile image"
                    className="rounded-full h-[130px]"
                />
            </div>
            <div className="rows-span-1">
                <h2 className="text-3xl text-gray-50 text-center">{recommendation.author}</h2>
                <h3 className="text-xl text-blue-800 text-center">{recommendation.title}</h3>
            </div>
            <p className="rows-span-3">{recommendation.note}</p>
        </div>
    );
}