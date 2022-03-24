import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Carousel from "react-simply-carousel";
import { Card, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";



export default function OurClients() {

  
const TypographyStyle1  = styled('div')(({ theme }) => ({
  display: "flex", justifyContent: "center", 
   [theme.breakpoints.down('md')]: {
       width: "92vw"
  },
  [theme.breakpoints.up('md')]: {
    width: "45vw"
  },
  [theme.breakpoints.up('lg')]: {
       width: "67vw"
  },

}));

  const [activeSlide, setActiveSlide] = useState(0);

  const clientsLogo = [
    "https://owlcarousel2.github.io/OwlCarousel2/assets/img/feature-module.png",
    "https://owlcarousel2.github.io/OwlCarousel2/assets/img/feature-options.png",
    "https://static.javatpoint.com/tutorial/spss/images/spss.png",
    "https://static.javatpoint.com/tutorial/splunk/images/splunk.png",
    "https://static.javatpoint.com/tutorial/tumblr/images/tumblr-tutorial.png",
    "https://static.javatpoint.com/tutorial/reactjs/images/reactjs-tutorial.png",
    "https://static.javatpoint.com/tutorial/regex/images/regex-tutorial.png",
    "https://static.javatpoint.com/tutorial/r/images/r-tutorial.png",
    "https://static.javatpoint.com/tutorial/python-pillow/images/python-pillow.png",
    "https://static.javatpoint.com/reasoning/images/reasoning.png",
    "https://static.javatpoint.com/tutorial/selenium/images/selenium-tutorial.jpg",
    "https://static.javatpoint.com/tutorial/unity/images/unity.png",
    "https://owlcarousel2.github.io/OwlCarousel2/assets/img/feature-zombie.png"
  ]



  return (
  <div>
        <div style={{position:'absolute' , bottom:0 , left:0,right:0 ,}}>
        <Footer/>
    </div>
  </div>
  )
}
