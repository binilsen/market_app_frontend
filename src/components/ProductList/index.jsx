"use client";
import { PRODUCTS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Product from "../Product";
import { Grid, Typography } from "@mui/material";

const ProductList = ({ id }) => {
  const { data } = useQuery(PRODUCTS, {
    variables: { categoryId: id ? id : "" },
  });

  if (data?.products?.length == 0)
    return <Typography variant="h5" p={4} textAlign="center">No product found.</Typography>;
  return (
    <Grid container justifyContent="center">
      {data &&
        data?.products?.map((product) => (
          <Grid item xs={12} sm={12} md={12} lg={3} p={2} key={product.ulid}>
            <Product product={product} />
          </Grid>
        ))}
    </Grid>
  );
};
export default ProductList;
