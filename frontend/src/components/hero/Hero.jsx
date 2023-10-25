import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";
import IconSection from "./IconSection";

const mySlider = [
  { text: "MEN", Link: "./images/banner-15.jpg" },
  { text: "WOMEN", Link: "./images/banner-25.jpg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>

      <Box sx={{pt:2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.Link} className="parent-slider">
                <img src={item.Link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#222" }}>
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h5">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#D23F57"} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43,52,69,.1)",
                      },
                      color: "#fff",
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43,52,69,.1",
                      borderRadius: "1px",
                    }}
                    variant="contained"
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="./images/banner-17.jpg" alt="" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#283445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", fontSize: "16px", mt: 1 }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", fontSize: "16px" }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="./images/banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                sx={{ color: "#283445", fontSize: "18px", fontWeight: 300 }}
                variant="caption"
              >
                GAMING 4K
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#283445", lineHeight: "16px", mt: 1 }}
              >
                DESKTOPS &
              </Typography>
              <Typography variant="h6" sx={{ color: "#283445" }}>
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSection />
      
    </Container>
  );
};

export default Hero;

