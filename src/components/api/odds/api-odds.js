import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import Date from "../../date/Date";
import styled from "styled-components";
import GGBET from "../../images/gg-bet-logo.png"

const Time = styled.div`
    width:  30px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    margin: 0px 5px;
`

const DataRow = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    gap:2px;
    padding:7px 5px;
    background-color: #252525;
    margin:5px auto;
    font-size:9px;
    font-weigth:300;
    
    @media screen and (min-width:780px){
        max-width:500px;
    }
    `

const MatchType = styled.p`
    margin:0px;
    font-size:11px;
    font-weigth:400;
`

const CompContainer = styled.div`
    display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    width:100%;

    @media screen and(min-width:780px){
        width:500px;
    }
`

const CompLogo = styled.img`
    width:30px;`


const CompDiv = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
    align-items:center;
    width:70px;
`

const CompName = styled.div`
    width:60px;
    text-align:center;
    font-size:8px;
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
`

const OperatorLogo = styled.img`
    width: 20px; // Or maybe 100% if you want it to fill its parent
    object-fit: cover; // Ensures the image isn't stretched or compressed
    border-radius: 50%; // Optional, if you want the image itself to be circular
`

const OddsContainer = styled.div`
    display:flex;
    gap:7px; 
    align-items:center
    `
const Odd = styled.div`
    border:1px solid red;
    border-radius:15px;
    padding: 5px 10px;
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
        <div>
            {externalData.map(data =>(
                <div>
                    <div>
                      <p>{data.Name}</p>
                    </div>
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
                                <OddsContainer>
                                    <CompDiv>
                                        <CompLogo  src={`https://${match.Competitors[0].Logo}` } alt="GGBET" />
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
                                    <CompLogo alt={GGBET} src={`https://${match.Competitors[1].Logo}`} />
                                    <CompName>
                                        {match.Competitors[1].Name}
                                    </CompName>
                                </CompDiv>
                                </OddsContainer>
                                <OperatorDiv>
                                    <OperatorLogo src={GGBET}  alt="gg=bet-logo"/>
                                </OperatorDiv>
                            </CompContainer>
                        </DataRow>
                    ))}

                    </div>
                </div>
            ))}
        </div>
    )
}


export default OddsApi;