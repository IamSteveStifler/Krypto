import React, { useState, useEffect } from "react";
import Frame from "./Frame";
import { Row, Col, Container, Navbar } from "react-bootstrap";

const Api = () => {
    const [coinObj, setCoinObj] = useState([]);
    const [refresh, setRefresh] = useState(false);
  
    useEffect(() => {
      const url = "https://coinranking1.p.rapidapi.com/coins";
      
      fetch(url, {
        method: "GET",
            headers: {
              "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
              "X-RapidAPI-Key": "",
            },
      }).then((res)=>{
        res.json().then((obj)=>{
          console.log(obj);
          setCoinObj(obj.data.coins);
        })
      })
    }, [refresh]);
  
    return (
      <>
          <Navbar bg="dark" variant="dark">
            <Container fluid>
              <Navbar.Brand href="#home">  
                  <h1>KRYPTO</h1>
              </Navbar.Brand>
            </Container>
        </Navbar>
        <br />
        <Container>
          <Row>
        {
        
          coinObj.map( item =>{
              let data = {  
                name : item.name,
                price : item.price,
                img : item.iconUrl,
                volume : item["24hVolume"],
                symbol : item.symbol,
                marketcap : item.marketCap,
                high : item.sparkline[0],
                low : item.sparkline[26]
              }
              
              return( 
                  <Col className="m-5 border-0 shadow" ><Frame data = {data}/></Col>
              )
              
          })
        }
        </Row>
        </Container>
      
      </>
    );
}

export default Api