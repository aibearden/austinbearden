"use client"

import { recommendations } from "@/data/recommendationsdata";
import Recommendation, {RecommendationInterface} from "./Recommendation";

export default function ListOfRecommendations() {

    return (
        <div className="h-full grid grid-cols-2 p-4 pt-10">
            {(recommendations as RecommendationInterface[]).map((recommendation, index) => (
                <Recommendation key={index} recommendation={recommendation} />
            ))}
        </div>
    );
}