import Heading from "../ui/Heading";
import Meta from "../ui/Meta";
import Button from "../ui/button/button";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { IEmailPassword } from "@/store/user/user.interface";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Auth: FC = () => {
  const { isLoading } = useAuth();
  const { login, register } = useActions();
  const [type, setType] = useState<"login" | "register">("login");

  const {
    register: formRegister,
    handleSubmit,
    formState,
    reset,
  } = useForm<IEmailPassword>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === "login") {
      login(data);
    } else {
      register(data);
    }
    reset();
  };

  return (
    <Meta title="Auth">
      <Heading>Авторизация</Heading>
      <Button variant="pink">Регистарция</Button>
    </Meta>
  );
};

export default Auth;
