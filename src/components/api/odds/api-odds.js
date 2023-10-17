import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import Date from "../../date/Date";
import styled from "styled-components";
import GGBET from "../../images/gg-bet-logo.png"

const Tournament = styled.h2`
    font-size:14px;
    color:gray;
    margin:5px 0px;
`

const Time = styled.div`
    width:  60px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    margin: 0px;
    color:white;
`

const DataRow = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:7px 7px;
    background-color: #252525;
    margin:5px 0px;
    font-size:9px;
    font-weigth:300;

`

const MatchType = styled.p`
    margin:0px;
    font-size:11px;
    font-weigth:400;
`

const CompContainer = styled.div`
    display:flex;
    gap:15px;
    width:100%;
    align-items:center;
    justify-content:center;
`

const CompLogo = styled.img`
    width:30px;`


const CompDiv = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
    align-items:center;
    width:100%;
`

const CompName = styled.div`
    width:60px;
    text-align:center;
    font-size:8px;
    color:gray;
`
const OperatorDiv = styled.div`
    width:100%;
    display: flex; 
    justify-content: center;
    width: 30px;  // Setting both width and height
    height: 30px;
    align-items:center;
    padding: 1px;
    background-color: #3b3b3c;
    border-radius: 50%; // This ensures a perfect circle
    cursor:pointer;

    @media (min-width:850px){
        background-color: #252525;
        border-radius:0px;
    }
`

const OperatorLogo = styled.img`
    width: 20px; // Or maybe 100% if you want it to fill its parent
    object-fit: cover; // Ensures the image isn't stretched or compressed
    border-radius: 50%; // Optional, if you want the image itself to be circular

    @media(min-width:850px){
        width:45px;
        border-radius:0px;
    }
`

const OddsContainer = styled.div`
    display:flex;
    gap:10px; 
    align-items:center;

    @media(min-width:1160px){
        width:250px;
    }

    `
const Odd = styled.div`
    border:1px solid red;
    border-radius:15px;
    padding: 5px 10px;
`

const MainContainer = styled.div`
    cursor:pointer;

    @media (min-width: 850px) {
        max-width: calc(100% - 500px);
        margin: auto;
    }
`

const OperatorSection = styled.div`
    display:flex;
    justify-content:center;
`

const CompSection = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    gap:10px;

    @media (min-width:850px){
        display:flex;
        gap:15px;
        width:75%;
        justify-content:center;

    }
`

function OddsApi(){

    const [externalData, setExternalData] = useState([])

    useEffect(() =>{
        fetchOdds()
    },[])

    async function fetchOdds(){
        const response = await getExternalMatchesData()
        setExternalData(response.Sport.eSports.Events)
    }

    console.log(externalData)

    return(
        <MainContainer>
            {externalData.map(data =>(
                <div>
                    <Tournament>
                      <p>{data.Name}</p>
                    </Tournament>
                    <div>
                    {data.Matches.map(match => (
                        <DataRow>
                            <Time>
                                <MatchType>
                                {match.MatchType}
                                </MatchType>
                                <Date timestamp={match.StartDate}></Date>
                            </Time>
                            <CompContainer>
                                <CompSection>
                                    <OddsContainer>
                                        <CompDiv>
                                            <CompLogo  src={`https://${match.Competitors[0].Logo}` }
                                                alt="Logo Competidor"
                                                onError={(e) => {
                                                    e.target.src = GGBET;
                                                }}
                                            />
                                            <CompName>
                                                {match.Competitors[0].Name}
                                            </CompName>
                                        </CompDiv>
                                        <Odd>
                                            {match.Bets[0].Odds[0].Value}
                                        </Odd>
                                    </OddsContainer>
                                    <OddsContainer>
                                        <Odd>
                                                {match.Bets[0].Odds[1].Value}
                                            </Odd>
                                        <CompDiv>
                                            <CompLogo src={`https://${match.Competitors[1].Logo}`} 
                                                alt="Logo Competidor"
                                                onError={(e) => {
                                                    e.target.src = GGBET;
                                                }}
                                            />
                                            <CompName>
                                                {match.Competitors[1].Name}
                                            </CompName>
                                        </CompDiv>
                                    </OddsContainer>
                                </CompSection>
                                <OperatorSection>
                                    <OperatorDiv>
                                        <OperatorLogo src={GGBET}  alt="gg=bet-logo"/>
                                    </OperatorDiv>
                                </OperatorSection>
                            </CompContainer>
                        </DataRow>
                    ))}

                    </div>
                </div>
            ))}
        </MainContainer>
    )
}


export default OddsApi;