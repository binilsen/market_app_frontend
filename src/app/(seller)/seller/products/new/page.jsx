"use client";
import FileUploader from "@/components/FileUploader";
import { CREATE_PRODUCT } from "@/graphql/mutations";
import { CATEGORIES } from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Select,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const NewProductPage = () => {
  const quantity = Array(20).fill(1);
  const { register, reset, handleSubmit, control } = useForm({
    mode: "onChange",
    values: {
      quantity: 1,
      price_inr: 0,
    },
  });
  const { append } = useFieldArray({
    control: control,
    name: "attachments_attributes",
  });
  const [createProduct] = useMutation(CREATE_PRODUCT, {
    onCompleted: () => {
      reset();
    },
  });

  const { data } = useQuery(CATEGORIES);

  const submitHandler = (data) => createProduct({ variables: data });

  return (
    <Box maxWidth="lg" margin="auto">
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack
          py={1}
          direction="row"
          borderBottom={1}
          justifyContent="space-between"
        >
          <Typography variant="h6">Add new product</Typography>
          <Button variant="outlined" type="submit">
            Save
          </Button>
        </Stack>
        <Grid spacing={3} container justifyContent="center">
          <Grid item md={6} mt={3}>
            <FileUploader setFileData={append} />
          </Grid>
          <Grid item md={6} alignItems="center">
            <Stack py={3} spacing={3}>
              <TextField label="Title" {...register("title")} />
              <TextField label="Description" {...register("description")} />
              <TextField
                label="Price"
                {...register("price_inr", { valueAsNumber: true })}
              />
              <Controller
                control={control}
                name="quantity"
                render={({ field }) => (
                  <Select {...field}>
                    {quantity.map((x, index) => (
                      <MenuItem key={index} value={index + 1}>
                        {index + 1}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {data && (
                <Controller
                  control={control}
                  name="category_id"
                  defaultValue={data?.categories[0]?.id}
                  render={({ field }) => (
                    <Select {...field}>
                      {data?.categories?.map((x, index) => (
                        <MenuItem key={index} value={x.id}>
                          {x.title}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              )}
            </Stack>
          </Grid>
        </Grid>{" "}
      </form>
    </Box>
  );
};

export default NewProductPage;
