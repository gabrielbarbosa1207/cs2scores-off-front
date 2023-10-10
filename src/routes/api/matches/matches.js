import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { getMatchesBySlug } from "../../../services/api/api";
import MatchesAPI from "../../../components/api/matches/api-matches";
import ReactMarkdown from 'react-markdown';


const GlobalStyle = createGlobalStyle`
html,body{
    margin: 0px;
    padding: 20px 8px 40px 8px;
    background-color:#1c1c1c;
    color:white;
    font-family: 'Inter', sans-serif;
  }
`;

// If the API is supposed to return more information, adapt this accordingly.


function MatchesRoute() {
    const [internalAPI, setInternalApi] = useState([]);

    useEffect(() => {
        fetchOdds()
    }, [])

    async function fetchOdds(){
        const response = await getMatchesBySlug()
        setInternalApi(response)
    }

    return (
        <div>
            <GlobalStyle />
            {internalAPI.data.map(content => (
                <h1 key={content.id}>
                    {content.attributes.Title}
                </h1>
            ))}
            <MatchesAPI />
            {internalAPI.data.map(content => (
                <ReactMarkdown>
                    { content.attributes.Body }
                </ReactMarkdown>
            ))}
        </div>
    );
}

export default MatchesRoute;
