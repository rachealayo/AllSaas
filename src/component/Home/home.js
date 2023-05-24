import React from "react";
import styled from "styled-components";
import Card from "./Card"


const Home = () => {
  return(
    <Container>
      <Wrapper>
       <Left>
         <img src ="/mess.png" alt='hero'/>
       </Left>
       <Right>
         <H2>FRESHWORK PRODUCTS</H2>
         <H1>All SaaS, no bloat.</H1>
         <Div>
           <Card title='Freshservice' description='Modernize IT service and operations with an intuitive, completely integrated IT'/>
           <Card title='Freshchat' description='Have more meaningful conversations,across every channel,
           with evry customer.'/>
         </Div>
         <Div>
           <Card title='Freshdesk' description='Scale faster with a unified, intelligent customer support platform'/>
           <Card title='Freshsales' description='Sell smarter and faster while leaving time-consuming tasks to automation'/>
         </Div>
         <Div>
           <Card title='Freshmarketer' description='Attract, engage, and nurture your customers through the engagement channes they love.'/>
           <Card title='All products and trials' description=''/>
         </Div>
              
          {/* <Card/> */}
        </Right>
      </Wrapper>
   </Container>
 )
};
  
export default Home;


const Container = styled.div`
height: 90vh;
width: 100%;
background-color: lightblue;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
  display: flex;
  flex-direction: row;
  width: 100%;
  // background-color: dimgrey;
  height: 130vh;
  transition:all ease 1s;
  display: flex;
  justify-content: space-evenly;
}
`;

const Wrapper = styled.div`
width: 80%;
height: 90vh;
display: flex;
justify-content: space-between;
align-items: center;
// background-color: pink;

@media screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
  width: 100%;
  // background-color: dimgrey;
  height: 90vh;
  transition:all ease 1s;
  display: flex;
  justify-content: space-evenly;
}
`;

const Left = styled.div`
width: 35%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;

img{
    height: 100%;
    width: 100%;
}

@media screen and (max-width: 768px){
  width: 80%;
  height: 200px;
  transition:all ease 1s;
  // margin-top: 200px;
}
`;

const Right = styled.div`
width: 60%;
height: 100%;
// background-color: yellow;

@media screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
  width: 100%;
  // background-color: dimgrey;
  height: 90vh;
  transition:all ease 1s;
  display: flex;
  justify-content: space-evenly;
}
`;

const Div = styled.div`
width: 100%;
height: 140px;
display: flex;
justify-content: space-between;
align-items: center;
// background-color: red;

`;

const H2 = styled.div`
font-size: 15px;
margin-top: 9px;
`;

const H1 = styled.div`
font-size: 50px;
font-weight: bold;
margin-top: 15px;
`;