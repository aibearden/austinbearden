"use client"

import { recommendations } from "@/data/recommendationsdata";
import Recommendation, { RecommendationInterface } from "./Recommendation";
import SecondaryLayout from "../SecondaryLayout";

export default function ListOfRecommendations() {

    return (
        <SecondaryLayout>
            <div className="h-full w-2/3 max-w-[680px] self-center grid grid-rows-8">
                <div className="row-span-1 flex flex-row justify-center content-end">
                    <h2 className="text-2xl self-center">Recommendations</h2>
                </div>
                <div className="w-full h-full overflow-y-auto row-span-7 flex flex-col justify-start">
                    {(recommendations as RecommendationInterface[]).map((recommendation) => (
                        <Recommendation key={recommendation.author} recommendation={recommendation} />
                    ))}
                </div>
            </div>
        </SecondaryLayout>
    );
}