"use client"

import { recommendations } from "@/data/recommendationsdata";
import Recommendation, { RecommendationInterface } from "./Recommendation";
import SecondaryLayout from "../SecondaryLayout";

export default function ListOfRecommendations() {

    return (
        <SecondaryLayout>
            <div className="h-full w-2/3 self-center grid grid-rows-4">
                <div className="row-span-1 flex flex-row justify-center content-end">
                    <h2 className="text-2xl self-center">Recommendations</h2>
                </div>
                <div className="w-full h-full overflow-y-auto row-span-3 flex flex-col justify-start content-center">
                    {(recommendations as RecommendationInterface[]).map((recommendation) => (
                        <Recommendation key={recommendation.author} recommendation={recommendation} />
                    ))}
                </div>
            </div>
        </SecondaryLayout>
    );
}