import React, {useState} from "react";
import styled from "styled-components";
import {BsGlobe, BsPerson} from "react-icons/bs";
import {FaBars, FaTimes} from "react-icons/fa";


const Header = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
       setToggle(!toggle)
    }
  return(
    <Div>
        <Wrapper toggle={toggle}>
            <Left>
                <img src= "/freshwork-logo.png" alt="logo"/>
                <Nav>Products</Nav>
                <Nav>Platform</Nav>
                <Nav>Resources</Nav>

            </Left>
            <Right>
                <Nav>Demo</Nav>
                <Nav>Pricing</Nav>
                <BsGlobe/>
                <BsPerson/>
                <Button>Free Trial</Button>
            </Right>
            <BurgerHold onClick={handleToggle}>
                 { toggle ? <FaTimes/> : <FaBars/>}
            </BurgerHold>
        </Wrapper>
    </Div>
  )
};

export default Header;

const Div = styled.div`
color: black;
// background-color: red;
width: 100%;
height: 60px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    display: flex;
    width: 100%;
    // position: absolute;
    background-color: pink;
    height: 10vh;
    transition:all ease 1s;
    justify-content: space-evenly;
    // margin-top: 400px;
    z-index: 500;
 }
`;

const Wrapper = styled.div`
// background-color: aqua;
width: 80%;
height: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
// background-color: yellow;
width: 40%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

img{
    width: 120px;
    height: 30px;
    // background-color: blue;
}

@media screen and (max-width: 768px){
    width: 100%;
    // background-color: dimgrey;
    height: 10vh;
    transition:all ease 1s;
    display: flex;
    justify-content: space-evenly;
 }
`;


const Right = styled.div`
// background-color: green;
width: 35%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
    position: absolute;
    background-color: red;
    height: 50vh;
    transition:all ease 1s;
    justify-content: space-evenly;
    left: ${({toggle}) => (toggle? 0 : "-100%")};
    margin-top: 400px;
    z-index: 500;
 }
`;

const Nav = styled.div`
:hover{
    color: purple;
    cursor: pointer;
    transition: all 1s;
    text-decoration: underline;
}   
`;

const Button = styled.button`
background-color: purple;
color: white;
// width: 100px;
// height: 45px;
padding: 0.5rem 1.2rem;
border-radius: 5px;
border: 1px solid purple;
font-size: 20px;
font-weight: bold;
cursor: pointer;
transition: all 1s;
:hover{
    background-color: transparent;
    cursor: pointer;
    transition: all 1s;
    text-decoration: none;
    border: 1px solid purple;
    color: purple;
}   
`;

const BurgerHold = styled.div`
   /* height: 100%;
   width: 5%; */
   background-color: beige;
   display: none;
   z-index: 1;

   @media screen and (max-width: 768px){
      display: flex;
      /* color:white; */
   }
`;