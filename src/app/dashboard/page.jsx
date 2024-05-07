"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <Box>
      <Card>
        <CardHeader
          title={
            <Typography variant="h5" borderBottom={1}>
              Seller Panel
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Stack direction="row" gap={3} justifyContent="space-between">
            <Button
              size="large"
              sx={{ fontSize: "1.5rem" }}
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href="/seller/products/new"
            >
              New Product
            </Button>
            <Button
              size="large"
              sx={{ fontSize: "1.5rem" }}
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href="/seller/products"
            >
              Existing Listing
            </Button>
            <Button
              size="large"
              sx={{ fontSize: "1.5rem" }}
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href="/seller/orders"
            >
              Orders
            </Button>
            <Button
              size="large"
              sx={{ fontSize: "1.5rem" }}
              variant="contained"
              color="primary"
              href="/seller/orders?status=shipped"
            >
              Shipped
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardPage;
