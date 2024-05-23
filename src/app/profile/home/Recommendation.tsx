"use static"

export interface RecommendationInterface {
    title: string,
    note: string
}

interface RecommendationProps {
    recommendation: RecommendationInterface;
}

export default function Recommendation({recommendation}: RecommendationProps) {
    
    return (
        <div className="m-4 mb-0 flex flex-col justify-center rounded-2xl shadow-md shadow-green-400 bg-gray-400 bg-opacity-70">
            <div className="rows-span-1 pl-8">
                <h4 className="text-md">Recommended by</h4>
                <h3 className="text-2xl text-blue-800 text-left">{recommendation.title}</h3>
            </div>
            <p className="rows-span-3 p-4 pl-8 pr-8 text-lg">{recommendation.note}</p>
        </div>
    );
}