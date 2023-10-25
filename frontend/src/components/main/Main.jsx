import {
  Box,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const theme = useTheme();

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setMyData(newValue);
    }
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";

  const [myData, setMyData] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  const [clickedProduct, setClickedProduct] = useState();

  // if (data) {
  //   console.log(data.data);
  // }

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    console.log(error);
    return (
      <Container sx={{ py: 11, textAlign: "center" }}>
        <Typography variant="h6">{error.error}</Typography>
        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="Platform"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(223,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>

            <ToggleButton
              className="myButton"
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              value={menCategoryAPI}
              aria-label="centered"
            >
              MEN category
            </ToggleButton>

            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={womenCategoryAPI}
              aria-label="right aligned"
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <AnimatePresence>
          {data.data.map((item) => {
            return (
              <Card
                component={motion.section}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{duration:.6,type:"spring",stiffness:50}}
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: ".35s",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={`${item.attributes.productImg.data[0].attributes.url}`}
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" gutterBottom component="div">
                      {item.attributes.productTitle}
                    </Typography>

                    <Typography variant="subtitle" component="p">
                      {item.attributes.productPrice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen(), setClickedProduct(item);
                      //  console.log(item)
                    }}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    add to cart
                  </Button>

                  <Rating
                    name="read-only"
                    value={item.attributes.productRating}
                    precision={0.5}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
          </AnimatePresence>

        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { rotate: "180deg", color: "red", transition: ".3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
