import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { getMatches } from "../../../services/api/api";
import ReactMarkdown from 'react-markdown';
import styled from "styled-components";
import MatchesAPI from "../../../components/api/matches/api-matches";
import { Helmet } from "react-helmet";


const GlobalStyle = createGlobalStyle`
html,body{
    margin: 0px;
    padding: 20px 8px 40px 8px;
    background-color:#1c1c1c;
    color:white;
    font-family: 'Inter', sans-serif;
  }
`;


const BodyContainer = styled.div`
    @media (min-width: 780px) {
        max-width: calc(100% - 500px);
        margin: auto;
    }
`

const TitleContainer = styled.div`
    @media (min-width: 780px) {
        max-width: calc(100% - 500px);
        margin: auto;
    }
`

// If the API is supposed to return more information, adapt this accordingly.


function MatchesRoute() {
    const [internalAPI, setInternalApi] = useState([]);


    useEffect(() => {
        fetchOdds()
    }, [])

    async function fetchOdds(){
        const response = await getMatches()
        setInternalApi(response)
    }

    console.log("Internal API", internalAPI)

    return (
        <div>
            <GlobalStyle />
                <Helmet>
                    <title>
                        { internalAPI?.data?.attributes?.MetaTitle }
                    </title>
                    <meta name="description" content={ internalAPI?.data?.attributes?.MetaDescription } />

                    <link rel="canonical" href={`https://wwww.cs2scores.com/matches`} />

                    {/* OpenGraph Tags for Facebook/Instagram */}
                    <meta property="og:title" content={ internalAPI?.data?.attributes?.MetaTitle } />
                    <meta property="og:description" content={ internalAPI?.data?.attributes?.MetaDescription } />
                    <meta property="og:url" content={`https://wwww.cs2scores.com/matches`} />
                    <meta property="og:image" content={`https://cdn.gin.bet/team/CSGO64fe198f21ccd789493425.png`} />

                    {/* Twitter Card tags */}
                    <meta name="twitter:card" content="CS2 Scores" />
                    <meta name="twitter:title" content={internalAPI?.data?.attributes?.MetaTitle} />
                    <meta name="twitter:description" content={internalAPI?.data?.attributes?.MetaDescription} />
                    <meta name="twitter:image" content={`https://cdn.gin.bet/team/CSGO64fe198f21ccd789493425.png`} />

                    <script type="application/ld+json">
                    {`
                        {
                        "@context": "http://schema.org",
                        "@type": "Article",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://wwww.cs2scores.com/matches"
                        },
                        "headline": "CS2 Matches & Live Scores",
                        "image": [
                            "https://cdn.gin.bet/team/CSGO64fe198f21ccd789493425.png"
                        ],
                        "datePublished": "2023-10-16T21:21:19.063Z", 
                        "dateModified": "2023-10-17T18:14:00.669Z",
                        "author": {
                            "@type": "Person",
                            "name": "William Westerlund"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "William Westerlund",
                            "logo": {
                            "@type": "ImageObject",
                            "url": "https://cdn.gin.bet/team/CSGO64fe198f21ccd789493425.png"
                            }
                        },
                        "description": "Kee­p up to date with real-time CS2 live­ statistics and match updates. Stay informed about player stats, team performance, and game results."
                        }
                    `}
                </script>

                    
                </Helmet>
            <TitleContainer>
                <h1>
                    {internalAPI?.data?.attributes?.Title}
                </h1>
            </TitleContainer>

            <MatchesAPI />

            <BodyContainer>
                <ReactMarkdown>
                    { internalAPI?.data?.attributes?.Body }
                </ReactMarkdown>
            </BodyContainer>
        </div>
    );
}

export default MatchesRoute;
