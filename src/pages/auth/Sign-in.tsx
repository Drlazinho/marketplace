import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import mail from "@/assets/icon/mail-02.svg";
import access from "@/assets/icon/access.svg";
import { CustomButton } from "@/components/custom-button";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import Cookies from "js-cookie";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const navigate = useNavigate();

  function goSignUp() {
    navigate("/sign-up");
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  const handleSignIn = async ({ email, password }: SignInForm) => {
    try {
      const response = await authenticate({ email, password });
      sessionStorage.setItem("auth", response.accessToken)

      toast.success("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Credenciais Inválidas", {
        description: error?.response?.data?.message,
        action: {
          label: "Tentar Novamente",
          onClick: () => handleSignIn({ email, password }),
        },
      });
    }
  };

  return (
    <>
      <Helmet title="Sign-in" />
      <form
        onSubmit={handleSubmit(handleSignIn)}
        action=""
        className="bg-shape-white h-4/5 px-20 py-16 mt-10 m-6 rounded-3xl flex flex-col"
      >
        <div>
          <h1 className="text-title-md font-bold">Acesse sua conta</h1>
          <p className="text-body-sm font-regular text-grayscale-300">
            Informe seu e-mail e senha para entrar
          </p>
        </div>
        <div className="flex-grow">
          <Input
            label="E-mail"
            icon={<img src={mail} width={24} />}
            placeholder="Seu e-mail cadastrado"
            type="email"
            filled
            className="mt-10 mb-4"
            {...register("email")}
          />
          <Input
            label="senha"
            icon={<img src={access} width={24} />}
            {...register("password")}
            type="password"
            placeholder="Sua senha de acesso"
            filled
          />
          <CustomButton
            disabled={isSubmitting}
            type="submit"
            endIcon={<MoveRight />}
            className="bg-orange-base mt-10"
          >
            Acessar
          </CustomButton>
        </div>

        <div className="flex flex-col">
          <p className="mb-2">Ainda não tem uma conta?</p>
          <CustomButton
            type="button"
            endIcon={<MoveRight />}
            variant="outline"
            className="text-orange-base"
            onClick={goSignUp}
          >
            Cadastrar
          </CustomButton>
        </div>
      </form>
    </>
  );
}
