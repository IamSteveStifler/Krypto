import React, { useState, useEffect } from "react";
import Frame from "./Frame";
import { Row, Col, Container, Navbar } from "react-bootstrap";

const Api = () => {
    const refresh = false;
    let arr = []
    let[coinObj, setCoinObj] = useState(arr);

    useEffect(() => {
      const url = "https://coinranking1.p.rapidapi.com/coins";
      
      fetch(url, {
        method: "GET",
            headers: {
              "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
              "X-RapidAPI-Key": ""
            },
      }).then((res)=>{
        res.json().then((obj)=>{
          console.log(obj);
          setCoinObj(obj.data.coins);
          
        })
      })
    }, [refresh]);


    console.log(coinObj);

    // let data = {  
    //   name : coinObj[0].name,
    //   price : coinObj[0].price,
    //   img : coinObj[0].iconUrl,
    //   volume : coinObj[0]["24hVolume"],
    //   symbol : coinObj[0].symbol,
    //   marketcap : coinObj[0].marketCap,
    //   high : coinObj[0].sparkline[0],
    //   low : coinObj[0].sparkline[26]
    // }
  
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
              coinObj.map((ele) => (
                <Col className="m-5 border-0 shadow" ><Frame 
                  name = {ele.name}
                  price = {ele.price}
                  img = {ele.iconUrl}
                  volume = {ele["24hVolume"]}
                  symbol = {ele.symbol}
                  marketcap = {ele.marketCap}
                  high = {ele.sparkline[0]}
                  low = {ele.sparkline[24]}
                /></Col> 
              ))


            }

            {/* <Col className="m-5 border-0 shadow" ><Frame data = {data}/></Col> */}

        </Row>
        </Container>
      
      </>
    );
}

export default Api
