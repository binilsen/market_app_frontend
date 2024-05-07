"use client";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "@/graphql/queries";
import Link from "next/link";
const Categories = () => {
  const { data } = useQuery(CATEGORIES);
  if (data?.categories?.length == 0)
    return (
      <Typography variant="h5" p={4} textAlign="center">
        No categories found.
      </Typography>
    );
  return (
    <Grid container justifyContent="center">
      {data &&
        data.categories.map((cat) => (
          <Grid item md={3} p={2} key={cat.id}>
            <Card sx={{ bgcolor: "primary.light" }}>
              <CardActionArea
                sx={{ minHeight: "100px" }}
                LinkComponent={Link}
                href={`/categories/${cat.ulid}`}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    color="white"
                    fontSize="1.5rem"
                  >
                    {cat.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
export default Categories;
