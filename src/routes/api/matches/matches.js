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
