import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { getOdds } from "../../../services/api/api";
import ReactMarkdown from 'react-markdown';
import OddsApi from "../../../components/api/odds/api-odds";


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
    const [internalAPI, setInternalApi] = useState({ data: { attributes: {} } });


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
                <TitleContainer>
                    <h1>
                        { internalAPI.data.attributes.Title }
                    </h1>
                </TitleContainer>
            
            <OddsApi />
            <BodyContainer>
                <ReactMarkdown>
                    { internalAPI.data.attributes.Body }
                </ReactMarkdown>
            </BodyContainer>
            
        </div>
    );
}

export default OddsRoute;
