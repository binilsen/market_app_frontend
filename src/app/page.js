
import { Divider, Stack } from "@mui/material";
import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <Stack spacing={3}>
      <Categories />
      <Divider />
      <ProductList  />
    </Stack>
  );
}
