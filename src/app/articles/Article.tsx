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

function ArticleSubSubSubSection({subSection, index}: {subSection: SubSubSections, index: number}) {
    return (
        <>
            <h4 className="text-lg w-full text-left">&emsp;&emsp;{`${subSection.heading}`}</h4>
            <div className="text-left">
                {subSection.points.map((point, pointIndex) => (
                        <li key={"point"+pointIndex}>&emsp;&emsp;&emsp;{`- ${point}`}</li>
                ))}
            </div>
        </>
    );
}

function ArticleSubSubSection({subSection, index}: {subSection: ArticleBodyMainSectionSubSections, index: number}) {
    return (
        <>
            <h3 className="w-full text-2xl">&emsp;{`${subSection.heading}`}</h3>
            <div className="rounded-lg p-2">
                {subSection.subPoints.map((subPoint, subPointIndex) => (
                    <ArticleSubSubSubSection key={"subsubsection"+subPointIndex} subSection={subPoint} index={subPointIndex} />
                ))}
            </div>
        </>
    );
}

function ArticleMainSubSection({mainSubSection, index}: {mainSubSection: ArticleBodyMainSection, index: number}) {

    return (
        <>
            <h2 className="text-2xl text-gray-700 mt-4">{`${mainSubSection.heading}`}</h2>
            <div className="bg-gray-400 bg-opacity-10 rounded-lg shadow-lg">
                {mainSubSection.subSections.map((subSection, subIndex) => (
                    <ArticleSubSubSection key={"subsection"+subIndex} subSection={subSection} index={subIndex} />
                ))}
            </div>
        </>
    )
}

export default function Article({ article }: ArticleProps) {
    return (
        <div className="w-full h-fit bg-slate-300 bg-opacity-25 flex flex-col justify-center content-center">
            <img src={article.bannerImageUrl} className="shadow-lg w-full h-auto" alt="article image" />
            <h1 className="text-4xl">{article.title}</h1>
            <h4 className="text-sm">by {article.author}</h4>
            <h4 className="text-sm">{article.date}</h4>
            <p className="mt-8">
                <title>{article.body.heading}</title>
                <div>
                    {article?.body.mainSections.map((mainSection, index) => (
                        <ArticleMainSubSection key={"mainsection"+index} mainSubSection={mainSection} index={index} />
                    ))}
                </div>
            </p>
        </div>
    );
}