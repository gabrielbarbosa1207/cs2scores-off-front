import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import Date from "../../date/Date";
import styled from "styled-components";
import GGBET from "../../images/gg-bet-logo.png"

const Time = styled.div`
    width:  60px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    margin: 0px;
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
    gap:10px;
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
    width:90px;
`

const CompName = styled.div`
    width:100px;
    text-align:center;
    font-size:9px;
    color:gray;
`
const OperatorDiv = styled.div`
    width:100%;
    display: flex; // To center the inner image
    align-items: center;
    justify-content: center;
    width: 35px;  // Setting both width and height
    height: 35px; // ensures a square, which is essential for a perfect circle
    padding: 1px;
    background-color: #3b3b3c;
    border-radius: 50%; // This ensures a perfect circle
`

const OperatorLogo = styled.img`
    width: 25px; // Or maybe 100% if you want it to fill its parent
    object-fit: cover; // Ensures the image isn't stretched or compressed
    border-radius: 50%; // Optional, if you want the image itself to be circular
`

const ScoreDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

`

const Score = styled.p`
border:1px solid white;
background-color: #3b3b3c;
border-radius:5px;
padding:3px 7px;
font-size:12px;
`

function MatchesAPI(){

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
                                <CompDiv>
                                    <CompLogo src={`https://${match.Competitors[0].Logo}`} />
                                    <CompName>
                                        {match.Competitors[0].Name}
                                    </CompName>
                                </CompDiv>
                                <ScoreDiv>
                                    <Score>
                                        { match.Score }
                                    </Score>
                                </ScoreDiv>
                                <CompDiv>
                                    <CompLogo src={`https://${match.Competitors[1].Logo}`} />
                                    <CompName>
                                        {match.Competitors[1].Name}
                                    </CompName>
                                </CompDiv>
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


export default MatchesAPI;