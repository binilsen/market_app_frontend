"use client";
import { CART } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

const CartPage = () => {
  const { data } = useQuery(CART);

  if (data?.cart)
    return (
      <Box>
        <Grid container>
          <Grid item md={8}>
            <Stack spacing={3}>
              {data &&
                data?.cart?.items.map((item, index) => (
                  <Card key={index}>
                    <CardHeader
                      sx={{ bgcolor: "primary.light" }}
                      title={item.seller.product.title}
                    />
                    <CardActionArea>
                      <Stack
                        p={3}
                        direction="row"
                        spacing={3}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Image
                          src={`http://localhost:3000/${item.seller.attachments[0].image}`}
                          width={50}
                          height={50}
                          alt={item.seller.product.title}
                        />
                        <Typography variant="overline" borderBottom={1}>
                          {item.seller.price}
                        </Typography>
                        <Typography variant="overline" borderBottom={1}>
                          Quantity: {item.seller.quantity}
                        </Typography>
                      </Stack>
                    </CardActionArea>
                    <CardActions
                      sx={{ alignItems: "center", gap: 3, bgcolor: "wheat" }}
                    >
                      <Chip label={item.seller.user.username} color="error" />
                      <Button variant="outlined">Remove</Button>
                      <Button variant="outlined">Quantity</Button>
                    </CardActions>
                  </Card>
                ))}
            </Stack>
          </Grid>
          <Grid item md={4} px={2}>
            <Typography variant="overline" fontSize={30} borderBottom={1}>
              cart Total
            </Typography>
            <Typography my={4}>
              Total: <Chip label={data?.cart.total} />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );

  return (
    <Typography variant="h4" p={4} textAlign="center">
      No items found.
    </Typography>
  );
};

export default CartPage;
