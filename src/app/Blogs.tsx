import SecondaryLayout from "./SecondaryLayout";
import { articles } from "@/data/articles";
import Article, { ArticleInterface } from "./Article";

export default function Blogs() {
    const articleData = articles as ArticleInterface[];


    return (
        <SecondaryLayout>
            <div className="self-center w-4/5 h-full flex flex-col content-center">
                <h2 className="text-2xl w-full h-[1/5] p-4 text-center">Articles</h2>
                <div className="flex flex-col content-center h-[4/5] overflow-y-auto">
                    {articleData.map((article: ArticleInterface, index: number) => {
                        return <Article key={index} article={article} />
                    })}
                </div>
            </div>
        </SecondaryLayout>
    );
}