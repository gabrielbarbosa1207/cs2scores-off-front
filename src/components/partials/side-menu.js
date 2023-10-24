import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./side-menu.css"
import CS2Logo from "../images/logo-cs2-scores-main.png"
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"
import OddsIcon from "../images/icon-odds.svg"
import MatchesIcon from "../images/icon-matches.svg"
import TournamentsIcon from "../images/icon-tournaments.svg"


const GlobalStyle = createGlobalStyle`
    a{
        text-decoration:none
    }
`

const LogoContainer = styled.div`
    padding:20px;
    background-color: #252525;
    border-radius:5px;
    margin:15px auto;
`

const Logo = styled.img`
    width:125px;
    display:block;
    margin:auto;
`

const OptionsContainer = styled.div`
    background-color: #A60808;
    display: block;
    color:white;
    border-radius:5px;
    padding: 16px 8px;
`
const MenuItem = styled.div`
    color:white;
    display:flex;
    flex-direction:row;
    text-decoration: none;
    gap: 5px;
`

const Item = styled.p`
    text-decoration:none;
    margin:12px 0px;
`

class SideMenu extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
        isOpen: window.innerWidth > 768  // Set this breakpoint according to your needs
    };
    }

    componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();  // Call the function initially to set the state based on the initial window size
    }

    componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = () => {
    this.setState({ isOpen: window.innerWidth > 768 });
    };
    
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu isOpen={this.state.isOpen} noOverlay width={'250px'} >
        <GlobalStyle />
        <a id="home" className="menu-item" href="/">
            <LogoContainer>
                <Logo src={CS2Logo} alt='cs2-scores logo' />
            </LogoContainer>
        </a>
        <OptionsContainer>
            <a id="odds" className="menu-item" href="/odds">
                <MenuItem>
                    <img src={OddsIcon}  alt='nav icon'/>
                    <Item>
                        Odds
                    </Item>
                </MenuItem>
            </a>
            <a id="matches" className="menu-item" href="/matches">
                <MenuItem>
                    <img src={MatchesIcon}  alt='nav icon' />
                    <Item>
                        Matches
                    </Item>
                </MenuItem>
            </a>

            <a id="tournaments" className="menu-item" href="/tournaments">
                <MenuItem>
                    <img src={TournamentsIcon}  alt='nav icon' />
                    <Item>
                        Tournaments
                    </Item>
                </MenuItem>
            </a>
        </OptionsContainer>
      </Menu>
    );
  }
}

export default SideMenu;