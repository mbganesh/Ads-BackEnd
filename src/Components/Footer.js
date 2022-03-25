import "animate.css/animate.min.css";
import { Typography } from "@mui/material";
import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { styled } from "@mui/material/styles";

import ArrowIcon from "@mui/icons-material/ArrowForward";
import LocationIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import MapImg from "../img/3.jpg";

import ic_fb from "../img/socialmedia_icon/ic_f.svg";
import ic_instagram from "../img/socialmedia_icon/ic_i.svg";
import ic_linkedin from "../img/socialmedia_icon/ic_l.svg";
import ic_twitter from "../img/socialmedia_icon/ic_t.svg";
import ic_youtube from "../img/socialmedia_icon/ic_y.svg";
import ic_wa from "../img/socialmedia_icon/ic_w.svg";
import { useNavigate } from "react-router-dom";


const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${MapImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  
}));


const SubContainer = styled("div")(({theme}) => ({
  display: "flex",
  justifyContent: "flex-start",
  padding: "30px",
  flexWrap: "wrap",
  width:'80%',
  [theme.breakpoints.down('sm')]:{
    width:'90%'
  },
  [theme.breakpoints.between('sm','md')]:{
    width:'95%'
  },
}))

const BGColor = styled('div')(({theme})=>({
  backgroundColor:`rgb(6,68,32, .6)`,
  width:'100%',
  display:'flex',
  justifyContent:'center'

}))

const SubContainerItem = styled("div")(({theme})=>({
  width:'300px',
  margin:'15px',
}))

const SocialMediaLogo = styled("div")(({theme}) => ({
  border: "1px solid #010101",
  borderRadius: "5px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  margin: "5px",
  padding: "3px",
  width: "30px",
  height: "30px",

  '&:hover':{
    backgroundColor: "#5eba67",
    transition: "0.6s",
  },

  [theme.breakpoints.down('sm')]:{
    margin: "3px",
    padding: "2px",
  },



}))

const SiteMap = styled('div')(({theme})=> ({
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  color: "white",
  cursor:'pointer',
  '&:hover':{
    color:'#49FF00',
    transition:'0.5s',
  }
}))

