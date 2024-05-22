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
    concat(article: ArticleInterface): ArticleInterface
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

export default function Article({ article }: ArticleProps) {
    return (
        <div className="w-full h-fit bg-slate-300 bg-opacity-25 flex flex-col justify-center content-center p-4">
            <img src={article.bannerImageUrl} className="shadow-lg w-full h-auto" alt="article image" />
            <h1 className="text-4xl">{article.title}</h1>
            <h4 className="text-sm">by {article.author}</h4>
            <h4 className="text-sm">{article.date}</h4>
            <p className="mt-8">
                <title>{article.body.heading}</title>
                <ul>
                    {article?.body.mainSections.map((mainSection, index) => (
                        <>
                            <li key={mainSection.heading + index+1}>{`${index+1}) ${mainSection.heading}`}</li>
                            {mainSection.subSections.map((subSection, subIndex) => (
                                <>
                                    <li key={subSection.heading + index+1}>&emsp;{`${subIndex+1}) ${subSection.heading}`}</li>
                                    {subSection.subPoints.map((subPoint, subPointIndex) => (
                                        <>
                                            <li key={subPoint.heading + index+1}>&emsp;&emsp;{`${subPointIndex+1}) ${subPoint.heading}`}</li>
                                            {subPoint.points.map((point, pointIndex) => (
                                                <>
                                                    <li key={point + index+1}>&emsp;&emsp;&emsp;{`${pointIndex+1}) ${point}`}</li>

                                                </>
                                            ))}
                                        </>
                                    ))}
                                </>
                            ))}
                        </>
                    ))}
                </ul>
            </p>
        </div>
    );
}