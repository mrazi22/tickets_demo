import React from "react";
import styled from "styled-components";
import { useStateValue } from "../components/StateProvider";


import {TbTicket} from 'react-icons/tb'



const Card = ({id,imageURL,price,title,date}) => {
    const [{basket},dispatch] = useStateValue();

    const addToBasket = (e) => {
        e.preventDefault();
    
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id,
            title,
            price,
            imageURL,
            date
            

          },
        });
      };
  return (
    <Container>
        <Image>
           <img src={imageURL} alt='ocean'/>
        </Image>
        <Description>
            <h3>{title}</h3>
            <p>{date}</p>
           
            <p>{price}</p>

            
            <button onClick={addToBasket}>Add ticket to basket <TbTicket className='icon'/></button>

        </Description>
    </Container>
  )
  
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  margin-top: 250px;
  border-radius: 10px;
  padding: 0px 0px 10px 0px;
  z-index: 10;
`;


const Image = styled.div`
 width: 100%;
 height: 100%;
  margin: auto;
  img{
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
  }
`

const Description = styled.div`
width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
   h3 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  .icon{
    margin-bottom: -3px;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: red;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: orange;
    }
  }
`;




export default Card