export const articles = [
    {
        "bannerImageUrl": "https://media.licdn.com/dms/image/D4E16AQGhnfOiD6ankA/profile-displaybackgroundimage-shrink_350_1400/0/1676510339106?e=1721865600&v=beta&t=5YVKngXYJong8UL5sgTblwvjf4MlOR1JZHe9-rWEUFs",
        "title": "Front-End Development Vision",
        "author": "Austin Bearden",
        "date": "Tuesday, May 21st, 2024",
        "subject": "Answering the question presented by a large healthcare company in their application process:\n\n What makes up a great web frontend application, in terms of architecture, engineering, and deployment, as well as from a user experience perspective?",
        "body": {
            "heading": "What makes up a great web frontend application based on the following 4 categories:",
            "mainSections": [
                {
                    "heading": "Architecture",
                    "subSections": [
                        {
                            "heading": "Frontend architecture is imperative to a well-built app. I split frontend architecture into two categories",
                            "subPoints": [
                                {
                                    "heading": "Project architecture",
                                    "points": [
                                        "Key decisions like what platform to run on (e.x. Kubernetes versus serverless lambdas)",
                                        "What libraries will be introduced (e.x. Using Redux instead of built-in features of React, or what kind of routing will be used or what component libraries can make a world of difference in speed, and the outcome of the app)",
                                        "How components are organized in the component tree can massively affect performance"
                                    ]
                                },
                                {
                                    "heading": "Folder structure architecture",
                                    "points": [
                                        "Incorporating good folder and sub-folder structure",
                                        "Clearly labeling both folders and files to identify what they are/hold"
                                    ]
                                }
                            ]
                        },
                        {
                            "heading": "Clean code. I separate clean code into two categories.",
                            "subPoints": [
                                {
                                    "heading": "Well formatted JSX",
                                    "points": [
                                        "Well-formatted JSX by defining strict linting and pretty formators makes a major difference in reviewing code reviews and understanding code bases."
                                    ]
                                },
                                {
                                    "heading": "Components are pragmatically created and updated as the program grows:",
                                    "points": [
                                        "To be as orthogonal as possible",
                                        "Creating shared functions whenever possible",
                                        "Splitting reused chunks of a component into a separate component",
                                        "Abstracting functionality into helper functions"
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    "heading": "Engineering - Designing for:",
                    "subSections": [
                        {
                            "heading": "Performance",
                            "subPoints": [
                                {
                                    "heading": "Consider a framework like Next.js to help you move some components and pages of your app to be pre-rendered and cached before being sent to the browser",
                                    "points": []
                                },
                                {
                                    "heading": "Especially important with React, you need to be “component reload” hypersensitive. It is critical one learns how to build components well to avoid loading a component 4 times in a row when once was sufficient",
                                    "points": []
                                }
                            ]
                        },
                        {
                            "heading": "Maintainability",
                            "subPoints": [
                                {
                                    "heading": "Writing clean code (I addressed this in the Architecture section)",
                                    "points": []
                                },
                                {
                                    "heading": "Good testing",
                                    "points": [
                                        "For front-end apps, you must determine what is worth testing with a click-through application like Cypress or whether react-testing-library is enough",
                                        "If you are going to perform unit and end-to-end testing with JEST and react-testing-library it's important you learn how to mock out api calls well so that no components are left out of the testing process"
                                    ]
                                },
                                {
                                    "heading": "Good review process (see the Code review bullet below)",
                                    "points": []
                                }
                            ]
                        },
                        {
                            "heading": "Code reviews",
                            "subPoints": [
                                {
                                    "heading": "UI code reviews MUST have a screenshot or screen video attached showing what changed",
                                    "points": []
                                },
                                {
                                    "heading": "At least one other developer from the team must review the code (you can enforce this on most popular version control tools)",
                                    "points": []
                                },
                                {
                                    "heading": "A bonus is to use the Conventional comments methodology: https://conventionalcomments.org",
                                    "points": []
                                }
                            ]
                        },
                        {
                            "heading": "Security",
                            "subPoints": [
                                {
                                    "heading": "Introducing static code analysis tools like GitHub's Dependabot to scan for package vulnerabilities",
                                    "points": []
                                },
                                {
                                    "heading": "Having strict procedures and policies around how you store and retrieve keys and other items within infrastructure-as-code",
                                    "points": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "heading": "Deployment",
                    "subSections": [
                        {
                            "heading": "A continuous build and deployment pipeline",
                            "subPoints": [
                                {
                                    "heading": "The pipeline must run all unit and integration tests you create",
                                    "points": []
                                },
                                {
                                    "heading": "It must pass any other checks needed",
                                    "points": []
                                }
                            ]
                        },
                        {
                            "heading": "Keeping your infrastructure and environment variable repositories clean and orderly. Having clear processes for updating them and keeping keys secure.",
                            "subPoints": []
                        }
                    ]
                },
                {
                    "heading": "UX Perspective",
                    "subSections": [
                        {
                            "heading": "The way you organize your folders and components has a direct correlation to how easy it is to build the desired UX flow",
                            "subPoints": []
                        },
                        {
                            "heading": "All engineers must know the UX vision if they are to perform each of their tasks well",
                            "subPoints": []
                        },
                        {
                            "heading": "All engineers need to understand the importance of design first principles and capture the vision so that they pursue good design spec. adherence and bring up engineering concerns",
                            "subPoints": []
                        }
                    ]
                }
            ]
        }
    }
]