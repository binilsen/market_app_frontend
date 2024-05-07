"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { SESSION_LOGIN, SESSION_REG } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const authStore = useAuthStore((state) => state);
  const { loginUser } = authStore;

  const [sessionLogin, { data, loading, error }] = useMutation(SESSION_LOGIN, {
    onCompleted: (data) => {
      reset();
      loginUser(data["signInUser"]["user"], data["signInUser"]["token"]);
      router.replace("/dashboard");
    },
  });

  const submitHandler = (data) => sessionLogin({ variables: data });
  return (
    <Box padding={12}>
      <Stack sx={{ width: { md: "50%", xs: "100%", margin: "auto" } }}>
        <Typography variant="h3">Login</Typography>
        <hr />
        <Stack
          spacing={3}
          alignItems="center"
          component={"form"}
          onSubmit={handleSubmit(submitHandler)}
        >
          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register("email")}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            {...register("password")}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ width: { md: "50%", xs: "100%", margin: "auto" } }}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginPage;
