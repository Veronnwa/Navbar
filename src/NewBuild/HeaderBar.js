import React from "react";
import styled from "styled-components";
import {AiFillHome} from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from "../NewBuild/smart.svg";


export const HeaderBar = () => {
    return(
        <Container>
         <Wrapper>
             <Logo src={logo} />
             <Navigation>
                
                 <Nav>
                     <HomeIcon />
                     <span>Home</span>
                 </Nav>
                 <Nav>
                     <PersonIcon />
                     <span>Profile</span>
                 </Nav>
                 <Nav>
                     <SettingsIcon />
                     <span>Settings</span>

                 </Nav>
             </Navigation>
             <Button>log in</Button>
         </Wrapper>
        </Container>
    )

}

const Button = styled.button`
width: 100px;
height: 30px;
margin-right: 30px;
outline: none;
border: 0;
color: black;
border-radius: 3px;
transition: all 200ms linear;
transform: scale(1);
background-color: white;

:hover {
    cursor: pointer;
}
`;


const Nav = styled.div`
display: flex;
align-items: center;
margin: 0 10px;

.MuiSvgIcon-root {
    font-size: 15px;
    margin-right: 5px;
    color: rgb(225, 225, 225, 0.7);
    transform: all 400ms
}

span {
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: 1px;
   position: relative;


:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: white;
    opacity: 0;
    transition: all 400ms;
    transform-origin: center;
    

}
}

:hover {
    cursor: pointer;
    .MuiSvg-root:{
    color: rgb(225, 225, 225, 0.7);
    
    }
    span {
     :after {
         opacity: 1;
         transform: scale(1);
         
     }
  
    }
}
`;

const Container = styled.div`
width: 100%;
height: 80px;
background-color: #4e1a01;
color: white;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
font-family: Poppins;
`;
const Logo = styled.img`
width: 80px;
height: 50px;
object-fit: contain;
margin: 0 20px;
`;
const Navigation = styled.div`
display: flex;
flex: 1;

`;

