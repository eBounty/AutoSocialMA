import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { useRouter } from "expo-router";
const HomeScreen = () => {
  const router = useRouter();

  return (
    <Background>
      <Logo />
      <Header>Login Or Sign Up</Header>

      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button mode="contained" onPress={() => router.navigate("LoginScreen")}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => router.navigate("RegisterScreen")}>
        Sign Up
      </Button>
    </Background>
  );
};

export default memo(HomeScreen);
