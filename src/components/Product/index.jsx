import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import {
  AddShoppingCart,
  ArrowBackIos,
  ArrowForwardIos,
  Favorite,
} from "@mui/icons-material";
import "./index.css";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "@/graphql/mutations";

const Product = ({ product }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const [addProduct] = useMutation(ADD_PRODUCT, {
    variables: { products_user_id: product?.lowestPrice?.id },
  });

  return (
    <Card elevation={12} sx={{ borderRadius: 4 }}>
      <CardContent>
        <Stack spacing={3}>
          {/* Images */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={5}
            position="relative"
            borderColor="error.main"
          >
            {emblaApi && (
              <IconButton
              size="small"
                color="white"
                onClick={() => emblaApi.scrollPrev()}
                sx={{
                  position: "absolute",
                  zIndex: 999,
                  left: 10,
                  bgcolor: "primary.light",
                }}
              >
                <ArrowBackIos />
              </IconButton>
            )}
            <div className="embla" ref={emblaRef} style={{ flexGrow: 2 }}>
              <div className="embla__container">
                {product &&
                  product.sellers[0]?.attachments.map((file, index) => (
                    <div key={index} className="embla__slide">
                      <Image
                        src={`http://localhost:3000/${file.image}`}
                        alt={product.title}
                        sizes="100vw"
                        width={300}
                        height={300}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: 5,
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>
            {emblaApi && (
              <IconButton
              size="small"
                color="white"
                onClick={() => emblaApi.scrollNext()}
                sx={{
                  position: "absolute",
                  zIndex: 999,
                  right: 10,
                  bgcolor: "primary.light",
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            )}
          </Stack>
          <Typography variant="title1" fontSize={25}>
            {product.title}
          </Typography>
          <Stack spacing={2} alignItems="start">
            <Chip
              color="primary"
              label={
                <Typography variant="title2" fontSize={15} fontWeight="bolder">
                  Price: {product.lowestPrice.price}
                </Typography>
              }
            />
            <Chip
              color="secondary"
              label={
                <Typography variant="title2" fontSize={15} fontWeight="bolder">
                  Quantity: {product.availableQuantity}
                </Typography>
              }
            />
            <Chip
              label={
                <Typography variant="title2" fontSize={15} fontWeight="bolder">
                  Sellers: {product.sellers.length}
                </Typography>
              }
            />
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          width="100%"
          p={2}
          spacing={3}
          justifyContent="center"
        >
          <Button
            variant="contained"
            startIcon={<AddShoppingCart />}
            onClick={addProduct}
          >
            Add
          </Button>
          <Button variant="contained" color="error" startIcon={<Favorite />}>
            Wishlist
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Product;
