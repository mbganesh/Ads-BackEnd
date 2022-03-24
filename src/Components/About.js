import { Icon, Typography } from "@mui/material";
import React, { Fragment } from "react";
import background from "../img/3.jpg";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { styled } from "@mui/material/styles";
import Footer from "./Footer";


const subDiv = styled("div")(({ theme }) => ({
  display: "flex",
  width: "80%",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  margin: "50px",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

const SubDiv2 = styled('div')(({theme})=> ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15vh",
    [theme.breakpoints.down("md")]: {
        flexDirection:'column'
      },
}))

const SubDiv2A = styled('div')(({theme})=> ({
    width: "48%",
    [theme.breakpoints.down("md")]: {
        width: "95%"
      },
}))




function About() {
  return (

     <div style={{width:'100%' , height:'50%'}}>

     <iframe src="https://www.google.com/maps/d/embed?mid=1HMPyg1aNySptTAs_VL5Iz2gyXoBUOa3p&ehbc=2E312F" height="500px" style={{width:'100%' }} />


    <Footer/>

     </div>
     
  );
}

export default About;
