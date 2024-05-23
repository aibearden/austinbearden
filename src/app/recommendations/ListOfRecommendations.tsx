"use client"

import { recommendations } from "@/data/recommendationsdata";
import Recommendation, { RecommendationInterface } from "./Recommendation";
import SecondaryLayout from "../SecondaryLayout";

export default function ListOfRecommendations() {

    return (
        <div className="w-full h-full grid grid-cols-2 p-4 pt-10">
            {(recommendations as RecommendationInterface[]).map((recommendation) => (
                <Recommendation key={recommendation.author} recommendation={recommendation} />
            ))}
        </div>
    );
}