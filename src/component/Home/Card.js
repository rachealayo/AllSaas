import React from "react";
import styled from "styled-components"
import {AiOutlineArrowRight} from 'react-icons/ai'

const Card = ({title, description}) => {
    return(
     <Container>
         <Wrapper>
              <Div>
                <Title>{title}</Title>
                <AiOutlineArrowRight/>
              </Div>
             <Desc>{description}</Desc>
         </Wrapper>
     </Container>
    )
  };
  
export default Card;

const Container = styled.div`
height: 110px;
width: 48%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem 0;
border-radius: 0.6rem;

// :hover{
//   height: 150px;
//   width: 48%;
//   background-color: transparent;
// }

@media screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
  width: 100%;

  transition:all ease 1s;
  display: flex;
  justify-content: space-evenly;
  margin: 5px;
}
`;

const Wrapper = styled.div`
height: 100%;
width: 90%;
// background-color: purple;
`;

const Div = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px;
`;
const Desc = styled.div`
color: grey;
`;
const Title = styled.div`
font-weight: bold;
// font-family: san-seriff;
`;