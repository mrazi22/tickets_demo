import styled from 'styled-components'
import AdNavbar from './admin/AdminNav'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Card from './Card'

const AdminHome = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchdata = async () => {
      try{
        const response = await axios.get("http://localhost:4000/products/products");
        console.log(response.data.products);
        setProducts(response.data.products);
      }catch (e){
        console.error(e);
      }
     };
    fetchdata();

    
  }, []);

   
    
  return (
   <Container>

    <AdNavbar/> 
    <div style={gridListView}>
      {Array.isArray(products) && products.map((product) => (
        <Card key={product._id} {...product} />
      ))}
    </div>
  
  

   </Container>
  )
}

const Container = styled.div``;
const gridListView = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '10px',
}

export default AdminHome