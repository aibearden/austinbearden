interface SubSubSections {
    heading: string,
    points: string[]
}

interface ArticleBodyMainSectionSubSections {
    heading: string,
    subPoints: SubSubSections[]
}

interface ArticleBodyMainSection {
    heading: string,
    subSections: ArticleBodyMainSectionSubSections[]
}

export interface ArticleInterface {
    bannerImageUrl: string,
    title: string,
    author: string,
    date: string,
    subject: string,
    body: {
        heading: string,
        mainSections: ArticleBodyMainSection[]
    }
}

interface ArticleProps {
    article: ArticleInterface
}

export default function Article({article}: ArticleProps) {
    return (
        <div className="w-full h-fit bg-slate-300 bg-opacity-25 flex flex-col justify-center content-center">
            <h1 className="text-4xl">{article.title}</h1>
            <h4 className="text-sm">by {article.author}</h4>
            <h4 className="text-sm">{article.date}</h4>
            <body>
                <title>{article.body.heading}</title>
                <body>
                    {article?.body.mainSections.map((section, index) => (
                        <>
                            
                        </>
                    ))}
                </body>
            </body>
        </div>
    );
}