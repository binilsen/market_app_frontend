"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { SESSION_REG } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [sessionReg, { data, loading, error }] = useMutation(SESSION_REG, {
    onCompleted: () => {
      reset();
      router.push("/login");
    },
  });

  const submitHandler = (data) => sessionReg({ variables: data });
  return (
    <Box padding={12}>
      <Stack sx={{ width: { md: "50%", xs: "100%", margin: "auto" } }}>
        <Typography variant="h3">Register</Typography>
        <hr />
        <Stack
          spacing={3}
          alignItems="center"
          component={"form"}
          onSubmit={handleSubmit(submitHandler)}
        >
          <TextField label="First Name" fullWidth {...register("firstName")} />
          <TextField label="Last Name" fullWidth {...register("lastName")} />
          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register("email")}
          />
          <TextField label="Phone" fullWidth {...register("phone")} />
          <TextField
            label="Password"
            type="password"
            fullWidth
            {...register("password")}
          />
          <TextField
            label="Confirm Password"
            fullWidth
            {...register("password_confirmation")}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ width: { md: "50%", xs: "100%", margin: "auto" } }}
          >
            Register
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RegisterPage;
