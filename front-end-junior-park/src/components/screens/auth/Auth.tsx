import { emailValid } from "./valid-email";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import Meta from "@/components/ui/Meta";
import Button from "@/components/ui/button/button";
import Field from "@/components/ui/input/Field";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { IEmailPassword } from "@/store/user/user.interface";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Auth: FC = () => {
  useAuthRedirect();
  const { isLoading } = useAuth();
  const { login, register } = useActions();
  const [type, setType] = useState<"Авторизация" | "Регистрация">(
    "Авторизация"
  );

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === "Авторизация") {
      login(data);
    } else {
      register(data);
    }
    reset();
  };

  const stale = () => {};

  return (
    <Meta title="Auth">
      <section className="flex h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white shadow-sm p-8 m-auto"
        >
          <Heading className="capitalize text-center mb-4">{type}</Heading>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                {...formRegister("email", {
                  required: "Введите электронную почту",
                  pattern: {
                    value: emailValid,
                    message:
                      "Пожалуйста введите действительный адрес электронной почты",
                  },
                })}
                placeholder="E-mail"
                error={errors.email?.message}
              />
              <Field
                {...formRegister("password", {
                  required: "Введите пароль",
                  minLength: {
                    value: 6,
                    message: `Минимально допустимое количество символов: 6.`,
                  },
                })}
                placeholder="Пароль"
                type="password"
                error={errors.password?.message}
              />

              <Button type="button" variant="pink">
                Вход/регистрация
              </Button>
              <button
                className="rounded-x1 font-medium shadow-md px-10 py-2
        text-white bg-secondary"
                onClick={() =>
                  setType(
                    type === "Авторизация" ? "Регистрация" : "Авторизация"
                  )
                }
              >
                {type === "Авторизация" ? "Регистрация" : "Авторизация"}
              </button>
            </>
          )}
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
