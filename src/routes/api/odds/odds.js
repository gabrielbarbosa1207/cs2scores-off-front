import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { getOdds } from "../../../services/api/api";
import ReactMarkdown from 'react-markdown';
import OddsApi from "../../../components/api/odds/api-odds";
import { Helmet } from "react-helmet"


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


function OddsRoute() {
    const [internalAPI, setInternalApi] = useState([]);


    useEffect(() => {
        fetchOdds()
    }, [])

    async function fetchOdds(){
        const response = await getOdds()
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

                    <meta name="description" content={ internalAPI?.data?.attributes?.MetaDescription } />

                    <link rel="canonical" href={`https://wwww.cs2scores.com/odds`} />

                    {/* OpenGraph Tags for Facebook/Instagram */}
                    <meta property="og:title" content={ internalAPI?.data?.attributes?.MetaTitle } />
                    <meta property="og:description" content={ internalAPI?.data?.attributes?.MetaDescription } />
                    <meta property="og:url" content={`https://wwww.cs2scores.com/odds`} />
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
                            "@id": "https://wwww.cs2scores.com/odds"
                        },
                        "headline": "CS2 Betting Odds",
                        "image": [
                            "https://cdn.gin.bet/team/CSGO64fe198f21ccd789493425.png"
                        ],
                        "datePublished": "2023-10-15T19:24:07.515Z", 
                        "dateModified": "2023-10-17T19:04:04.033Z",
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
                        "description": "Discover the best CS2 betting odds for all of the major games. View and compare Counter-Strike betting lines for major and small tournaments."
                        }
                    `}
                </script>

                </Helmet>
                <TitleContainer>
                    <h1>
                        { internalAPI?.data?.attributes?.Title }
                    </h1>
                </TitleContainer>
            
            <OddsApi />
            <BodyContainer>
                <ReactMarkdown>
                    { internalAPI?.data?.attributes?.Body }
                </ReactMarkdown>
            </BodyContainer>
            
        </div>
    );
}

export default OddsRoute;
