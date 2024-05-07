"use client"
import ProductList from "@/components/ProductList";
import { Typography } from "@mui/material";

const Category = ({ params: { slug } }) => {
  const category = slug;
  return (
    <>
    <Typography variant="h4" borderBottom={1}>Products</Typography>
      <ProductList id={category} />
    </>
  );
};

export default Category;
