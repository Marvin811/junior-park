import { emailValid } from "./valid-email";
import Heading from "@/components/ui/Heading";
import Meta from "@/components/ui/Meta";
import Button from "@/components/ui/button/button";
import Field from "@/components/ui/input/Field";
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
    formState: { errors },
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
      <section className="flex h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white shadow-sm p-8 m-auto"
        >
          <Heading className="capitalize text-center mb-4">Авторизация</Heading>
          <Field
            {...formRegister("email", {
              required: "Введите электронную почту",
              pattern: {
                value: emailValid,
                message: "Пожалуйста введите действительный адрес электронной почты",
              },
            })}
            placeholder="E-mail"
            error={errors.email?.message}
          />
          <Field
            {...formRegister("password", {
              required: "Введите пароль",
              minLength: { value: 6, message: `Минимально допустимое количество символов: 6.}.` },
            })}
            placeholder="Пароль"
            type="password"
            error={errors.password?.message}
          />
          <Button variant="pink">Вход</Button>
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
