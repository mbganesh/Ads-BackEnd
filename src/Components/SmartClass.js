import "animate.css/animate.min.css";
import React from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Divider,
  Slide,
  Fade,
} from "@mui/material";
import { AnimationOnScroll  } from 'react-animation-on-scroll';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import DoneIcon from "@mui/icons-material/Done";

import Highlights from "../img/Highlights.jpg";
import RecentProjects from "../img/RecentProjects.png";

import Footer from "./Footer";

export default function SmartClass() {

    const TIMEOUT = 1500

  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }));

  const IntroContent = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "67vw",
    },
  }));

  const ContentRoot = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  }));

  const ContentSub = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  }));

  const ContentItem = styled("div")(({ theme }) => ({
    width: "38%",
    padding: "1%",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  }));

  const ContentItemImage = styled("div")(({ theme }) => ({
    objectFit: "cover",
    width: "38%",
    padding: "1%",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "55%",
    },
  }));

  const arr = [
    "86 Smart Classrooms in Chennai Corporation Schools through ELCOT",
    "126 AdiDravidar Welfare Department schools through ELCOT",
    "15 KALLAR (most denotified backward class) schools in districts of Madurai, Theni and Dindugal through ELCOT",
    "25 Smart classrooms through Tirunelveli Corporations",
    "4 Smart classrooms through ELCOT by Coimbatore Corporations",
    "3 Smart classrooms through School Education Department",
  ];

  return (
    <div>
      <BreadcrumbStyle>
     <Fade in  timeout={TIMEOUT-600}>
     <Card>
          <CardContent>
            <Breadcrumbs
              style={{ display: "inline-block" }}
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                color="inherit"
                href="/"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {" "}
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home{" "}
              </Link>
              <Typography color="text.primary">Products</Typography>

              <Typography color="text.primary">Smart Class</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
     </Fade>
      </BreadcrumbStyle>

      <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
        <IntroContent>
        
        <Typography sx={{ fontSize: 16, textAlign: "justify" }}>
            {" "}
            <span style={{ fontWeight: "bold", color: "#00ADB5" }}>
              Netcom Computers
            </span>{" "}
            have installed more than 300 and above eSmart Class Room in
            Government and Government aided schools. We have already implemented
            the Smart Class Room Pilot Project in 3 Government Higher Secondary
            Schools namely, Maranthai School at Tirunelveli District,
            Mallankinaru School at Virudhunagar District and Thummanathy school
            at Nilgiris District. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.{" "}
          </Typography>
          
        </IntroContent>
      </div>
      </AnimationOnScroll>

      {/* highlight_Root */}
      <ContentRoot>
      <Fade direction="left" in timeout={TIMEOUT}>
        <ContentSub>
          {/* left */}
          <ContentItem>
         
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Highlights of Smart Class Room
            </Typography>
          
           
            <Divider />
            <Fade direction="right" in timeout={TIMEOUT}>
              <Typography sx={{ fontSize: 16, textAlign: "justify" }}>
                {" "}
                The content installed in the Server is Samacheer based syllabus
                for the Std. 6 to 12 with diagrams and animations for the easy
                understanding of students. The content has been developed and
                installed at schools in both Tamil and English language
                according to the medium of instruction required for the
                students. An excellent ambience with live voice and computer
                presentation through multimedia projector will enable the
                students to have 100% attention which converts the teaching
                process into more effective learning than the traditional class
                room teaching. The touch screen feature placed in KIOSK is
                loaded with the same content for students to enhance
                self-learning, which is one of the main feature in the E-Smart
                Class Room project. We have these animated contents for the
                schools under both the State and the CBSE syllabus, in English,
                Tamil and Hindi.{" "}
              </Typography>
            </Fade>
          </ContentItem>

          {/* right */}

          <ContentItemImage>
            <Fade direction="left" in timeout={TIMEOUT}>
              <img
                src={Highlights}
                style={{ objectFit: "contain", width: "100%", height: "70%" }}/>
            </Fade>
          </ContentItemImage>
        </ContentSub>
        </Fade>
      </ContentRoot>

      {/* ************************************************** */}

   
      <ContentRoot>
        <ContentSub>
          {/* left */}

          <ContentItemImage>
          <Fade direction="left" in timeout={TIMEOUT}>
            <img
              src={RecentProjects}
              style={{ objectFit: "contain", width: "100%", height: "70%" }}
            ></img>
             </Fade>
          </ContentItemImage>




          {/* right */}
          <ContentItem>
          <Fade in timeout={TIMEOUT}>
       
          <Typography
              variant="h6"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Our recent Projects include
            </Typography>
              </Fade>
            <Divider />
          
           {arr.map((text) => (
                <Fade direction="right" in timeout={TIMEOUT}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: "justify",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 1.5,
                }}
              >
                {" "}
                <DoneIcon style={{ color: "green" }} />
                {text}{" "}
              </Typography>
              </Fade>
            ))}
               <Fade direction="right" in timeout={TIMEOUT}>
            <Typography>
              We take full credit as we have successfully implemented these
              projects within the stipulated time frame by the Government for
              the beneficial of student community.
            </Typography>
            </Fade>

          </ContentItem>
        </ContentSub>




      </ContentRoot>


     
 <Footer/>

    
    </div>
  );
}
