import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import { Button, Typography } from "@mui/material";
import { Styled } from "@mui/material/styles";

import Banner from "../img/Banner.svg";

export default function Testimonial() {

  const TestimonialData = [
    {
      title: "Durai",
      body: "You guys do great work. I would recommend your services any day of the week",
    },
    {
      title: "Steven",
      body: "Thanks for coming out fast! I am so happy the problem was resolved so quickly-your techs are so wonderful!",
    },
    {
      title: "Soma",
      body: "Great service at a great price!",
    },
    {
      title: "Ganesh",
      body: "All you guys are awesome! Thanks for always helping me. Always very nice and friendly."

    },
  ];

  return (
    <>

      <div style={{display:'flex' , justifyContent:'center' , margin:'10px'}}>

      <Slider
        dots={true}
        infinite={true}
        speed={1000}
        autoplay
        slidesToScroll={1}
        arrows={true}
        slidesToShow={1}
        style={{  width: "70%" , border:'1px solid green'}}
      >

        {TestimonialData.map((data,index) => (
          <div key={index} style={{ margin: "10px", }}>
            <Typography style={{padding:'10px'}} variant="h6"> {data.title} </Typography>

            <div style={{ display: "flex" , justifyContent:'center' , margin:'10px' }}>
              
              <Typography variant="subtitle1" style={{textAlign:'justify'}}> <span><QuoteIcon style={{ transform: `rotate(180deg)` , color:'green' }} /></span> {data.body} <span>   <QuoteIcon style={{color:'green'}} /> </span> </Typography>
            
            </div>
            
          </div>
        ))}

      </Slider>

    </div>
    </>
  );
}