export default function Footer() {

  const navigate  = useNavigate()

  const socialMedia = [
    {
      icon: ic_fb,
      link: "https://www.facebook.com/",
    },
    {
      icon: ic_instagram,
      link: "https://www.instagram.com/",
    },
    {
      icon: ic_linkedin,
      link: "https://www.linkedin.com/",
    },
    {
      icon: ic_twitter,
      link: "https://www.twitter.com/",
    },
    {
      icon: ic_youtube,
      link: "https://www.youtube.com/",
    },
    {
      icon: ic_wa,
      link: "https://api.whatsapp.com/send/?phone=%2B91**********&text&app_absent=0",
    },
  ];

  const siteMap = [
    {
      text: "Smart Class Room",
      link: "/scr",
    },
    {
      text: "Netcom Digital Content",
      link: "/ndc",
    },
    {
      text: "Language Lab",
      link: "/ll",
    },
    {
      text: "Call Soft",
      link: "/cs",
    },
    {
      text: "Assessment",
      link: "/a",
    },
    {
      text: "Skill Development & Training",
      link: "/sdt",
    },
    {
      text: "Kiosk Project",
      link: "/kp",
    }
  ];

  return (
    <MainContainer>

    <BGColor>
    <SubContainer>

{/* text with icons */}
<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
<SubContainerItem>
  <Typography variant="body1" style={{ color: "white" }}>
    Netcom Computers Pvt Ltd is an Information Technology based company
    in Education and Training.
  </Typography>

  
    {socialMedia.map((data) => (
     
      <SocialMediaLogo >
          <AnimationOnScroll animateOnce={true} animateIn="animate__lightSpeedInLeft">
        <img
          src={data.icon}
          height="30px"
          width="30px"
          onClick={() => window.open(data.link)}
        />
         </AnimationOnScroll>
      </SocialMediaLogo>
     
    ))}
  
  </SubContainerItem>
  </AnimationOnScroll>
  
{/* siteMap */}
<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
<SubContainerItem>
  <Typography
    variant="subtitle1"
    style={{ fontWeight: "bold",textDecoration:'underline' ,color: "white", whiteSpace: "nowrap" }}
  >
    SITE MAP
  </Typography>


    {siteMap.map((data) => (
      <SiteMap
        onClick={()=>{navigate(data.link)}}
      >
        <ArrowIcon />
        <Typography
          variant="subtitle2"
          style={{ whiteSpace: "nowrap" }}
        >
          {" "}
          {data.text}{" "}
        </Typography>
      </SiteMap>
    ))}
  
  </SubContainerItem>
  </AnimationOnScroll>
{/* HEAD OFFICE */}
<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
<SubContainerItem>
  <Typography
    variant="subtitle1"
    style={{ fontWeight: "bold", textDecoration:'underline',color: "white" }}
  >
    HEAD OFFICE
  </Typography>

  <div style={{ display: "flex", color: "white" }}>
    <LocationIcon style={{ marginRight: 15 }} />
    <Typography>
      {" "}
      No. 1/1, Nathan Street, Adikalapuram, Murugankurichi,
      Palayamkottai, Tirunelveli - 02
    </Typography>
  </div>

  <div style={{ display: "flex", color: "white" }}>
    <MailIcon style={{ marginRight: 15 }} />
    <Typography style={{cursor:'pointer'}} onClick={()=>{window.open('mailto:career@ncpli.com')}}>career@ncpli.com</Typography>
    {/* mailto:xyz@yourapplicationdomain.com?subject=Me&body=Hello! */}
  </div>

  <div style={{ display: "flex", color: "white" }}>
    <PhoneIcon style={{ marginRight: 15 }} />
    <Typography style={{cursor:'pointer'}} onClick={()=>{window.open('tel:04622585979')}}> 0462 - 2585979 </Typography>
  </div>
</SubContainerItem>
</AnimationOnScroll>

{/* CORPORATE OFFICE */}
<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
<SubContainerItem>
  <Typography
    variant="subtitle1"
    style={{ fontWeight: "bold",textDecoration:'underline' , color: "white" }}
  >
    CORPORATE OFFICE
  </Typography>

  <div style={{ display: "flex", color: "white" }}>
    <LocationIcon style={{ marginRight: 15 }} />
    <Typography>
      No. 5/3, Second Floor, Kush Kumar Road, Nungambakkam, Chennai -
      600 034.
    </Typography>
  </div>

  <div style={{ display: "flex", color: "white" }}>
    <MailIcon style={{ marginRight: 15 }} />
    <Typography style={{cursor:'pointer'}} onClick={()=>{window.open('mailto:career@ncpli.com')}}>career@ncpli.com</Typography>
  </div>

  <div style={{ display: "flex", color: "white" }}>
    <PhoneIcon style={{ marginRight: 15 }} />
    <Typography style={{cursor:'pointer'}} onClick={()=>{window.open('tel:04442125369')}}> 044 - 42125369</Typography>
  </div>
</SubContainerItem>
</AnimationOnScroll>

</SubContainer>
    </BGColor>

      {/* <ColoredLine color={"white"} /> */}

      <div
        style={{ textAlign: "center", backgroundColor:`rgb(6,68,32, .8)`, width: "100%" }}
      >
        <p
          style={{
            color: "white",
            margin: "auto",
            fontSize: "12px",
            padding: 10,
          }}
        >
          @{new Date().getFullYear()} All rights reserved
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            {" | "}
            Netcom Computers Pvt Ltd
          </span>
        </p>
      </div>





    </MainContainer>
  );
}




// ********* Useful sites ***********// 

/**
 * animate__fadeInUp
 * 
 * https://animate.style/
 * https://github.com/dbramwell/react-animate-on-scroll
 * https://www.npmjs.com/package/react-animation-on-scroll
 */