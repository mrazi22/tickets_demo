import React from 'react'
import CurrencyFormat from 'react-currency-format'
import styled from 'styled-components'
import {getBasketTotal} from "./Reducer"
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom'
import AdNavbar from './admin/AdminNav'
import axios from 'axios'
const Payment = () => {
  const [{ address, basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate()

    function  payment () {
      try {
        axios.post("http://localhost:4000/order/addorder", {
          basket: basket,
          price: getBasketTotal(basket),
          email: user?.email,
         
        });
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/successful");
      } catch (error) {
        console.log(error);
      }

      
    }
  return (
    <Container>
    <AdNavbar />

    <Main>
      <ReviewContainer>
        <h2>Review Your Order</h2>

        <AddressContainer>
          <h5>Shipping Address</h5>

          <div>
            <p>Full Name: {address.name}</p>
            <p>Country: {address.country}</p>
           
            <p>
              Email: {address.email}
            </p>

            <p>Phone: {address.phone}</p>
          </div>
        </AddressContainer>

      

        <OrderContainer>
          <h5>Your Order:Can't  wait to see you there😁</h5>

          <div>
            {basket?.map((product) => (
              <Product>
                <Image>
                  <img src={product.imageURL} alt="" />
                </Image>
                <Description>
                  <h4>{product.title}</h4>

                  <p>ksh. {product.price}</p>
                </Description>
              </Product>
            ))}
          </div>
        </OrderContainer>
      </ReviewContainer>
      <Subtotal>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ( {basket.length} tickets ) : <strong> {value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType="text"
          thousandSeparator={true}
          prefix={"ksh. "}
        />

        <button onClick={payment} >Place Order</button>
      </Subtotal>
    </Main>
  </Container>
  )
}
const Container = styled.div`
  width: 100%;

  max-width: 1400px;
  background-color: rgb(234, 237, 237);
`;

const Main = styled.div`
  padding: 15px;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewContainer = styled.div`
  background-color: #fff;
  flex: 0.7;
  padding: 15px;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 10px;
    margin-left: 10px;

    p {
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;

const PaymentContainer = styled.div`
  margin-top: 15px;

  div {
    margin-top: 15px;
    margin-left: 15px;

    p {
      font-size: 14px;
    }
  }
`;

const OrderContainer = styled.div`
  margin-top: 30px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;
  img {
    width: 80%;
    padding:5px

  }
`;
const Description = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;
    cursor: pointer;

    border-radius: 8px;

    &:hover {
      background-color: orange;
}

  }
`;

export default Payment