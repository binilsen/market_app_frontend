import Categories from "@/components/Categories";
import { Box, Typography } from "@mui/material";

const CategoryPage = () => {
  return (
    <Box>
      <Typography variant="h4" borderBottom={1}>
        Categories
      </Typography>
      <Categories />
    </Box>
  );
};

export default CategoryPage;
