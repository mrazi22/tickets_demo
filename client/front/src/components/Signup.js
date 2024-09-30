import React,{useState} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {TbMovie,TbTicket} from 'react-icons/tb'

const Signup = () => {
   const navigate = useNavigate()
   const [fullName,setFullName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [userType,setUserType]  = useState('')
   const [secretKey, setSecretKey] = useState("");

   const handleSubmit = (e) => {
     if(userType==="admin" && secretKey !== "admin123"){
       e.preventDefault();
       alert("invalid admin")

     }else{
       e.preventDefault();
       console.log(fullName,email,password)
       fetch("http://localhost:4000/user/register", {
         method: "POST",
         crossDomain: true,
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
           fullName,
           email,
           password,
           userType
         }),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data, "userRegister");
           alert("Registered successfully");
           navigate("/");
         })
         .catch((err) => {
           console.log(err);
         });
      }
   }
  return (
    <Container>
    <Logo>
    <h3>Start your journey here <TbMovie className='icon'/> </h3>
    </Logo>
    <FormContainer>
      <h3>Sign-Up <TbTicket className='icona'/></h3>
      <InputContainer>
      

      <p>Register as</p>
      
      <input  
        type='text'
        name='user'
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        />
       
     
      </InputContainer>
        
        {userType==="admin" ? (
     
          <InputContainer>
            <p>secretKey</p>
            <input
              type="text"
              placeholder="*****"
              onChange={(e) => setSecretKey(e.target.value)}
              value={secretKey}
            />
          </InputContainer>
        ) : null}
      
      <InputContainer>
        <p>FullName</p>
        <input
          type="text"
          placeholder="John Smith"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
         
        />
      </InputContainer>
      <InputContainer>
        <p>Email</p>
        <input
          type="email"
          placeholder="example@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
         
        />
      </InputContainer>
      <InputContainer>
        <p>Password</p>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          
        />
      </InputContainer>

      

      <SignUpButton onClick={handleSubmit}  >Create Account </SignUpButton>
      <LoginButton onClick={() => navigate("/")}>
      Back to Login
    </LoginButton>
    </FormContainer>

    
  </Container>
  )
  
}
const Container = styled.div`
width: 40%;
min-width: 450px;
height: fit-content;
padding: 15px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`;

const Logo = styled.div`
margin-bottom: 20px;


.icon{
margin-bottom: -6px;}
`;
const FormContainer = styled.form`
border: 1px solid lightgray;
width: 85%;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;

h3 {
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  align-self: flex-start;

  margin-bottom: 10px;
}

.icona{
  margin-bottom: -6px;
}
`;
const InputContainer = styled.div`
width: 100%;
padding: 10px;

p {
  font-size: 14px;
  font-weight: 600;
}

input {
  width: 95%;
  height: 33px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-top: 5px;

  &:hover {
    border: 1px solid orange;
  }
}
`;
const SignUpButton = styled.button`
width: 70%;
height: 35px;
font-size: 12px;
margin-top: 20px;
border-radius: 5px;
border:none;
outline: none;
cursor: pointer;

&:hover {
  background-color: #dfdfdf;
  border: 1px solid gray;
}
`;

const LoginButton = styled.button`
width: 70%;
height: 35px;
font-size: 12px;
margin-top: 20px;
background-color: #FF0000;
color: white;
border-radius: 5px;
border:none;
outline: none;
cursor: pointer;

&:hover {
  background-color: orange;
  
}
`

  
export default Signup