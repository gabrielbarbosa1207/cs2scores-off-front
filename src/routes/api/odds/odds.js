import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { getOdds } from "../../../services/api/api";
import ReactMarkdown from 'react-markdown';
import OddsApi from "../../../components/api/odds/api-odds";
import { Helmet } from "react-helmet"
import SideMenu from "../../../components/partials/side-menu";


const GlobalStyle = createGlobalStyle`
html,body{
    margin: 0px;
    padding: 0px 0px 40px 0px;
    background-color:#1c1c1c;
    color:white;
    font-family: 'Inter', sans-serif;
    overflow-x:hidden !important;

    @media (min-width:780px){
        padding: 0px 3px 40px 0px;
    }
    
  }

  h1{
    margin: auto;
    height:auto;
  }
`;

const Headline = styled.h1`
  text-align:left;
  font-size:22px
`

const BodyContainer = styled.div`
    padding: 0px 8px;
    color:gray;

    p{
        14px;
    }

    @media (min-width: 780px) {
        margin-left:260px;
        width:calc(100% - 450px)
    }
`

const TitleContainer = styled.div`
    height:120px;
    background-color: gray;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (min-width: 780px) {
        width:100%;
        margin: auto;
        text-align:center;
        height:250px;
        background-color: gray;
        display:flex;
        justify-content:center;
        align-items:center;
     }
`

const ApiSection = styled.div`
    
    display:flex;
    flex-direction:column;

    @media (min-width:780px){
    display:flex;
    flex-direction:row;
    }
`

const ContentSection = styled.div`
    width:100%;
    padding: 0px;
    margin:0px;
`

const SideContainer = styled.div`
    @media(min-width:780px){
        width:310px;
    }
`
const SideAds = styled.div`

    display:none;

    @media (min-width:780px){
        width: 250px;
        display:block;
    }
`;

const SideBar = styled.div`
    display: none;

    @media (min-width:780px){
        display: block;
        width: 255px;
    }
`;



const DataSection = styled.div`
    display:flex;
    position:relative;
`

const Iframe = styled.iframe`
    width:240px;
    height:650px;
    margin: 5px auto;
    overflow-x:hidden;
    display:block;
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

                    <link rel="canonical" href={`https://cs2scores.com/odds`} />

                    {/* OpenGraph Tags for Facebook/Instagram */}
                    <meta property="og:title" content={ internalAPI?.data?.attributes?.MetaTitle } />
                    <meta property="og:description" content={ internalAPI?.data?.attributes?.MetaDescription } />
                    <meta property="og:url" content={`https://cs2scores.com/odds`} />
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
                            "@id": "https://cs2scores.com/odds"
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

{/* 
            <TitleContainer>
                <h1>
                    { internalAPI?.data?.attributes?.Title }
                </h1>
            </TitleContainer> */}

            <ApiSection>
                <SideContainer>
                    <SideMenu />
                </SideContainer>
                <ContentSection>                    
                    <TitleContainer>
                        <Headline>
                            { internalAPI?.data?.attributes?.Title }
                        </Headline>
                    </TitleContainer>
                    <DataSection>
                        <OddsApi />
                        <SideAds>
                            <SideBar>
                                <Iframe src="https://valorantbettingsites.com/go/ggbet">
                                </Iframe>
                            </SideBar>
                        </SideAds>
                    </DataSection>
                </ContentSection>
            </ApiSection>
            
            <BodyContainer>
                <ReactMarkdown>
                    { internalAPI?.data?.attributes?.Body }
                </ReactMarkdown>
            </BodyContainer>
            
        </div>
    );
}

export default OddsRoute;
