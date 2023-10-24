import styled from "styled-components";
import OddsApi from "./api/odds/api-odds";
import SideMenu from "../../../components/partials/side-menu";
import Background from "../../../components/images/bg-vlt.svg"


const Headline = styled.h1`
  text-align:left;
  font-size:22px;
  text-shadow:0px 0px 5px black;
 
  @media (min-width:780px){
    font-size:32px
  }
`

const TitleContainer = styled.div`
    height: 120px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 780px) {
        width: 100%;
        margin: auto;
        text-align: center;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


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
        width: 300px;
        display:block;
    }
`;

const SideBar = styled.div`
    display: none;

    @media (min-width:780px){
        display: block;
        width: 305px;
    }
`;



const DataSection = styled.div`
    display:flex;
    position:relative;
`

const Iframe = styled.iframe`
    width:290px;
    height:600px;
    margin: 5px auto;
    overflow-x:hidden;
    display:block;
    border:1px solid #1c1c1c;
`


function ApiSection(){

    return(
        <ApiSection>
        <SideContainer>
            <SideMenu />
        </SideContainer>
        <ContentSection>                    
            <TitleContainer bgImage={Background}>
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
    )
}

export default ApiSection