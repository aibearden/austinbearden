import SecondaryLayout from "../SecondaryLayout";
import { articles } from "@/data/articles";
import Article, { ArticleInterface } from "./Article";

export default function Blogs() {
    const articleData = articles as ArticleInterface[];


    return (
        <SecondaryLayout>
            <div className="self-center w-2/3 h-full flex flex-col content-center">
                <h2 className="text-2xl h-[1/5] p-4">Articles</h2>
                <div className="flex flex-col content-center h-[4/5] overflow-y-auto">
                    {articleData.map((article: ArticleInterface) => {
                        return <Article article={article} />
                    })}
                </div>
            </div>
        </SecondaryLayout>
    );
}